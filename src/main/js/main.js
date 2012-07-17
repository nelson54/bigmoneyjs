require(['bigmoney', 'currencyunit'], function(BigMoney, CurrencyUnit) {
    var bigmoney = window.bigmoney = {};

    bigmoney.BigMoney = BigMoney;
    bigmoney.CurrencyUnit = CurrencyUnit;

    return bigmoney;
});