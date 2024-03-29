define([], function() {
    var currencyData = [
        ["AED", 784, 2, "AE"],
        ["AFN", 971, 2, "AF"],
        ["ALL", 8, 2, "AL"],
        ["AMD", 51, 0, "AM"],
        ["ANG", 532, 2, "AN"],
        ["AOA", 973, 1, "AO"],
        ["ARS", 32, 2, "AR"],
        ["AUD", 36, 2, "AUCXCCHMKINRNFTV"],
        ["AWG", 533, 2, "AW"],
        ["AZN", 944, 2, "AZ"],
        ["BAM", 977, 2, "BA"],
        ["BBD", 52, 2, "BB"],
        ["BDT", 50, 2, "BD"],
        ["BGN", 975, 2, "BG"],
        ["BHD", 48, 3, "BH"],
        ["BIF", 108, 0, "BI"],
        ["BMD", 60, 2, "BM"],
        ["BND", 96, 2, "BN"],
        ["BOB", 68, 2, "BO"],
        ["#BOV", 984, 2, "BO"],
        ["BRL", 986, 2, "BR"],
        ["BSD", 44, 2, "BS"],
        ["BTN", 64, 2, "BT"],
        ["BWP", 72, 2, "BW"],
        ["BYR", 974, 0, "BY"],
        ["BZD", 84, 2, "BZ"],
        ["CAD", 124, 2, "CA"],
        ["CDF", 976, 2, "CD"],
        ["#CHE", 947, 2, "CH"],
        ["CHF", 756, 2, "CHLI"],
        ["#CHW", 948, 2, "CH"],
        ["#CLF", 990, 0, "CL"],
        ["CLP", 152, 0, "CL"],
        ["CNY", 156, 1, "CN"],
        ["COP", 170, 0, "CO"],
        ["#COU", 970, 2, "CO"],
        ["CRC", 188, 2, "CR"],
        ["#CUC", 931, 2, "CU"],
        ["CUP", 192, 2, "CU"],
        ["CVE", 132, 2, "CV"],
        ["CZK", 203, 2, "CZ"],
        ["DJF", 262, 0, "DJ"],
        ["DKK", 208, 2, "DKFOGL"],
        ["DOP", 214, 2, "DO"],
        ["DZD", 12, 2, "DZ"],
        ["EEK", 233, 2, "EE"],
        ["EGP", 818, 2, "EG"],
        ["ERN", 232, 2, "ER"],
        ["ETB", 230, 2, "ET"],
        ["EUR", 978, 2, "IEFRESPTFIBENLLUDEATITMTSKSIGRCYADMCMESMVA"],
        ["FJD", 242, 2, "FJ"],
        ["FKP", 238, 2, "FK"],
        ["GBP", 826, 2, "GBIMJEGGGSIO"],
        ["GEL", 981, 2, "GE"],
        ["GHS", 936, 2, "GH"],
        ["GIP", 292, 2, "GI"],
        ["GMD", 270, 2, "GM"],
        ["GNF", 324, 0, "GN"],
        ["GTQ", 320, 2, "GT"],
        ["GYD", 328, 2, "GY"],
        ["HKD", 344, 2, "HK"],
        ["HNL", 340, 2, "HN"],
        ["HRK", 191, 2, "HR"],
        ["HTG", 332, 2, "HT"],
        ["HUF", 348, 2, "HU"],
        ["IDR", 360, 0, "ID"],
        ["ILS", 376, 2, "IL"],
        ["INR", 356, 2, "IN"],
        ["IQD", 368, 0, "IQ"],
        ["IRR", 364, 0, "IR"],
        ["ISK", 352, 0, "IS"],
        ["JMD", 388, 2, "JM"],
        ["JOD", 400, 3, "JO"],
        ["JPY", 392, 0, "JP"],
        ["KES", 404, 2, "KE"],
        ["KGS", 417, 2, "KG"],
        ["KHR", 116, 0, "KH"],
        ["KMF", 174, 0, "KM"],
        ["KPW", 408, 0, "KP"],
        ["KRW", 410, 0, "KR"],
        ["KWD", 414, 3, "KW"],
        ["KYD", 136, 2, "KY"],
        ["KZT", 398, 2, "KZ"],
        ["LAK", 418, 0, "LA"],
        ["LBP", 422, 0, "LB"],
        ["LKR", 144, 2, "LK"],
        ["LRD", 430, 2, "LR"],
        ["LSL", 426, 2, "LS"],
        ["LTL", 440, 2, "LT"],
        ["LVL", 428, 2, "LV"],
        ["LYD", 434, 3, "LY"],
        ["MAD", 504, 2, "MAEH"],
        ["MDL", 498, 2, "MD"],
        ["MGA", 969, 1, "MG#Adjusted decimal places"],
        ["MKD", 807, 2, "MK"],
        ["MMK", 104, 0, "MM"],
        ["MNT", 496, 2, "MN"],
        ["MOP", 446, 1, "MO"],
        ["MRO", 478, 1, "MR#Adjusted decimal places"],
        ["MUR", 480, 2, "MU"],
        ["MVR", 462, 2, "MV"],
        ["MWK", 454, 2, "MW"],
        ["MXN", 484, 2, "MX"],
        ["#MXV", 979, 2, "MX"],
        ["MYR", 458, 2, "MY"],
        ["MZN", 943, 2, "MZ"],
        ["NAD", 516, 2, "NA"],
        ["NGN", 566, 2, "NG"],
        ["NIO", 558, 2, "NI"],
        ["NOK", 578, 2, "NOBV"],
        ["NPR", 524, 2, "NP"],
        ["NZD", 554, 2, "NZCKNUPNTK"],
        ["OMR", 512, 3, "OM"],
        ["PAB", 590, 2, "PA"],
        ["PEN", 604, 2, "PE"],
        ["PGK", 598, 2, "PG"],
        ["PHP", 608, 2, "PH"],
        ["PKR", 586, 2, "PK"],
        ["PLN", 985, 2, "PL"],
        ["PYG", 600, 0, "PY"],
        ["QAR", 634, 2, "QA"],
        ["RON", 946, 2, "RO"],
        ["RSD", 941, 2, "RS"],
        ["RUB", 643, 2, "RU"],
        ["RWF", 646, 0, "RW"],
        ["SAR", 682, 2, "SA"],
        ["SBD", 90, 2, "SB"],
        ["SCR", 690, 2, "SC"],
        ["SDG", 938, 2, "SD"],
        ["SEK", 752, 2, "SE"],
        ["SGD", 702, 2, "SG"],
        ["SHP", 654, 2, "SH"],
        ["SLL", 694, 0, "SL"],
        ["SOS", 706, 2, "SO"],
        ["SRD", 968, 2, "SR"],
        ["STD", 678, 0, "ST"],
        ["SYP", 760, 2, "SY"],
        ["SZL", 748, 2, "SZ"],
        ["THB", 764, 2, "TH"],
        ["TJS", 972, 2, "TJ"],
        ["TMT", 934, 2, "TM"],
        ["TND", 788, 3, "TN"],
        ["TOP", 776, 2, "TO"],
        ["TRY", 949, 2, "TR"],
        ["TTD", 780, 2, "TT"],
        ["TWD", 901, 1, "TW"],
        ["TZS", 834, 2, "TZ"],
        ["UAH", 980, 2, "UA"],
        ["UGX", 800, 0, "UG"],
        ["USD", 840, 2, "USASECSVGUMHFMMPPWPRTLTCVGVI#HTPA"],
        ["#USN", 997, 2, "US"],
        ["#USS", 998, 2, "US"],
        ["UYU", 858, 2, "UY"],
        ["UZS", 860, 2, "UZ"],
        ["VEF", 937, 2, "VE"],
        ["VND", 704, 0, "VN"],
        ["VUV", 548, 0, "VU"],
        ["WST", 882, 2, "WS"],
        ["XAF", 950, 0, "CMCFCGTDGQGA"],
        ["XAG", 961, -1, ""],
        ["XAU", 959, -1, ""],
        ["XBA", 955, -1, ""],
        ["XBB", 956, -1, ""],
        ["XBC", 957, -1, ""],
        ["XBD", 958, -1, ""],
        ["XCD", 951, 2, "AIAGDMGDMSKNLCVC"],
        ["XDR", 960, -1, ""],
        ["XFU", -1, -1, ""],
        ["XOF", 952, 0, "BJBFCIGWMLNESNTG"],
        ["XPD", 964, -1, ""],
        ["XPF", 953, 0, "PFNCWF"],
        ["XPT", 962, -1, ""],
        ["XTS", 963, -1, ""],
        ["XXX", 999, -1, ""],
        ["YER", 886, 0, "YE"],
        ["ZAR", 710, 2, "ZA"],
        ["ZMK", 894, 0, "ZM"],
        ["ZWL", 932, 2, "ZW"]
    ];

    return currencyData;

});