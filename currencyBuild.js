var g_currency_data = {
  "USD": {"rate":"1", "last-updated": new Date("1/20/2019"), "description": "US Dollars"},
  "EU": {"rate":".8", "last-updated": new Date("1/08/2019"), "description": "EU Euros"},
  "YEN":{"rate":"5", "last-updated": new Date("1/20/2019"), "description": "Chinese Yen"},
  "PES":{"rate":"3", "last-updated": new Date("1/20/2019"), "description": "Mexican Pesos"},
  "RUB":{"rate":"2.4", "last-updated": new Date("1/05/2019"), "description": "Russian Rubles"},
  "DNR":{"rate":".62", "last-updated": new Date("1/20/2019"), "description": "Kuwait Dinar"},
  "EGP":{"rate":"3.46", "last-updated": new Date("1/20/2019"), "description": "Egypt Pound"},
  "SKL":{"rate":"1.2", "last-updated": new Date("1/20/2019"), "description": "Israeli"},
  "RPE":{"rate":".32", "last-updated": new Date("1/20/2019"), "description": "Rupee"},
  "BHT":{"rate":"2.76", "last-updated": new Date("1/20/2019"), "description": "Baht"}
};

var g_decimalsOfResult = 2;

function convert(){
	// find incoming amount
	var $inputField = $("#AmountToConvert");
	var amount = $inputField.val();

	// find incoming currency
	var $currencyIn = $("#CurrencyIn");
    var currencyIn = $currencyIn.val();

	// find outgoing currency
	var $currencyOut = $("#CurrencyOut");
	var currencyOut = $currencyOut.val();

	// do the conversion
	var result = calcConvertedAmount(currencyIn, amount, currencyOut);

	// put the answer in the outgoing amount box
	var $returnBox = $("#ReturnedAmount");
	$returnBox.val(result);
}




function calcConvertedAmount(currencyIn, amount, currencyOut) {
	//Get exg rate In
	var exgRateIn = getRate(currencyIn);
var exgRateOut = getRate(currencyOut);

if (exgRateIn == undefined){
  	alert("You have selected an incoming currency for which we cannot find an exchange rate.");
return " ";
  }
if (exgRateOut == undefined){
  	alert("You have selected a target currency for which we cannot find an exchange rate.");
return " ";
  }
	//Convert to USD
	var USDofIn = amount / exgRateIn;

	//Get exg rate Out
	var result = USDofIn * exgRateOut;

result = result.toFixed(g_decimalsOfResult);
return result;
}



function getRate(currency) {
if (g_currency_data[currency]  == undefined) {
return undefined;
}
if (g_currency_data[currency]["last-updated"].getTime()
!= new Date("1/20/2019").getTime()
) {
alert(g_currency_data[currency]["description"] + " is using an outdated currency exchange rate. Last updated: " + g_currency_data[currency]["last-updated"]);
}
return g_currency_data[currency]["rate"];
}