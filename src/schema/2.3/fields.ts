let fields_23 = {
    "AD": {
        "desc": "Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State Or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip Or Postal Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Address Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CD": {
        "desc": "Channel Definition",
        "subfields": [
            {
                "datatype": "CM_WVI",
                "desc": "Channel Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_CD_ELECTRODE",
                "desc": "Electrode Names",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_CSU",
                "desc": "Channel Sensitivity/units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_CCP",
                "desc": "Calibration Parameters",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sampling Frequency",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_MDV",
                "desc": "Minimum/maximum Data Values",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CE": {
        "desc": "Coded Element",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Coding System",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Alternate Coding System",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CF": {
        "desc": "Coded Element With Formatted Values",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Formatted Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Coding System",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "FT",
                "desc": "Alternate Formatted Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Alternate Coding System",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CK": {
        "desc": "Composite ID With Check Digit",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying The Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_ABS_RANGE": {
        "desc": "Absolute Range",
        "subfields": [
            {
                "datatype": "CM_RANGE",
                "desc": "Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Numeric Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Percent Per Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_AUI": {
        "desc": "Authorization Information",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Authorization Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Source",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_CCD": {
        "desc": "Charge Time",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "When To Charge Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Date/time",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_CCP": {
        "desc": "Channel Calibration Parameters",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Sensitivity Correction Factor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Baseline",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Time Skew",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_CD_ELECTRODE": {
        "desc": "Electrode Parameter",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Source Name 1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Source Name 2",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_CSU": {
        "desc": "Channel Sensitivity/units",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Sensitivity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Units Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units Name Of Coding System",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Units Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units Name Of Alternate Coding System",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DDI": {
        "desc": "Daily Deductible",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Delay Days",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number Of Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DIN": {
        "desc": "Activation Date",
        "subfields": [
            {
                "datatype": "TS",
                "desc": "Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Institution Name",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DLD": {
        "desc": "Discharge Location",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Discharge Location",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DLT": {
        "desc": "Delta Check",
        "subfields": [
            {
                "datatype": "CM_RANGE",
                "desc": "Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Numeric Threshold",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Change",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Length Of Time-days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_DTN": {
        "desc": "Day Type And Number",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Day Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Number Of Days",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_EIP": {
        "desc": "Parent Order",
        "subfields": [
            {
                "datatype": "EI",
                "desc": "Parent s Placer Order Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "EI",
                "desc": "Parent s Filler Order Number",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_ELD": {
        "desc": "Error",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Segment ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sequence",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Field Position",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Code Identifying Error",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_LA1": {
        "desc": "Location With Address Information",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Point Of Care",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Person Location Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Floor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State Or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip Or Postal Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Address Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_MDV": {
        "desc": "Minimum/maximum Data Values",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Minimum Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Maximum Value",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_MOC": {
        "desc": "Charge To Practise",
        "subfields": [
            {
                "datatype": "MO",
                "desc": "Dollar Amount",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Charge Code",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_MSG": {
        "desc": "Message Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Message Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Trigger Event",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_NDL": {
        "desc": "Observing Practitioner",
        "subfields": [
            {
                "datatype": "CN",
                "desc": "OP Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Start Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "End Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Point Of Care",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Person Location Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Floor",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_OCD": {
        "desc": "Occurence",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Occurrence Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_OSD": {
        "desc": "Order Sequence",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Sequence/results Flag",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Placer Order Number Entity Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Placer Order Number Namespace ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Filler Order Number Entity Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Filler Order Number Namespace ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Sequence Condition Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Maximum Number Of Repeats",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Placer Order Number Universal ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Placer Order Number Universal ID Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Filler Order Number Universal ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Filler Order Number Universal ID Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_OSP": {
        "desc": "Occurence Span",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Occurrence Span Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Start Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Occurrence Span Stop Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PCF": {
        "desc": "Pre-certification Required",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Pre-certification Patient Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Pre-certification Required",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Pre-certification Windwow",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PEN": {
        "desc": "Penalty",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Penalty Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Penalty Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PI": {
        "desc": "Person Identifier",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Type Of ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Qualifying Info",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PIP": {
        "desc": "Privileges",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Privilege",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Privilege Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Activation Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PLN": {
        "desc": "Practitioner ID Numbers",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Type Of ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State/other Qualifying Info",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PRL": {
        "desc": "Parent Result Link",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "OBX-3 Observation Identifier Of Parent Result",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "OBX-4 Sub-ID Of Parent Result",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Part Of OBX-5 Observation Result From Parent",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_PTA": {
        "desc": "Policy Type",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Policy Type",
                "opt": 1,
                "rep": 1,
                "table": 147
            },
            {
                "datatype": "IS",
                "desc": "Amount Class",
                "opt": 1,
                "rep": 1,
                "table": 193
            },
            {
                "datatype": "NM",
                "desc": "Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RANGE": {
        "desc": "Wertebereich",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Low Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "High Value",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RFR": {
        "desc": "Reference Range",
        "subfields": [
            {
                "datatype": "CM_RANGE",
                "desc": "Reference Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Sex",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_RANGE",
                "desc": "Age Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_RANGE",
                "desc": "Age Gestation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Species",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Race/subspecies",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Conditions",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RI": {
        "desc": "Interval",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Explicit Time Interval",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_RMC": {
        "desc": "Room Coverage",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Room Type",
                "opt": 1,
                "rep": 1,
                "table": 145
            },
            {
                "datatype": "IS",
                "desc": "Amount Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Coverage Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_SPD": {
        "desc": "Specialty",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Specialty Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Governing Board",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Eligible Or Certified",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Date Of Certification",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_SPS": {
        "desc": "Specimen Source",
        "subfields": [
            {
                "datatype": "CE",
                "desc": "Specimen Source Name Or Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Additives",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Freetext",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Body Site",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Site Modifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Collection Modifier Method Code",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_UVC": {
        "desc": "Value Code And Amount",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Value Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value Amount",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_VR": {
        "desc": "Value Qualifier",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "First Data Code Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Last Data Code Calue",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM_WVI": {
        "desc": "Channel Identifier",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Channel Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Channel Name",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CN": {
        "desc": "Composite ID Number And Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source Table",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CNE": {
        "desc": "Coded with No Exceptions",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Coding System",
                "opt": 1,
                "rep": 1,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name of Alternate Coding System",
                "opt": 1,
                "rep": 1,
                "table": 396
            },
            {
                "datatype": "ST",
                "desc": "Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Coding System Version ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Original Text",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CP": {
        "desc": "Composite Price (2.8.8",
        "subfields": [
            {
                "datatype": "MO",
                "desc": "Price",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Price Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "From Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "To Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Range Units",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Range Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CQ": {
        "desc": "Composite Quantity With Units",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CX": {
        "desc": "Extended Composite ID With Check Digit",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying The Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1,
                "table": 203
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DLN": {
        "desc": "Driver's License Number",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Driver s License Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Issuing State, Province, Country",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "DT",
                "desc": "Expiration Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DR": {
        "desc": "Date Time Range (2.8.12",
        "subfields": [
            {
                "datatype": "TS",
                "desc": "Range Start Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Range End Date/time",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DT": {
        "desc": "Date",
        "subfields": []
    },
    "ED": {
        "desc": "Encapsulated Data",
        "subfields": [
            {
                "datatype": "HD",
                "desc": "Source Application",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type Of Data",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Data Subtype",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Encoding",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Data",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "EI": {
        "desc": "Entity Identifier",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Entity Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Namespace ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Universal ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Universal ID Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "FC": {
        "desc": "Financial Class",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Financial Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Effective Date",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "FT": {
        "desc": "Formatted Text Data",
        "subfields": []
    },
    "HD": {
        "desc": "Hierarchic Designator",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Namespace ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Universal ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Universal ID Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "ID": {
        "desc": "Coded values for HL7 tables",
        "subfields": []
    },
    "IS": {
        "desc": "Coded value for user-defined tables",
        "subfields": []
    },
    "JCC": {
        "desc": "Job Code Class",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Job Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Job Class",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "MA": {
        "desc": "Multiplexed Array",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Sample 1 From Channel 1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample 1 From Channel 2",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample 1 From Channel 3",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample 2 From Channel 1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample 2 From Channel 2",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Sample 2 From Channel 3",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "MO": {
        "desc": "Money",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Denomination",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "NA": {
        "desc": "Numeric Array",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Value1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value2",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value3",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Value4",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "NM": {
        "desc": "Numeric",
        "subfields": []
    },
    "PL": {
        "desc": "Person Location",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Point Of Care",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Room",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Bed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Location Status",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Person Location Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Building",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Floor",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Location Type",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PPN": {
        "desc": "Performing Person Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source Table",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying The Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Date/Time Action Performed",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "PT": {
        "desc": "Processing Type",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Processing ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Processing Mode",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "QIP": {
        "desc": "Query Input Parameter List",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Field Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Value1&value2&value3",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "QSC": {
        "desc": "Query Selection Criteria",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Name Of Field",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Relational Operator",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Value",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Relational Conjunction",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RCD": {
        "desc": "Row Column Definition",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "HL7 Item Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "HL7 Date Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Maximum Column Width",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RI": {
        "desc": "Repeat Interval",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Repeat Pattern",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Explicit Time Interval",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "RP": {
        "desc": "Reference Pointer",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Pointer",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Application ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Type Of Data",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Subtype",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SCV": {
        "desc": "Scheduling Class Value Pair",
        "subfields": [
            {
                "datatype": "IS",
                "desc": "Parameter Class",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Parameter Value",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SI": {
        "desc": "Sequence ID",
        "subfields": []
    },
    "SN": {
        "desc": "Structured Numeric",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Comparator",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Num1",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Separator Or Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Num2",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "ST": {
        "desc": "String Data",
        "subfields": []
    },
    "TM": {
        "desc": "Time",
        "subfields": []
    },
    "TN": {
        "desc": "Telephone Number",
        "subfields": []
    },
    "TQ": {
        "desc": "Timing Quantity",
        "subfields": [
            {
                "datatype": "CQ",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_RI",
                "desc": "Interval",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Duration",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Start Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "End Date/time",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Priority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Condition",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TX",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Conjunction",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CM_OSD",
                "desc": "Order Sequencing",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "TS": {
        "desc": "Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Time Of An Event",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "TX": {
        "desc": "Text Data",
        "subfields": []
    },
    "VARIES": {
        "desc": "Variable Datatype",
        "subfields": []
    },
    "VH": {
        "desc": "Visiting Hours",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Start Day Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "End Day Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TM",
                "desc": "Start Hour Range",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TM",
                "desc": "End Hour Range",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XAD": {
        "desc": "Extended Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State Or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip Or Postal Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Country",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Address Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Geographic Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "County/parish Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Census Tract",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XCN": {
        "desc": "Extended Composite ID Number And Name (2.8.46",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Source Table",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Identifier Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying The Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XON": {
        "desc": "Extended Composite Name And ID For Organizations (2.8.47",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Organization Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Organization Name Type Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying The Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Authority",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "IS",
                "desc": "Identifier Type Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "HD",
                "desc": "Assigning Facility ID",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XPN": {
        "desc": "Extended Person Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name Type Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Name Representation Code",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "XTN": {
        "desc": "Extended Telecommunication Number",
        "subfields": [
            {
                "datatype": "TN",
                "desc": "Telephone Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Telecommunication Use Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Telecommunication Equipment Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Email Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Country Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Area/city Code",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Phone Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Extension",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Any Text",
                "opt": 1,
                "rep": 1
            }
        ]
    }
};

