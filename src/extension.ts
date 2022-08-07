// Import node module dependencies
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

const workspace = vscode.workspace;

// load local modules
import { Util } from './Util'; 
import { ExtensionPreferences } from './ExtensionPreferences';

// TODO update these to refer to .ts module
import * as  HighlightFields from './src/HighlightField.ts';
import * as  MaskIdentifiers from './src/MaskIdentifiers.ts';
import * as  FieldTreeView from './src/FieldTreeView.ts';
import * as  TcpMllpClient from './src/SendHl7Message.ts';
import * as  TcpMllpListener from './src/TCPListener.ts';
import * as  ExtractFields from './src/ExtractFields.ts';
import * as  CheckRequiredFields from './src/CheckRequiredFields.ts';
import * as  FindFieldClass from './src/FindField.ts';
import * as  SendHl7MessagePanelClass from './src/webviewpanels/SendHl7MessagePanel.ts';
import { Console } from 'console';


// the HL7 delimiters used by the message
var delimiters : object;
// Store the HL7 schema and associated field descriptions
var hl7Schema;
var hl7Fields;
// this stores the location or name of the field to highlight. The highlight is re-applied as the active document changes.
var currentItemLocation;
// the status bar item to display current HL7 schema this is loaded
var statusbarHL7Version = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
// the list of fields with hover decorations (displaying the field description);
var hoverDecorationList = [];
// stores the current highlighted field so that it can be cleared when selecting a new field.
//var currentDecoration;
// stores the current hover decorations
var currentHoverDecoration;
//  use this to prevent th active do hack from running more than once per session
var activeDocHackRun = false;
// store field locations used by Find and FindNext functions
var findFieldLocation;
// retrieves user preferences for the extension
var preferences : ExtensionPreferences = new ExtensionPreferences();
// default schema to use if not detected
const defaultSchemaVersion = "2.7.1";

//----------------------------------------------------
// Get the HL7 version from the message
// Return null if not detected
// Update the version information in the status bar 
function GetHL7Version(hl7Message: string): string | null {
	var hl7HeaderRegex: RegExp = /^MSH.+$/im;
	var result: RegExpExecArray | null = hl7HeaderRegex.exec(hl7Message);
	var supportedSchemas = ["2.1", "2.2", "2.3", "2.3.1", "2.4", "2.5", "2.5.1", "2.6", "2.7", "2.7.1"];

	if (result != null) {
		let hl7Version: string = result[0].split(delimiters.FIELD)[11];
		if (supportedSchemas.includes(hl7Version)) {
			SetStatusBarVersion(hl7Version, `HL7 v${hl7Version} (auto detected)`);
			return hl7Version;
		}
		// HL7 version detected is not supported (more recent than current schema definitions known by this extension)
		else {
			SetStatusBarVersion(defaultSchemaVersion, `HL7 v${hl7Version} is not supported. Defaulting to v${defaultSchemaVersion}`);
			return null;
		}
	}
	// Hl7 version not detected. Default to the most recent schema known by the extension 
	else {
		SetStatusBarVersion(defaultSchemaVersion, `HL7 version not detected in message. Defaulting to v${defaultSchemaVersion}`)
		return null;
	}
}

//----------------------------------------------------
// set the HL7 version information in the status bar
function SetStatusBarVersion(hl7Version: string, hl7SchemaTooltip: string) {
	// show HL7 version in status bar
	statusbarHL7Version.color = 'white';
	statusbarHL7Version.text = "$(info) HL7 schema: v" + hl7Version;  // $(info) - GitHub Octicon - https://octicons.github.com/
	statusbarHL7Version.tooltip = hl7SchemaTooltip;
	statusbarHL7Version.show();
}

