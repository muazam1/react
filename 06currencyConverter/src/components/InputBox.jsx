import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId()
    const currencyNames = {
        "aed": "United Arab Emirates Dirham",
        "afn": "Afghan Afghani",
        "all": "Albanian Lek",
        "amd": "Armenian Dram",
        "ang": "Netherlands Antillean Guilder",
        "aoa": "Angolan Kwanza",
        "ars": "Argentine Peso",
        "aud": "Australian Dollar",
        "awg": "Aruban Florin",
        "azn": "Azerbaijani Manat",
        "bam": "Bosnia-Herzegovina Convertible Mark",
        "bbd": "Barbadian Dollar",
        "bdt": "Bangladeshi Taka",
        "bgn": "Bulgarian Lev",
        "bhd": "Bahraini Dinar",
        "bif": "Burundian Franc",
        "bmd": "Bermudian Dollar",
        "bnd": "Brunei Dollar",
        "bob": "Bolivian Boliviano",
        "brl": "Brazilian Real",
        "bsd": "Bahamian Dollar",
        "btn": "Bhutanese Ngultrum",
        "bwp": "Botswanan Pula",
        "byn": "Belarusian Ruble",
        "bzd": "Belize Dollar",
        "cad": "Canadian Dollar",
        "cdf": "Congolese Franc",
        "chf": "Swiss Franc",
        "clp": "Chilean Peso",
        "cny": "Chinese Yuan",
        "cop": "Colombian Peso",
        "crc": "Costa Rican Colón",
        "cup": "Cuban Peso",
        "cve": "Cape Verdean Escudo",
        "czk": "Czech Koruna",
        "djf": "Djiboutian Franc",
        "dkk": "Danish Krone",
        "dop": "Dominican Peso",
        "dzd": "Algerian Dinar",
        "egp": "Egyptian Pound",
        "ern": "Eritrean Nakfa",
        "etb": "Ethiopian Birr",
        "eur": "Euro",
        "fjd": "Fijian Dollar",
        "fkp": "Falkland Islands Pound",
        "gbp": "British Pound Sterling",
        "gel": "Georgian Lari",
        "ghs": "Ghanaian Cedi",
        "gip": "Gibraltar Pound",
        "gmd": "Gambian Dalasi",
        "gnf": "Guinean Franc",
        "gtq": "Guatemalan Quetzal",
        "gyd": "Guyanaese Dollar",
        "hkd": "Hong Kong Dollar",
        "hnl": "Honduran Lempira",
        "hrk": "Croatian Kuna",
        "htg": "Haitian Gourde",
        "huf": "Hungarian Forint",
        "idr": "Indonesian Rupiah",
        "ils": "Israeli New Shekel",
        "inr": "Indian Rupee",
        "iqd": "Iraqi Dinar",
        "irr": "Iranian Rial",
        "isk": "Icelandic Króna",
        "jmd": "Jamaican Dollar",
        "jod": "Jordanian Dinar",
        "jpy": "Japanese Yen",
        "kes": "Kenyan Shilling",
        "kgs": "Kyrgystani Som",
        "khr": "Cambodian Riel",
        "kmf": "Comorian Franc",
        "kpw": "North Korean Won",
        "krw": "South Korean Won",
        "kwd": "Kuwaiti Dinar",
        "kyd": "Cayman Islands Dollar",
        "kzt": "Kazakhstani Tenge",
        "lak": "Laotian Kip",
        "lbp": "Lebanese Pound",
        "lkr": "Sri Lankan Rupee",
        "lrd": "Liberian Dollar",
        "lsl": "Lesotho Loti",
        "lyd": "Libyan Dinar",
        "mad": "Moroccan Dirham",
        "mdl": "Moldovan Leu",
        "mga": "Malagasy Ariary",
        "mkd": "Macedonian Denar",
        "mmk": "Myanmar Kyat",
        "mnt": "Mongolian Tugrik",
        "mop": "Macanese Pataca",
        "mru": "Mauritanian Ouguiya",
        "mur": "Mauritian Rupee",
        "mvr": "Maldivian Rufiyaa",
        "mwk": "Malawian Kwacha",
        "mxn": "Mexican Peso",
        "myr": "Malaysian Ringgit",
        "mzn": "Mozambican Metical",
        "nad": "Namibian Dollar",
        "ngn": "Nigerian Naira",
        "nio": "Nicaraguan Córdoba",
        "nok": "Norwegian Krone",
        "npr": "Nepalese Rupee",
        "nzd": "New Zealand Dollar",
        "omr": "Omani Rial",
        "pab": "Panamanian Balboa",
        "pen": "Peruvian Sol",
        "pgk": "Papua New Guinean Kina",
        "php": "Philippine Peso",
        "pkr": "Pakistani Rupee",
        "pln": "Polish Zloty",
        "pyg": "Paraguayan Guarani",
        "qar": "Qatari Rial",
        "ron": "Romanian Leu",
        "rsd": "Serbian Dinar",
        "rub": "Russian Ruble",
        "rwf": "Rwandan Franc",
        "sar": "Saudi Riyal",
        "sbd": "Solomon Islands Dollar",
        "scr": "Seychellois Rupee",
        "sdg": "Sudanese Pound",
        "sek": "Swedish Krona",
        "sgd": "Singapore Dollar",
        "shp": "Saint Helena Pound",
        "sll": "Sierra Leonean Leone",
        "sos": "Somali Shilling",
        "srd": "Surinamese Dollar",
        "stn": "São Tomé and Príncipe Dobra",
        "syp": "Syrian Pound",
        "szl": "Swazi Lilangeni",
        "thb": "Thai Baht",
        "tjs": "Tajikistani Somoni",
        "tmt": "Turkmenistani Manat",
        "tnd": "Tunisian Dinar",
        "top": "Tongan Paʻanga",
        "try": "Turkish Lira",
        "ttd": "Trinidad & Tobago Dollar",
        "twd": "New Taiwan Dollar",
        "tzs": "Tanzanian Shilling",
        "uah": "Ukrainian Hryvnia",
        "ugx": "Ugandan Shilling",
        "usd": "United States Dollar",
        "uyu": "Uruguayan Peso",
        "uzs": "Uzbekistani Som",
        "ves": "Venezuelan Bolívar",
        "vnd": "Vietnamese Dong",
        "vuv": "Vanuatu Vatu",
        "wst": "Samoan Tala",
        "xaf": "Central African CFA Franc",
        "xcd": "East Caribbean Dollar",
        "xof": "West African CFA Franc",
        "xpf": "CFP Franc",
        "yer": "Yemeni Rial",
        "zar": "South African Rand",
        "zmw": "Zambian Kwacha",
        "zwl": "Zimbabwean Dollar"
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()} - {currencyNames[currency] || currency}
                        </option>

                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;