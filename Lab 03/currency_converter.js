
//conversion rates

var currencyRates = {
    "EUR": 1,
    "USD": 1.13,
    "UAH": 50.94,
    "JPY": 178.44
};


function convertCurrency() {
    let amountInput = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    let result = amountInput * currencyRates[toCurrency] / currencyRates[fromCurrency];

    document.getElementById("result").innerHTML = "Converted amount: " + result.toFixed(2);
}