//----------------------------------------------------
// load the appropriate hl7 schema based on the HL7 version
function LoadHL7Schema() {
	// exit if the editor is not active
	var activeEditor = vscode.window.activeTextEditor;
	var hl7SchemaTooltip = "";


	// return if no active editor
	if (!activeEditor) {
		return;
	}

	var currentMessage = activeEditor.document.getText();

	// get the HL7 version from the message in the active document
	var hl7Version: string | null = GetHL7Version(currentMessage);
	if (hl7Version == null) {
		hl7Version = defaultSchemaVersion;
	}

	// load the schema based on the HL7 version detected
	var hl7Schema = require('./schema/' + hl7Version + '/segments.js');
	//hl7Fields = require('./schema/' + hl7Version + '/fields.js');


	// load custom segment schemas
	//		preferences = new extensionPreferencesClass.ExtensionPreferences();
	if (preferences.CustomSegmentSchema != '') {
		if (fs.existsSync(preferences.CustomSegmentSchema)) {
			customSchema = require(preferences.CustomSegmentSchema);
			hl7Schema = { ...hl7Schema, ...customSchema } // append the custom segments
		}
		else {
			vscode.window.showWarningMessage("Could not load the custom schema file: " + preferences.CustomSegmentSchema);
		}
	}
	return hl7Schema;
}

