define(['currencyunit', 'lib/bigdecimal-require', 'lib/underscore'], function(CurrencyUnit, bigdecimal, _) {

    var BigDecimal = bigdecimal.BigDecimal,
        parseMoneyDecimal = "(.+)\ ([0-9]*)[.]([0-9]*)",
        parseMoneyNoDecimal = "(.+)\ ([0-9]*)";

    var BigMoney = window.BigMoney = function(currencyUnit, amount){
        //## Methods

        //### toString
        //Returns object represented as a string in the format of ***[CURRENCYUNIT] [Value]***.
        this.toString = function(){

            var amt = this.amount,
                code = this.currencyUnit.getCode(),
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


        //### minus
        //This is used to add another BigMoney value of the same currency to this big money.
        this.minus = function(bigmoney){
            if(this._hasSameCurrencyUnit(bigmoney)){
                var amount = this.amount, amount2 = bigmoney.amount;
                return new BigMoney(this.currencyUnit, amount.subtract(amount2).toString());
            } else
                throw new Error("This method only accepts a BigMoney value.");
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

        //## Private methods

        this._isBigMoney = function(bigMoney){
            return bigMoney instanceof BigMoney;
        };

        this._hasSameCurrencyUnit = function(bigmoney){
            return this._isBigMoney(bigmoney) && this.currencyUnit.equals(bigmoney.currencyUnit);
        };

        this._getBigDecimalWithScale = function(amount){
            return new BigDecimal(amount).setScale(this.currencyUnit.getDecimalPlaces(), BigDecimal.ROUND_DOWN);
        };


        //## Initialize Object
        //***currencyUnit*** - the currency type (USD, CAD, etc.).
        this.currencyUnit = currencyUnit;

        //***amount*** - the BigDecimal representation of the money value.
        this.amount = this._getBigDecimalWithScale(amount);
    };

    //##Static Method Constructors

    //### parse
    // Static constructer, creates a enw BigMoney from a string (example "USD 1.40" or "USD 1")
    BigMoney.parse = function(string){
        var decRegExp = new RegExp(parseMoneyDecimal),
            noDecRegExp = new RegExp(parseMoneyNoDecimal),
            arr, code, amount;
        if (decRegExp.test(string)){
            arr = decRegExp.exec(string).slice(1);
            code = arr[0];
            amount = arr[1] + "." + arr[2];
        } else if (noDecRegExp.test(string)){
            arr = noDecRegExp.exec(string).slice(1);
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

    return BigMoney;
});