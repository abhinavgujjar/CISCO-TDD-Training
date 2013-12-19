'use strict';

var TaxCalculator = function(){

	function calculateTax(age, gender, income){
		var tax = 0.0;
		var rebate = 0.0;

		if ( gender === 'F'){
			tax = income * 0.3;
		}
		else
		{
			tax = income * 0.35;
		}

		if ( age  > 60 ){
			rebate = tax - (tax * 0.4);
		}

		tax = tax - rebate;

		return tax;
	}

	return {
		calculate: calculateTax
	};

}();