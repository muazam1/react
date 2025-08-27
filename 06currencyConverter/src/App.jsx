import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(1); // start with 1 for better UX
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);
  const options = Object.keys(currencyInfo);

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


  // swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0); // reset after swap (cleaner UX)
  };

  // convert
  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Section */}
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5 mb-3">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 transition"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* To Section */}
            <div className="w-full mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {currencyNames[from] || from.toUpperCase()} to {currencyNames[to] || to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
