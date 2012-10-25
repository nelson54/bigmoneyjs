var CurrencyUnit = require('./currencyunit'),
	bigdecimal = require('./lib/bigdecimal'),
	_ = require('./lib/underscore');

var BigDecimal = bigdecimal.BigDecimal,
    parseMoneyDecimal = /(.+)\ ([0-9]*)[.]([0-9]*)/,
    parseMoneyNoDecimal = /(.+)\ ([0-9]*)/;

var BigMoney = function(currencyUnit, amount){
    //## Methods

    //### toString
    //Returns object represented as a string in the format of ***[CURRENCYUNIT] [Value]***.
    this.toString = function(){
        var code = this.currencyUnit.getCode(),
            amount = this.amount.toString();

        return code + " " + amount;
    };

    //### plus
    //This is used to add another BigMoney value of the same currency to this big money.
    this.plus = function(bigmoney){
        if(this._hasSameCurrencyUnit(bigmoney)){
            var amount = this.amount, amount2 = bigmoney.amount;
            return new BigMoney(this.currencyUnit, amount.add(amount2).toString() );
        } else
            throw new Error("This method only accepts a BigMoney value.");
    };

    //###dividedBy
    //Returns a copy of this monetary value divided by the specified value using the specified rounding mode to adjust the scale.
    this.dividedBy = function(value, roundingmode){
        if (this._isBigMoney(value) && this._hasSameCurrencyUnit(bigmoney)){
            return new BigMoney(this.currencyUnit, this.amount.divide(value.amount, roundingmode).setScale(this.currencyUnit.getDecimalPlaces(), roundingMode));
        } else if (this._isBigMoney(value) && !this._hasSameCurrencyUnit(bigmoney)){
            throw new Error("This method only accepts a BigMoney value.");
        } else if (this._isBigDecimal(value)){
            return new BigMoney(this.currencyUnit, this.amount.divide(value, roundingmode).setScale(this.currencyUnit.getDecimalPlaces(), roundingMode));
        }
    };

    //### multipliedBy
    //Returns a copy of this monetary value multiplied by the specified value.
    this.dividedBy = function(value){
        if (this._isBigMoney(value) && this._hasSameCurrencyUnit(bigmoney)){
            return new BigMoney(this.currencyUnit, this.amount.multiply(value.amount));
        } else if (this._isBigMoney(value) && !this._hasSameCurrencyUnit(bigmoney)){
            throw new Error("This method only accepts a BigMoney value.");
        } else if (this._isBigDecimal(value)){
            return new BigMoney(this.currencyUnit, this.amount.multiply(value));
        }
    };

    //### minus
    //This is used to add another BigMoney value of the same currency to this big money.
    this.minus = function(bigmoney){
        if(this._hasSameCurrencyUnit(bigmoney)){
            var amount = this.amount, amount2 = bigmoney.amount;
            return new BigMoney(this.currencyUnit, amount.subtract(amount2).toString());
        } else
            throw new Error("This method only accepts a BigMoney value.");
    };

    //### negated
    //Returns a BigDecimal whose value is (-this), and whose scale is this.scale().
    this.negated = function(){
        return new BigMoney(this.currencyUnit, amount.negate());
    };

    //### compareTo
    //Compares this monetary value to another. The compared values must be in the same currency.
    this.compareTo = function(bigmoney){
        if(this._hasSameCurrencyUnit(bigmoney)){
            var amount = this.amount, amount2 = bigmoney.amount;
            return amount.compareTo(amount2);
        } else {
            throw new Error("This method expects a BigMoney of the same CurrencyUnit type.");
        }
    };

    //### isEqual
    //Can check to see if a BigMoney value and unit of currency is equal to another BigMoney value and unit of currency.
    this.isEqual = function(bigmoney){
        return this.compareTo( bigmoney.amount ) === 0;
    };

    //### isGreaterThan
    // Tells if a BigMoney is greater then the BigMoney passed as the parameter.
    this.isGreaterThan = function(bigmoney){
        return this.compareTo( bigmoney.amount ) === 1;
    };

    //### isLessThan
    // Tells if a BigMoney is less then the BigMoney passed as the parameter.
    this.isLessThan = function(bigmoney){
        return this.compareTo( bigmoney.amount ) === -1;
    };

    //### withCurrencyScale
    // Returns a new BigMoney value of the correct Scale depending on CurrencyUnit
    this.withCurrencyScale = function(roundingMode){
        return new BigMoney(this.currencyUnit, new BigDecimal(this.amount).setScale(this.currencyUnit.getDecimalPlaces(), roundingMode));
    };

    //### getCurrencyUnit
    //Gets the currency.
    this.getCurrencyUnit = function(){
        return this.currencyUnit;
    };

    //### isCurrencyScale
    //Checks if this money has the scale of the currency.
    this.isCurrencyScale = function(){
        return this.currencyUnit.getDecimalPlaces() === this.amount.scale();
    };

    //### isNegative
    // Checks if the amount is less than zero.
    this.isNegative = function(){
        return !this.amount.abs().equals(this.amount) && !this.amount.equals(BigDecimal.ZERO);
    };

    //### isNegativeOrZero
    // Checks if the amount is zero or less than zero.
    this.isNegativeOrZero = function(){
        return !this.amount.abs().equals(this.amount);
    };

    //### isPositive
    // Checks if the amount is greater than zero.
    this.isPositive = function(){
        return this.amount.abs().equals(this.amount) && !this.amount.equals(BigDecimal.ZERO);
    };

    //### isPositiveOrZero
    // Checks if the amount is zero or greater than zero.
    this.isPositiveOrZero = function(){
        return this.amount.abs().equals(this.amount);
    };

    //## isZero
    // Checks if the amount is zero.
    this.isZero = function(){
        return this.amount.equals(BigDecimal.ZERO);
    };

    //## Private methods

    this._isBigMoney = function(value){
        return value instanceof BigMoney;
    };

        this._isBigDecimal = function(value){
            return value instanceof BigDecimal;
        };

    this._hasSameCurrencyUnit = function(bigmoney){
        return this._isBigMoney(bigmoney) && this.currencyUnit.equals(bigmoney.currencyUnit);
    };

    //## Initialize Object
    //***currencyUnit*** - the currency type (USD, CAD, etc.).
    this.currencyUnit = currencyUnit;

    //***amount*** - the BigDecimal representation of the money value.
    this.amount = new BigDecimal(amount);
};

