describe ("A library that", function() {
    var CurrencyUnit = require('../currencyunit.js'),
        BigMoney = require('../bigmoney.js'),

        unit, money1, money2, money3;

    beforeEach(function(){
        unit = CurrencyUnit.USD();
        money1 = BigMoney.of(unit, 10);
        money2 = BigMoney.of(unit, 12);
        money3 = BigMoney.of(unit, 22)
    });

    it("can add two moneys of the same currency", function(){
        expect(money1.plus(money2).toString()).toEqual(money3.toString());
    });

    it("can also subtract two moneys of the same currency", function(){
        expect(money3.minus(money2).toString()).toEqual(money1.toString());
    });

    it("determines if a BigMoney is greater than another", function(){
        expect(money3.minus(money2).toString()).toEqual(money1.toString());
    });
});