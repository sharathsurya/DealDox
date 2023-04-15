const countrySelect = document.getElementById("country-select");
const currencyInput = document.getElementById("currency-input");

countrySelect.addEventListener("change", () => {
    switch (countrySelect.value) {
        case "":
            currencyInput.value = "";
            break;

        case "AFN":
            currencyInput.value = "Afghan Afghani";
            break;
        case "ALL":
            currencyInput.value = "Albanian Lek";
            break;
        case "DZL":
            currencyInput.value = "Algerian Dinar";
            break;
        case "AOA":
            currencyInput.value = "Angolan Kwanza";
            break;
        case "ARS":
            currencyInput.value = "Argentine Peso";
            break;
        case "AMD":
            currencyInput.value = "Armenian Dram";
            break;
        case "AWG":
            currencyInput.value = "Aruban Florin";
            break;
        case "AUD":
            currencyInput.value = "Australian Dollar";
            break;
        case "AUE":
            currencyInput.value = "Euro";
            break;

        case "AZN":
            currencyInput.value = "Azerbaijani Manat";
            break;
        case "BSD":
            currencyInput.value = "Bahamian Dollar";
            break;
        case "BHD":
            currencyInput.value = "Bahraini Dinar";
            break;
        case "BDT":
            currencyInput.value = "Bangladeshi Taka";
            break;
        case "BBD":
            currencyInput.value = "Barbadian Dollar";
            break;
        case "BYR":
            currencyInput.value = "Belarusian Ruble";
            break;
        case "BEF":
            currencyInput.value = "Belgian Franc";
            break;
        case "BZD":
            currencyInput.value = "Belize Dollar";
            break;
        case "BMD":
            currencyInput.value = "Bermudan Dollar";
            break;
        case "BTN":
            currencyInput.value = "Bhutanese Ngultrum";
            break;
        case "BOB":
            currencyInput.value = "Bolivian Boliviano";
            break;
        case "BAM":
            currencyInput.value = "Bosnia-Herzegovina Convertible Mark";
            break;
        case "BWP":
            currencyInput.value = "Botswanan Pula";
            break;
        case "BRL":
            currencyInput.value = "Brazilian Real";
            break;
        case "GBP":
            currencyInput.value = "British Pound Sterling";
            break;
        case "BND":
            currencyInput.value = "Brunei Dollar";
            break;
        case "BGN":
            currencyInput.value = "Bulgarian Lev";
            break;
        case "BIF":
            currencyInput.value = "Burundian Franc";
            break;
        case "KHR":
            currencyInput.value = "Cambodian Riel";
            break;
            case "CMF":
            currencyInput.value = "CFA Franc";
            break;
        case "CAD":
            currencyInput.value = "Canadian Dollar";
            break;
        case "CVE":
            currencyInput.value = "Cape Verdean Escudo";
            break;
        case "KYD":
            currencyInput.value = "Cayman Islands Dollar";
            break;
        case "XPF":
            currencyInput.value = "CFP Franc";
            break;
        case "CLP":
            currencyInput.value = "Chilean Peso";
            break;
        case "CNY":
            currencyInput.value = "Chinese Yuan";
            break;
        case "COP":
            currencyInput.value = "Colombian Peso";
            break;
        case "KMF":
            currencyInput.value = "Comorian Franc";
            break;
        case "CDF":
            currencyInput.value = "Congolese Franc";
            break;
        case "CRC":
            currencyInput.value = "Costa Rican ColÃ³n";
            break;
        case "HRK":
            currencyInput.value = "Croatian Kuna";
            break;
        case "CUC":
            currencyInput.value = "Cuban Convertible Peso";
            break;
        case "CZK":
            currencyInput.value = "Czech Republic Koruna";
            break;
        case "DKK":
            currencyInput.value = "Danish Krone";
            break;
        case "DJF":
            currencyInput.value = "Djiboutian Franc";
            break;
        case "DOP":
            currencyInput.value = "Dominican Peso";
            break;
        case "XCD":
            currencyInput.value = "East Caribbean Dollar";
            break;
        case "EGP":
            currencyInput.value = "Egyptian Pound";
            break;
        case "ERN":
            currencyInput.value = "Eritrean Nakfa";
            break;
        case "EEK":
            currencyInput.value = "Estonian Kroon";
            break;
        case "ETB":
            currencyInput.value = "Ethiopian Birr";
            break;
        case "EUR":
            currencyInput.value = "Euro";
            break;
        case "FKP":
            currencyInput.value = "Falkland Islands Pound";
            break;
        case "FJD":
            currencyInput.value = "Fijian Dollar";
            break;
        case "GMD":
            currencyInput.value = "Gambian Dalasi";
            break;
        case "GEL":
            currencyInput.value = "Georgian Lari";
            break;
        case "DEM":
            currencyInput.value = "German Mark";
            break;
        case "GHS":
            currencyInput.value = "Ghanaian Cedi";
            break;
        case "GIP":
            currencyInput.value = "Gibraltar Pound";
            break;
        case "GRD":
            currencyInput.value = "Greek Drachma";
            break;
        case "GTQ":
            currencyInput.value = "Guatemalan Quetzal";
            break;
        case "GNF":
            currencyInput.value = "Guinean Franc";
            break;

        case "GYD":
            currencyInput.value = "Guyanaese Dollar";
            break;

        case "HTG":
            currencyInput.value = "Haitian Gourde";
            break;

        case "HNL":
            currencyInput.value = "Honduran Lempira";
            break;

        case "HKD":
            currencyInput.value = "Hong Kong Dollar";
            break;

        case "HUF":
            currencyInput.value = "Hungarian Forint";
            break;

        case "ISK":
            currencyInput.value = "Icelandic KrÃ³na";
            break;

        case "INR":
            currencyInput.value = "Indian Rupee";
            break;

        case "IDR":
            currencyInput.value = "Indonesian Rupiah";
            break;

        case "IRR":
            currencyInput.value = "Iranian Rial";
            break;

        case "IQD":
            currencyInput.value = "Iraqi Dinar";
            break;

        case "ILS":
            currencyInput.value = "Israeli New Sheqel";
            break;

        case "ITL":
            currencyInput.value = "Italian Lira";
            break;
        case "JMD":
            currencyInput.value = "Jamaican Dollar";
            break;

        case "JPY":
            currencyInput.value = "Japanese Yen";
            break;

        case "JOD":
            currencyInput.value = "Jordanian Dina";
            break;

        case "KZT":
            currencyInput.value = "Kazakhstani Tenge";
            break;

        case "KES":
            currencyInput.value = "Kenyan Shilling";
            break;

        case "KWD":
            currencyInput.value = "Kuwaiti Dinar";
            break;

        case "KGS":
            currencyInput.value = "Kyrgystani Som";
            break;

        case "LAK":
            currencyInput.value = "Laotian Kip";
            break;

        case "LVL":
            currencyInput.value = "Latvian Lats";
            break;

        case "LBP":
            currencyInput.value = "Lebanese Pound";
            break;

        case "LSL":
            currencyInput.value = "Lesotho Loti";
            break;

        case "LRD":
            currencyInput.value = "Liberian Dollar";
            break;

        case "LYD":
            currencyInput.value = "Libyan Dinar";
            break;

        case "LTL":
            currencyInput.value = "Lithuanian Litas";
            break;

        case "MOP":
            currencyInput.value = "Macanese Pataca";
            break;

        case "MKD":
            currencyInput.value = "Macedonian Denar";
            break;

        case "MGA":
            currencyInput.value = "Malagasy Ariary";
            break;

        case "MWK":
            currencyInput.value = "Malawian Kwacha";
            break;

        case "MYR":
            currencyInput.value = "Malaysian Ringgit";
            break;

        case "MVR":
            currencyInput.value = "Maldivian Rufiyaa";
            break;

        case "MRO":
            currencyInput.value = "Mauritanian Ouguiya";
            break;

        case "MUR":
            currencyInput.value = "Mauritian Rupee";
            break;

        case "MXN":
            currencyInput.value = "Mexican Peso";
            break;

        case "MDL":
            currencyInput.value = "Moldovan Leu";
            break;

        case "MNT":
            currencyInput.value = "Mongolian Tugrik";
            break;

        case "MAD":
            currencyInput.value = "Moroccan Dirham";
            break;

        case "MZM":
            currencyInput.value = "Mozambican Metical";
            break;

        case "MMK":
            currencyInput.value = "Myanmar Kyat";
            break;

        case "NAD":
            currencyInput.value = "Namibian Dollar";
            break;

        case "NPR":
            currencyInput.value = "Nepalese Rupee";
            break;

        case "ANG":
            currencyInput.value = "Netherlands Antillean Guilder";
            break;

        case "TWD":
            currencyInput.value = "New Taiwan Dollar";
            break;

        case "NZD":
            currencyInput.value = "New Zealand Dollar";
            break;

        case "NIO":
            currencyInput.value = "Nicaraguan CÃ³rdoba";
            break;

        case "NGN":
            currencyInput.value = "Nigerian Naira";
            break;
            KPW
        case "":
            currencyInput.value = "North Korean Won";
            break;

        case "NOK":
            currencyInput.value = "Norwegian Krone";
            break;

        case "OMR":
            currencyInput.value = "Omani Rial";
            break;

        case "PKR":
            currencyInput.value = "Pakistani Rupee";
            break;

        case "PAB":
            currencyInput.value = "Panamanian Balboa";
            break;

        case "PGK":
            currencyInput.value = "Papua New Guinean Kina";
            break;

        case "PYG":
            currencyInput.value = "Paraguayan Guarani";
            break;

        case "PEN":
            currencyInput.value = "Peruvian Nuevo Sol";
            break;

        case "PHP":
            currencyInput.value = "Philippine Peso";
            break;

        case "PLN":
            currencyInput.value = "Polish Zloty";
            break;

        case "QAR":
            currencyInput.value = "Qatari Rial";
            break;

        case "RON":
            currencyInput.value = "Romanian Leu";
            break;

        case "RUB":
            currencyInput.value = "Russian Ruble";
            break;

        case "RWF":
            currencyInput.value = "Rwandan Franc";
            break;

        case "SVC":
            currencyInput.value = "Salvadoran ColÃ³n";
            break;

        case "WST":
            currencyInput.value = "Samoan Tala";
            break;

        case "SAR":
            currencyInput.value = "Saudi Riyal";
            break;

        case "RSD":
            currencyInput.value = "Serbian Dinar";
            break;

        case "SCR":
            currencyInput.value = "Seychellois Rupee";
            break;

        case "SLL":
            currencyInput.value = "Sierra Leonean Leone";
            break;

        case "SGD":
            currencyInput.value = "Singapore Dollar";
            break;

        case "SKK":
            currencyInput.value = "Slovak Euro";
            break;

        case "SBD":
            currencyInput.value = "Solomon Islands Dollar";
            break;

        case "SOS":
            currencyInput.value = "Somali Shilling";
            break;

        case "ZAR":
            currencyInput.value = "South African Rand";
            break;

        case "KRW":
            currencyInput.value = "South Korean Won";
            break;

        case "LKR":
            currencyInput.value = "Sri Lankan Rupee";
            break;

        case "SHP":
            currencyInput.value = "St. Helena Pound";
            break;

        case "SDG":
            currencyInput.value = "Sudanese Pound";
            break;

        case "SRD":
            currencyInput.value = "Surinamese Dollar";
            break;

        case "SZL":
            currencyInput.value = "Swazi Lilangeni";
            break;

        case "SEK":
            currencyInput.value = "Swedish Krona";
            break;

        case "CHF":
            currencyInput.value = "Swiss Franc";
            break;

        case "SYP":
            currencyInput.value = "Syrian Pound";
            break;

        case "STD":
            currencyInput.value = "São Tomé and Príncipe Dobra";
            break;

        case "TJS":
            currencyInput.value = "Tajikistani Somoni";
            break;

        case "TZS":
            currencyInput.value = "Tanzanian Shilling";
            break;

        case "THB":
            currencyInput.value = "Thai Baht";
            break;

        case "TOP":
            currencyInput.value = "Tongan pa'anga";
            break;

        case "TTD":
            currencyInput.value = "Trinidad & Tobago Dollar";
            break;

        case "TND":
            currencyInput.value = "Tunisian Dinar";
            break;

        case "TRY":
            currencyInput.value = "Turkish Lira";
            break;

        case "TMT":
            currencyInput.value = "Turkmenistani Manat";
            break;

        case "UGX":
            currencyInput.value = "Ugandan Shilling";
            break;

        case "UAH":
            currencyInput.value = "Ukrainian Hryvnia";
            break;

        case "AED":
            currencyInput.value = "United Arab Emirates Dirham";
            break;

        case "UYU":
            currencyInput.value = "Uruguayan Peso";
            break;

        case "USD":
            currencyInput.value = "US Dollar";
            break;

        case "UZS":
            currencyInput.value = "Uzbekistan Som";
            break;

        case "VUV":
            currencyInput.value = "Vanuatu Vatu";
            break;

        case "VEF":
            currencyInput.value = "Venezuelan BolÃ­var";
            break;

        case "VND":
            currencyInput.value = "Vietnamese Dong";
            break;

        case "YER":
            currencyInput.value = "Yemeni Ria";
            break;

        case "ZMK":
            currencyInput.value = "Zambian Kwacha";
            break;

        case "":
            currencyInput.value = "";
            break;

        case "":
            currencyInput.value = "";
            break;

        case "":
            currencyInput.value = "";
            break;

        case "":
            currencyInput.value = "";
            break;

        case "":
            currencyInput.value = "";
            break;

        case "":
            currencyInput.value = "";
            break;

        case "":
            currencyInput.value = "";
            break;

    }
});