'use strict';



var TaxRateProvider = function(){
	function getTaxRate(){
		return {
			Female : 0.67,
			Male: 0.88,
			SeniorAge: 30,
			Rebate: 0.03
		};
	}

	function getSlabRates(age){
		var slabs = [
		{rate: 0, startRange: 0, endRange: 200000},
		{rate: 10, startRange: 200001, endRange: 500000},
		{rate: 20, startRange: 500001, endRange: 1000000},
		{rate: 30, startRange: 1000001},
		];

		return slabs;

	}

	return {
		getTaxRate : getTaxRate,
		getSlabRates: getSlabRates
	};

}();

var TaxCalculator = function(){

	function calculateTax(age, gender, income){
		var tax = 0.0;
		if ( income === 0){
			return 0;
		}

		var slabRates = TaxRateProvider.getSlabRates();

		var slabRate = slabRates[0];

		if ( income > slabRate.startRange && income <= slabRate.endRange ){
			tax = income * slabRate.rate / 100;
		}
		else if (income > slabRate.endRange){
			tax = ( (slabRate.endRange - slabRate.startRange) * slabRate.rate / 100);	
		}

		if ( slabRates.length > 1 ){

			var nextSlabRate = slabRates[1];
			if ( income > nextSlabRate.startRange && income <= nextSlabRate.endRange ){
				tax = tax + ( (income - nextSlabRate.startRange) * nextSlabRate.rate / 100);
			}
		}


		return tax;

	}

	return {
		calculate: calculateTax
	};

}();