define(['./underscore'], function(_) {

    var CurrencyUnit = function(code){
        this.code = code;

        this.getCode = function(){
            return this.code;
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

    CurrencyUnit.of = function(code){return new CurrencyUnit(code)};

    //Add Static Constructors
    _.each(["AUD", "CAD", "CHF", "EUR", "GBP", "JPY", "USD"], function(code){
        CurrencyUnit[code] = function(){
            return new CurrencyUnit.of(code)
        }
    });

    return CurrencyUnit;
});

