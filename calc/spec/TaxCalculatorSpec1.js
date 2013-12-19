/*global describe, expect, beforeEach, console*/
/*global it*/
/*global MathCalculator*/
'use strict';

describe("Tax Calculator", function(){

	
	
	beforeEach(function(){
		var taxRate = {
			Female : 0.3,
			Male: 0.35,
			SeniorAge: 60,
			Rebate: 0.04
		};

		//spyOn(TaxRateProvider, 'getSlabRates').andReturn(taxRate);
	})


	it('tax should be 0 for 0 income', function(){
		var tax = TaxCalculator.calculate(40, 'F', 0);
		expect(tax).toBe(0);
	});

	it('tax should be 1000 for a single rate slab of 10% and income of 10000', function(){
		spyOn(TaxRateProvider, 'getSlabRates').andReturn(
			[{rate: 10, startRange: 0, endRange: 50000}]
			);

		var tax = TaxCalculator.calculate(40, 'F', 10000);
		expect(tax).toBe(1000);
	});

	it('tax should be 7000 for 2 slab rates of 10% and 20% and ranges of 0-10000 and 10,000-50,000', function(){
		spyOn(TaxRateProvider, 'getSlabRates').andReturn(
			[
			{rate: 10, startRange: 0, endRange: 10000},
			{rate: 20, startRange: 10000, endRange: 50000}
			]
			);

		var tax = TaxCalculator.calculate(40, 'F', 40000);
		expect(tax).toBe(7000);
	});
});