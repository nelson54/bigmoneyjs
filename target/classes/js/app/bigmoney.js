define(['./currencyunit'], function(CurrencyUnit) {
    var BigMoney = function(currencyUnit, amount){
        //***currencyUnit*** - the currency type (USD, CAD, etc.).
        this.currencyUnit = currencyUnit;

        //***amount*** - the BigDecimal representation of the money value.
        this.amount = amount;

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
            if(bigmoney instanceof BigMoney){
                var amt = bigmoney.amount + this.amount;
                return new BigMoney(this.currencyUnit, bigmoney.amount + this.amount);
            } else if (bigmoney instanceof BigDecimal) {
                return new BigMoney(this.currencyUnit, bigmoney.plus(this.amount) );
            }
        };


        //### minus
        //This is used to add another BigMoney value of the same currency to this big money.
        this.minus = function(bigmoney){
            if(bigmoney instanceof BigMoney){
                return new BigMoney(this.currencyUnit, this.amount - bigmoney.amount);
            }
        };

        //### compareTo
        //Compares this monetary value to another. The compared values must be in the same currency.
        this.compareTo = function(bigmoney){
            if(bigmoney instanceof BigMoney){
                if(this.value === bigmoney.value){
                    return 0;
                }
                else if(this.value > bigMoney.value){
                    return 1;
                }
                else if(this.value < bigMoney.value){
                    return -1;
                }
            }
        };

        //### isEqual
        //Can check to see if a BigMoney value and unit of currency is equal to another BigMoney value and unit of currency.
        this.isEqual = function(bigmoney){
            if(bigmoney instanceof BigMoney){
                return bigmoney.amount === this.amount;
            }
        };

        //### isGreaterThan
        // Tells if a BigMoney is greater then the BigMoney passed as the parameter.
        this.isGreaterThan = function(bigmoney){
            if(bigmoney instanceof BigMoney){
                return bigmoney.amount < this.amount;
            }
        };

        //### isLessThan
        // Tells if a BigMoney is less then the BigMoney passed as the parameter.
        this.isLessThan = function(bigmoney){
            if(bigmoney instanceof BigMoney){
                return bigmoney.amount > this.amount;
            }
        };
    };

    //##Static Method Constructors

    //### of
    // Static constructer, creates a new BigMoney of a specific CurrencyUnit and amount.
    BigMoney.of = function(currencyUnit, amount){
        return new BigMoney(currencyUnit, amount);
    };

    //### zero
    // Static constructer, creates a new zero value BigMoney of a specific CurrencyUnit.
    BigMoney.zero = function(currencyUnit){
        return new BigMoney(currencyUnit, 0);
    };

    return BigMoney;
});