//----------------------------------------------------
// load the appropriate hl7 fields descriptions based on the HL7 version
function LoadHL7Fields() {
	var activeEditor = vscode.window.activeTextEditor;

	// return if no active editor
	if (!activeEditor) {
		return;
	}

	var currentMessage = activeEditor.document.getText();

	// get the HL7 version from the message in the active document
	var hl7Version: string | null = GetHL7Version(currentMessage);
	if (hl7Version == null) {
		hl7Version = defaultSchemaVersion;
	}

	// load the field descriptions based on the HL7 version detected
	var hl7Fields = require('./schema/' + hl7Version + '/fields.js');
	return hl7Fields;
}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(`The extension "hl7tools" is now active.`);


	// update the HL7 delimiter characters from the current file
	delimiters = Util.ParseDelimiters();

	var activeEditor : vscode.TextEditor | undefined = vscode.window.activeTextEditor
	// only activate the field descriptions if it is identified as a HL7 file  
	if (activeEditor !== undefined) {
		if (!Util.IsHL7File(activeEditor.document)) {
			statusbarHL7Version.hide();
			return;
		}
	}
	// exit if the editor is not active
	if (!activeEditor) {
		return;
	}
	else {
		// load the HL7 schema based on the version reported by the MSH segment
		LoadHL7Schema();
		// apply the hover descriptions for each field
		UpdateFieldDescriptions();
		// create a new FindField object when the active editor changes
		findFieldLocation = new FindFieldClass(vscode.window.activeTextEditor.document, hl7Schema);
	}

	// the active document has changed. 
	vscode.window.onDidChangeActiveTextEditor(function (editor) {
		console.log("onDidChangeActiveTextEditor event");
		if (editor) {
			// update the HL7 delimiter characters from the current file
			delimiters = Util.ParseDelimiters();

			// only activate the field descriptions if it is identified as a HL7 file  
			if (Util.IsHL7File(editor.document)) {
				// the new document may be a different version of HL7, so load the appropriate version of schema
				LoadHL7Schema();

				// if the AddLinebreakOnActivation user preference is set, call the 'Add LineBreaks to Segment' command
				// load user preferences for the extension (SocketEncoding)
				if (preferences.AddLinebreakOnActivation == true) {
					AddLinebreaksToSegments();
				}

				UpdateFieldDescriptions();

				var result = HighlightFields.ShowHighlights(currentItemLocation, hl7Schema, preferences.HighlightBackgroundColour);

				// create a new FindField object when the active editor changes
				findFieldLocation = new FindFieldClass(vscode.window.activeTextEditor.document, hl7Schema);
			}
			else {
				statusbarHL7Version.hide();
			}
		}
	}, null, context.subscriptions);

	// document text has changed
	workspace.onDidChangeTextDocument(function (event) {
		console.log("Document text change detected");
		if (activeEditor && (event.document === activeEditor.document)) {
			// only activate the field descriptions if it is identified as a HL7 file  
			if (Util.IsHL7File(event.document)) {
				UpdateFieldDescriptions();
				// re apply field highlighting if set
				if (currentItemLocation) {
					HighlightFields.ShowHighlights(currentItemLocation, hl7Schema, preferences.HighlightBackgroundColour);
				}
			}
			else {
				statusbarHL7Version.hide();
			}
		}
	}, null, context.subscriptions);

	//-------------------------------------------------------------------------------------------
	// this function highlights HL7 items in the message based on item position identified by user.
	let highlightFieldCommand = vscode.commands.registerCommand('hl7tools.HighlightHL7Item', function () {
		console.log('In function Highlight Field');
		// prompt the user for the location of the HL7 field (e.g. PID-3). Validate the location via regex.
		var itemLocationPromise = vscode.window.showInputBox({ prompt: "Enter HL7 item location (e.g. 'PID-3'), or the partial field name (e.g. 'name')" });
		itemLocationPromise.then(function (itemLocation) {
			currentItemLocation = itemLocation;
			var result = HighlightFields.ShowHighlights(itemLocation, hl7Schema, preferences.HighlightBackgroundColour);
			if (result == HighlightFields.HighlightFieldReturnCode.ERROR_NO_FIELDS_FOUND) {
				vscode.window.showWarningMessage("A field matching " + itemLocation + " could not be located in the message");
			}
		});

	});
	context.subscriptions.push(highlightFieldCommand);


	//-------------------------------------------------------------------------------------------
	// this function clears any highlighted HL7 items in the message
	var ClearHighlightedFieldsCommand = vscode.commands.registerCommand('hl7tools.ClearHighlightedFields', function () {
		console.log('In function ClearHighlightedFields');
		currentItemLocation = null;
		HighlightFields.ShowHighlights(currentItemLocation, hl7Schema, preferences.HighlightBackgroundColour);
	});
	context.subscriptions.push(ClearHighlightedFieldsCommand);

	//-------------------------------------------------------------------------------------------
	// This function masks out patient & next of kin identifiers
	var maskIdentifiersCommand = vscode.commands.registerCommand('hl7tools.MaskIdentifiers', function () {
		console.log('In function MaskIdentifiers');
		MaskIdentifiers.MaskAll();
	});
	context.subscriptions.push(maskIdentifiersCommand);

	//-------------------------------------------------------------------------------------------
	// Command to update the field descriptions (as a hover decoration over the field in the editor window)
	var identifyFieldsCommand = vscode.commands.registerCommand('hl7tools.IdentifyFields', function () {
		console.log('Running command hl7tools.IdentifyFields');
		UpdateFieldDescriptions();
	});
	context.subscriptions.push(identifyFieldsCommand);

	//-------------------------------------------------------------------------------------------
	// This function outputs the field tokens that make up the segment.
	var displaySegmentCommand = vscode.commands.registerCommand('hl7tools.DisplaySegmentFields', function () {

		console.log('In function DisplaySegmentFields');

		// exit if the editor is not active
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		var segment = "";
		var currentDoc = editor.document;
		var selection = editor.selection;
		var currentLineNum = selection.start.line;
		const fileName = path.basename(currentDoc.uri.fsPath);
		var currentSegment = currentDoc.lineAt(currentLineNum).text;
		// extract the segment text from the line incase it is prefixed with line numbers etc.
		delimiters = Util.ParseDelimiters();
		var segmentRegEx = new RegExp("([a-z]{2}([a-z]|([0-9]))|([z]([a-z]|[0-9]){2}))\\" + delimiters.FIELD + ".+", "i");
		var match = segmentRegEx.exec(currentSegment);
		if (match != null) {
			segment = match[0];
		}
		if (Util.IsSegmentValid(segment, delimiters.FIELD)) {
			var segmentArray = segment.split(delimiters.FIELD);
			var segmentName = segmentArray[0];
			var output = FieldTreeView.DisplaySegmentAsTree(segment, hl7Schema, hl7Fields);

			// write the results to visual studio code's output window
			var channel = vscode.window.createOutputChannel('HL7 Fields - ' + segmentName + ' (' + fileName + ')');
			channel.clear();
			channel.appendLine(output);
			//channel.show(vscode.ViewColumn.Two);
			channel.show();
		}
		else {
			vscode.window.showWarningMessage("The current line does not appear to be a valid segment. Check for any characters prefixing the segment name.");
		}


	});
	context.subscriptions.push(displaySegmentCommand);


	//-------------------------------------------------------------------------------------------
	// this function splits HL7 batch files into a separate file per message
	var splitBatchFileCommand = vscode.commands.registerCommand('hl7tools.SplitBatchFile', function () {
		console.log("Splitting HL7 Batch file");
		var activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		var newMessage = "";
		var batchHeaderRegEx = new RegExp("(^FHS\\" + delimiters.FIELD + ")|(^BHS\\" + delimiters.FIELD + ")|(^BTS\\" + delimiters.FIELD + ")(^FTS\\" + delimiters.FIELD + ")", "i");
		var mshRegEx = new RegExp("^MSH\\" + delimiters.FIELD, "i");
		var currentDoc = activeEditor.document;

		var allMessages = currentDoc.getText();

		var re = new RegExp("^MSH\\" + delimiters.FIELD, "gim");
		var split = allMessages.split(re);

		// If the user is splitting the file into more than 100 new files, warn and provide the opportunity to cancel.
		// Opening a large number of files could be a drain on system resources. 
		if (split.length > 100) {
			var largeFileWarningPromise = vscode.window.showWarningMessage("This will open " + split.length + " new files. This could impact performance. Select 'Close' to cancel, or 'Continue' to proceed.", "Continue");
			largeFileWarningPromise.then(function (response) {
				if (response == "Continue") {
					// loop through all matches, discarding anything before the first match (i.e batch header segments, or empty strings if MSH is the first segment) 
					for (var i = 1; i < split.length; i++) {
						// TO DO: remove batch footers            
						// open the message in a new document, user will be prompted to save on exit
						var newMessage = "MSH" + delimiters.FIELD + split[i];
						Util.CreateNewDocument(newMessage, "hl7");
					}
				}
			});
		}
		// if the file is less than 100 messages, proceed with split.
		else {
			// loop through all matches, discarding anything before the first match (i.e batch header segments, or empty strings if MSH is the first segment) 
			for (var i = 1; i < split.length; i++) {
				// TO DO: remove batch footers            
				// open the message in a new document, user will be prompted to save on exit
				var newMessage = "MSH" + delimiters.FIELD + split[i];
				Util.CreateNewDocument(newMessage, "hl7");
			}
		}
	});
	context.subscriptions.push(splitBatchFileCommand);

	//-------------------------------------------------------------------------------------------
	// This function sends the message in the active document to a remote host via TCP. The HL7 message is framed using MLLP.
	var SendMessageCommand = vscode.commands.registerCommand('hl7tools.SendMessage', function () {

		console.log("Sending HL7 message to remote host");

		// get the user defaults for TCP Connection timeout & FavouriteRemoteHosts
		const tcpConnectionTimeout = preferences.ConnectionTimeOut * 1000;

		var activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		// get the HL7 message from the active document. Convert EOL to <CR> only.
		var currentDoc = activeEditor.document;
		var hl7Message = currentDoc.getText();
		// get the EOL character from the current document
		endOfLineChar = Util.GetEOLCharacter(currentDoc);
		hl7Message = hl7Message.replace(new RegExp(endOfLineChar, 'g'), String.fromCharCode(0x0d));

		// display the webview panel
		SendHl7MessageWebView = new SendHl7MessagePanelClass(vscode.extensions.getExtension('RobHolme.hl7tools').extensionUri);
		if (preferences.SocketEncodingPreference) {
			SendHl7MessageWebView.encodingPreference = preferences.SocketEncodingPreference;
		}
		SendHl7MessageWebView.render(hl7Message);
		// add any favourites from the user preferences to the webpanel's dropdown list
		SendHl7MessageWebView.updateFavourites(preferences.FavouriteRemoteHosts);

		// handle messages from the webview
		SendHl7MessageWebView.panel.webview.onDidReceiveMessage(
			message => {
				switch (message.command) {
					case 'sendMessage':
						TcpMllpClient.SendMessage(message.host, message.port, message.hl7, tcpConnectionTimeout, message.tls, message.encoding, message.ignoreCertError, SendHl7MessageWebView);
						return;
					case 'exit':
						SendHl7MessageWebView.panel.dispose();
						return;
				}
			},
			undefined,
			context.subscriptions
		);
	});

	context.subscriptions.push(SendMessageCommand);

	//-------------------------------------------------------------------------------------------
	// This function receives messages from a remote host via TCP. Messages displayed in the editor as new documents.
	var StartListenerCommand = vscode.commands.registerCommand('hl7tools.StartListener', function () {
		console.log("Starting Listener");
		var activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		var listenerPromise = vscode.window.showInputBox({ prompt: "Enter the TCP port to listen on for messages", value: preferences.DefaultListenerPort });
		listenerPromise.then(function (listenerPort) {
			TcpMllpListener.StartListener(listenerPort);
		});
	});

	context.subscriptions.push(StartListenerCommand);

	//-------------------------------------------------------------------------------------------
	// This functions stop listening for messages
	var StopListenerCommand = vscode.commands.registerCommand('hl7tools.StopListener', function () {
		console.log("Stopping Listsener");
		TcpMllpListener.StopListener();
	});

	context.subscriptions.push(StopListenerCommand);


	//-------------------------------------------------------------------------------------------
	// Extract matching segments from the message into a new document
	var ExtractSegments = vscode.commands.registerCommand('hl7tools.ExtractSegments', function () {
		console.log("Extracting Segments");
		// exit if the editor is not active
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		// get the EOL character from the current document
		var currentDoc = editor.document;
		endOfLineChar = Util.GetEOLCharacter(currentDoc);

		var extractedSegments = "";
		var selection = editor.selection;
		var currentLineNum = selection.start.line;
		const fileName = path.basename(currentDoc.uri.fsPath);
		var currentSegment = currentDoc.lineAt(currentLineNum).text
		var segmentArray = currentSegment.split(delimiters.FIELD);
		var segmentName = segmentArray[0].substring(0, 3);
		var segmentRegEx = new RegExp("^" + segmentName + "\\" + delimiters.FIELD, "i");
		for (var i = 0; i < currentDoc.lineCount; i++) {
			var currentLine = currentDoc.lineAt(i).text;
			if (segmentRegEx.test(currentLine) == true) {
				extractedSegments += currentLine + endOfLineChar;
			}
		}
		// display the extracted segments in a new window
		Util.CreateNewDocument(extractedSegments, "hl7");
	});
	context.subscriptions.push(ExtractSegments);


	//-------------------------------------------------------------------------------------------
	// Register the command 'Add Linebreaks to Segments'
	var AddLinebreakToSegmentCommand = vscode.commands.registerCommand('hl7tools.AddLinebreakToSegment', function () {
		console.log('Running command hl7tools.AddLinebreakToSegment');
		AddLinebreaksToSegments();
		UpdateFieldDescriptions();
	});
	context.subscriptions.push(AddLinebreakToSegmentCommand);


	//-------------------------------------------------------------------------------------------
	// Register the command 'Extract Fields from all Messages'
	var ExtractFieldsCommand = vscode.commands.registerCommand('hl7tools.ExtractFields', function () {
		console.log('Running command hl7tools.ExtractFields');

		// cycle through all documents, otherwise they won't be included.
		// ONLY NEED TO DO THIS ONCE PER SESSION, OPENING NEW DOCUMENTS IS FINE.
		if (this.activeDocHackRun) {
			var fieldPromise = vscode.window.showInputBox({ prompt: "Enter the field to extract (e.g. PID-3)" });
			fieldPromise.then(function (fieldToExtract) {
				ExtractFields.ExtractAllFields(fieldToExtract);
			});
		}
		else {
			this.activeDocHackRun = true;
			activeDocHackPromise = Util.findActiveDocsHack();
			activeDocHackPromise.then(function () {
				var fieldPromise = vscode.window.showInputBox({ prompt: "Enter the field to extract (e.g. PID-3)" });
				fieldPromise.then(function (fieldToExtract) {
					ExtractFields.ExtractAllFields(fieldToExtract);
				});
			});
		}
	});
	context.subscriptions.push(ExtractFieldsCommand);


	//-------------------------------------------------------------------------------------------
	// Register the command 'Confirm all required fields are present'
	var CheckRequiredFieldsCommand = vscode.commands.registerCommand('hl7tools.CheckRequiredFields', function () {
		console.log('Running command hl7tools.CheckRequiredFields');

		// exit if the editor is not active
		var editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		// Check required fields 
		var missingRequiredFields = CheckRequiredFields.CheckAllFields(hl7Schema);
		const fileName = path.basename(editor.document.uri.fsPath);

		// Write the results to visual studio code's output window if missing required field values are identified
		if (missingRequiredFields.length > 0) {
			var channel = vscode.window.createOutputChannel('Missing required fields - ' + fileName);
			channel.clear();
			channel.appendLine("The following required fields are missing, or contained no value:\n\nLine   Field   Description\n----   -----   -----------");
			for (var i = 0; i < missingRequiredFields.length; i++) {
				var hl7Location = missingRequiredFields[i].FieldLocation;
				var segmentName = hl7Location.split('-')[0];
				var fieldIndex = hl7Location.split('-')[1] - 1;
				var output = Util.padRight(missingRequiredFields[i].LineNumber, 7) + Util.padRight(hl7Location, 8) + hl7Schema[segmentName].fields[fieldIndex].desc;
				channel.appendLine(output);
			}
			channel.appendLine("\n\nPlease note that this does not consider conditional fields, and does not attempt to validate the data type of required fields");
			channel.show(vscode.ViewColumn.Two);
		}

		// display prompt indicating all required fields have values 
		else {
			vscode.window.showInformationMessage("All required fields are present in the message and contain values");
		}
	});
	context.subscriptions.push(CheckRequiredFieldsCommand);


	//-------------------------------------------------------------------------------------------
	// Register the command 'Find Field'
	var FindFieldCommand = vscode.commands.registerCommand('hl7tools.FindField', function () {
		console.log('Running command hl7tools.FindField');
		// prompt the user for the location of the HL7 field (e.g. PID-3). Validate the location via regex.
		var itemLocationPromise = vscode.window.showInputBox({ prompt: "Enter HL7 item location (e.g. 'PID-3'), or the partial field name (e.g. 'name')" });
		itemLocationPromise.then(function (itemLocation) {
			var findResult = findFieldLocation.Find(itemLocation);
			if (findResult == findFieldLocation.findNextReturnCode.ERROR_NO_FIELDS_FOUND) {
				vscode.window.showInformationMessage("No matching fields found.");
			}
		});
	});
	context.subscriptions.push(FindFieldCommand);


	//-------------------------------------------------------------------------------------------
	// Register the command 'Find Next Field'
	var FindNextFieldCommand = vscode.commands.registerCommand('hl7tools.FindNextField', function () {
		console.log('Running command hl7tools.FindNextField');

		var findNextResult = findFieldLocation.FindNext();
		// warn user when last match found, or no matches found, or when the 'Find Fields' function hasn't been called first.
		if (findNextResult === findFieldLocation.findNextReturnCode.SUCCESS_LAST_FIELD_FOUND) {
			vscode.window.showInformationMessage("All fields found. Resuming from beginning of message");
		}
		else if (findNextResult === findFieldLocation.findNextReturnCode.ERROR_NO_SEARCH_DEFINED) {
			vscode.window.showInformationMessage("No search defined. Use 'HL7 Tools: Find Field' function first.");
		}
		else if (findNextResult === findFieldLocation.findNextReturnCode.ERROR_NO_FIELDS_FOUND) {
			vscode.window.showInformationMessage("No matching fields found.");
		}
	});
	context.subscriptions.push(FindNextFieldCommand);


	//-------------------------------------------------------------------------------------------
	// add line breaks between segments (if they are not present)
	function AddLinebreaksToSegments() {
		var activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		// get the EOL character from the current document
		var currentDoc = activeEditor.document;
		var hl7Message = currentDoc.getText();
		endOfLineChar = Util.GetEOLCharacter(currentDoc);

		// build the regex from the list of segment names in the schema
		var regexString = "(?=";
		Object.entries(hl7Schema).forEach(([key]) => {
			regexString += key + "\\" + delimiters.FIELD + "|";
		});
		// include support for custom 'Z' segments (not in the schema).
		// these are prone to false positives - e.g. a field with the name ZOE would still match the definition of a Z segment. 
		// assuming there will always be a space in front to reduce false positives
		regexString += "\sZ[A-Z]\\w\\|)";
		var segmentRegEx = new RegExp(regexString, 'g');

		// split the message into segments using the regex, then join elements back together with the EOL character separating segments.
		var segments = hl7Message.split(segmentRegEx);
		var newMessage = segments.join(endOfLineChar);

		// remove any extra line breaks (if the file contains some segments delimited correctly)
		newMessage = newMessage.replace(/(\r\n|\n|\r){2}/gm, endOfLineChar);

		// replace current document text with reformatted text
		var start = new vscode.Position(0, 0);
		var end = currentDoc.positionAt(hl7Message.length);
		activeEditor.edit(editHelper => {
			editHelper.replace(new vscode.Range(start, end), newMessage);
		});
	}


	//-------------------------------------------------------------------------------------------
	// apply descriptions to each field as a hover decoration (tooltip)
	function UpdateFieldDescriptions() {

		// exit if the editor is not active
		var activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		// don't apply descriptions if file is too large (i.e. large hl7 batch files). 
		// Performance can be impacted on systems with low resources
		var currentDoc = activeEditor.document;
		var maxLines = Math.min(currentDoc.lineCount, preferences.MaxLinesForFieldDescriptions);
		var regEx = new RegExp("\\" + delimiters.FIELD, "g");
		var validSegmentRegEx = new RegExp("^[a-z][a-z]([a-z]|[0-9])\\" + delimiters.FIELD, "i");
		// get the EOL character from the current document
		endOfLineChar = Util.GetEOLCharacter(currentDoc);

		// calculate the number of characters at the end of line (<CR>, or <CR><LF>)
		var endOfLineLength = endOfLineChar.length;

		var hoverDecorationType = vscode.window.createTextEditorDecorationType({
		});

		// dispose of any prior decorations
		if (hoverDecorationList.length > 0) {
			currentHoverDecoration.dispose();
			hoverDecorationList = [];
		}
		// Search each line in the message to locate a matching segment.
		// For large documents end after a defined maximum number of lines (set via user preference) 
		var positionOffset = 0;
		for (let lineIndex = 0; lineIndex < maxLines; lineIndex++) {
			var startPos = null;
			var endPos = null;
			var currentLine = currentDoc.lineAt(lineIndex).text;
			var fields = currentLine.split(delimiters.FIELD);
			var segmentName = fields[0];
			var segmentDef = hl7Schema[segmentName];
			var fieldCount = -1;
			var previousEndPos = null;
			var fieldDescription = "";
			// ignore all lines that do not at least contain a segment name and field delimiter. This should be the absolute minimum for a segment
			if (!validSegmentRegEx.test(currentLine)) {
				positionOffset += currentLine.length + endOfLineLength;
				continue;
			}
			// the first delimiter is a field for MSH, FHS, and BHS segments
			if (segmentName.toUpperCase() == 'MSH' || segmentName.toUpperCase() == 'FHS' || segmentName.toUpperCase() == 'BHS') {
				fieldCount++;
			}
			// get the location of field delimiter characters
			while (match = regEx.exec(currentLine)) {
				endPos = activeEditor.document.positionAt(positionOffset + match.index);
				startPos = previousEndPos;
				previousEndPos = activeEditor.document.positionAt(positionOffset + match.index + 1);
				// when the next field is located, apply a hover tag decoration to the previous field
				if (startPos) {
					// try/catch needed for custom 'Z' segments not listed in the HL7 data dictionary.
					try {
						fieldDescription = segmentDef.fields[fieldCount].desc;
					}
					catch (err) {
						fieldDescription = "";
					}
					var decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: fieldDescription + " (" + segmentName + "-" + (fieldCount + 1) + ")" };
					hoverDecorationList.push(decoration);
				}
				fieldCount++;
			}
			// add a decoration for the last field in the segment (not bounded by a field delimiter) 
			startPos = previousEndPos;
			endPos = activeEditor.document.positionAt(positionOffset + (currentLine.length + 1));
			try {
				fieldDescription = segmentDef.fields[fieldCount].desc;
			}
			catch (err) {
				fieldDescription = "";
			}
			var decoration = { range: new vscode.Range(startPos, endPos), hoverMessage: fieldDescription + " (" + segmentName + "-" + (fieldCount + 1) + ")" };
			hoverDecorationList.push(decoration);

			// the field locations are relative to the current line, so calculate the offset of previous lines to identify the location within the file.
			positionOffset += currentLine.length + endOfLineLength;
		}

		// apply the hover decoration to the field 
		activeEditor.setDecorations(hoverDecorationType, hoverDecorationList);
		currentHoverDecoration = hoverDecorationType;
	}

}

// this method is called when your extension is deactivated
export function deactivate() { 
	console.log("deactivating HL7Tools extension");
}

