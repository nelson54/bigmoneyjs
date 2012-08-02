var _ = require('./lib/underscore'), 
	currencyData = require('./currency-data'), 
	currency = require('./lib/currency'),
	CurrencyUnit;

CurrencyUnit = function(code, numericCode, country, decimalPlaces){
    this.code = code;
    this.numericCode = numericCode;
    this.country = country;
    this.decimalPlaces = decimalPlaces;

    this.getCode = function(){
        return this.code;
    };

    this.getNumericCode = function(){
        return this.numericCode;
    };

    this.getCountry = function(){
        return this.country;
    };

    this.getSymbol = function(){
        return currency.getLocalCurrencySign(this.code);
    };

    this.getDecimalPlaces = function(){
        return this.decimalPlaces;
    };

    this.equals = function(currencyUnit){
        if (typeof currencyUnit === "string"){
            return this.code === currencyUnit;
        }
        else if (typeof currencyUnit === "object" && currencyUnit.code){
            return this.code === currencyUnit.code;
        }
    };
};

CurrencyUnit.currenciesByCode = {};
CurrencyUnit.currenciesByNumericCode = {};
CurrencyUnit.currenciesByCountry = {};

CurrencyUnit._create = function(code, numericCode, decimalPlaces, country){
    return CurrencyUnit._register(
        new CurrencyUnit(code, numericCode, country, decimalPlaces)
    );
};

CurrencyUnit._register = function(currencyUnit){
    var code = currencyUnit.getCode(),
        numeric = currencyUnit.getNumericCode(),
        country = currencyUnit.getCountry();

    if(CurrencyUnit.currenciesByCode[code] === undefined)
        CurrencyUnit.currenciesByCode[code] = currencyUnit;

    if(CurrencyUnit.currenciesByNumericCode[numeric] === undefined)
        CurrencyUnit.currenciesByNumericCode[numeric] = currencyUnit;

    if(CurrencyUnit.currenciesByCountry[country] === undefined)
        CurrencyUnit.currenciesByCountry[country] = currencyUnit;

    return currencyUnit;
};

CurrencyUnit.of = function(code){
    if (CurrencyUnit.currenciesByCode[code]){
        return CurrencyUnit.currenciesByCode[code];
    } else {
        throw new Error("Could not find CurrencyCode '" + code + "' in 'CurrencyUnit.currenciesByCode'");
    }
};

_.each(currencyData, function(cd){
    CurrencyUnit._create(cd[0], cd[1], cd[2], cd[3]);
});

//Add Common Static Lookups
_.each(["AUD", "CAD", "CHF", "EUR", "GBP", "JPY", "USD"], function(code){
    CurrencyUnit[code] = function(){
        return CurrencyUnit.of(code)
    }
});

module.exports = CurrencyUnit;
