'use strict';
var TaxRateProvider = function(){

	function getTaxRate(gender){
		var rate = 0.3;
		if (gender === 'F'){
			rate = 0.35;
		}
		return rate;
	}

	function getRebate(age){
		var rebate = 0.0;
		if ( age > 60 ){
			rebate = 0.4;
		}
		return rebate;
	}

	return {
		getTaxRate: getTaxRate,
		getRebate : getRebate
	};
}();


var TaxCalculator = function(){

	function calculateTax(age, gender, income){
		var tax = 0.0;
		var rebate = 0.0;

		if ( gender === 'F'){
			tax = income * TaxRateProvider.getTaxRate(gender);
		}
		else
		{
			tax = income * TaxRateProvider.getTaxRate(gender);
		}

		if ( age  > 60 ){
			rebate = tax - (tax * TaxRateProvider.getRebate(age));
		}

		tax = tax - rebate;

		return tax;
	}

	return {
		calculate: calculateTax
	};

}();