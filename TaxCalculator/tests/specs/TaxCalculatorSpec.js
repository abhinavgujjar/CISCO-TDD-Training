/*global describe, expect*/
/*global it*/
/*global spyOn*/
/*global TaxRateProvider*/
/*global TaxCalculator*/
'use strict';

describe('Tax Calculator', function(){
	
	it('tax should be 0 for a 0 income', function(){
		var tax = TaxCalculator.calculate(20, 'F', 0);

		expect(tax).toBe(0);
	});

	it('tax should be 1000 for a single tax slab of 10% and income of 10000', function(){
		spyOn(TaxRateProvider, 'getTaxSlabs').andReturn(
			[{ rate : 10, startRange: 0, endRange: 50000}]
			);

		var tax = TaxCalculator.calculate(20, 'F', 10000);

		expect(tax).toBe(1000);
	});
	
	it('tax should be 7000 for a 2 tax slabs of 10%, 20% for 0-10000, 10,000- 50,000 and  income of 40,000', function(){
		spyOn(TaxRateProvider, 'getTaxSlabs').andReturn(
			[{ rate : 10, startRange: 0, endRange: 10000},
			{ rate : 20, startRange: 10000, endRange: 50000}]
			);

		var tax = TaxCalculator.calculate(20, 'F', 40000);

		expect(tax).toBe(7000);
	});

	it('should invoke rate provider ', function(){
		spyOn(TaxRateProvider, 'getTaxSlabs').andReturn([{ rate : 20, startRange: 10000, endRange: 50000}]);

		TaxCalculator.calculate(20, 'F', 60000);

		expect(TaxRateProvider.getTaxSlabs).toHaveBeenCalled();
	});

	it('should invoke rate provider with the correct value', function(){
		spyOn(TaxRateProvider, 'getTaxSlabs').andReturn([{ rate : 20, startRange: 10000, endRange: 50000}]);

		TaxCalculator.calculate(20, 'F', 60000);

		expect(TaxRateProvider.getTaxSlabs).toHaveBeenCalledWith(20);
	});

	xit('ALTERNATE: should invoke rate provider with the correct value', function(){
		spyOn(TaxRateProvider, 'getTaxSlabs').andCallFake(function(age){
			if ( age < 50){
				return [{ rate : 0, startRange: 0, endRange: 500000}];
			}
			else{
				return [{ rate : 10, startRange: 0, endRange: 500000}];
			}
		});

		var tax = TaxCalculator.calculate(20, 'F', 60000);
		expect(tax).toBe(0);

		tax = TaxCalculator.calculate(70, 'F', 60000);
		expect(tax).toBe(6000);
	});
});