//##Static Method Constructors

//### parse
// Static constructer, creates a enw BigMoney from a string (example "USD 1.40" or "USD 1")
BigMoney.parse = function(string){
    var arr, code, amount;
    if (parseMoneyDecimal.test(string)){
        arr = parseMoneyDecimal.exec(string).slice(1);
        code = arr[0];
        amount = arr[1] + "." + arr[2];
    } else if (parseMoneyNoDecimal.test(string)){
        arr = parseMoneyNoDecimal.exec(string).slice(1);
        code = arr[0];
        amount = arr[1];
    }
    return new BigMoney(CurrencyUnit.of(code), amount);
};

//### of
// Static constructer, creates a new BigMoney of a specific CurrencyUnit and amount.
BigMoney.of = function(currencyUnit, amount){
    return new BigMoney(currencyUnit, amount);
};

//### zero
// Static constructer, creates a new zero value BigMoney of a specific CurrencyUnit.
BigMoney.zero = function(currencyUnit){
    return new BigMoney(currencyUnit, "0");
};

//##Static Properties
BigMoney.RoundingMode = {};

BigMoney.RoundingMode.UP = BigDecimal.ROUND_UP;
BigMoney.RoundingMode.DOWN = BigDecimal.ROUND_DOWN;
BigMoney.RoundingMode.CEILING = BigDecimal.ROUND_CEILING;
BigMoney.RoundingMode.FLOOR = BigDecimal.ROUND_FLOOR;
BigMoney.RoundingMode.HALF_UP = BigDecimal.ROUND_HALF_UP;
BigMoney.RoundingMode.HALF_DOWN = BigDecimal.ROUND_HALF_DOWN;
BigMoney.RoundingMode.HALF_EVEN = BigDecimal.ROUND_HALF_EVEN;
BigMoney.RoundingMode.UNNECESSARY = BigDecimal.ROUND_UNNECESSARY;

module.exports = BigMoney;