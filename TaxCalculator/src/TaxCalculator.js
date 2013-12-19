'use strict';

var TaxRateProvider = function(){

	function getTaxSlabs(){
		return [{ rate : 1000, startRange: 555, endRange: 8888},
		{ rate : 1000, startRange: 555, endRange: 8888}];
	}

	return {
		getTaxSlabs: getTaxSlabs
	};

}();

var TaxCalculator = function(){

	function calculateTax(age, gender, income){
		var tax = 0.0;

		if ( income === 0){
			return 0;
		}

		var slabs = TaxRateProvider.getTaxSlabs(age);

		$.each(slabs, function(index, item){
			var slab = item;

			if ( income > slab.startRange && income <= slab.endRange){
				tax = tax + ((income - slab.startRange) * slab.rate / 100);
			}
			else if (income > slab.endRange){
				tax = tax + (slab.endRange - slab.startRange) * slab.rate / 100;
			}
		});

		return tax;
	}

	return {
		calculate: calculateTax
	};

}();