require(['./app/bigmoney', './app/currencyunit'], function(BigMoney, CurrencyUnit) {
    document.write( BigMoney.zero(CurrencyUnit.USD()).toString() );
});