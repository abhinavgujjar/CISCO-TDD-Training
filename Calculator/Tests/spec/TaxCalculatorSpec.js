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

		spyOn(TaxRateProvider, 'getSlabRates').andReturn(taxRate);
	})


	it('tax should be 0 for the first slab rate', function(){
		spyOn(TaxRateProvider, 'getSlabRates').andReturn(taxRate);
		//spyOn(TaxRateProvider, 'getTaxRate').andReturn()

		var tax = TaxCalculator.calculate(35, 'M', 500001);

		expect(AuditLogger.doAudit).toHaveBeenCalled();
		expect(tax).toBe(3500);
	});

	it("tax should be 3000 for a woman aged 35 and having income of 10000", function(){
		var tax = TaxCalculator.calculate(35, 'F', 10000);
		expect(tax).toBe(3000);
	});

	it("tax should be close to 2880 for a man aged 65 and having income of 10000", function(){
		var tax = TaxCalculator.calculate(65, 'F', 10000);
		expect(tax).toBe(2880);
	});

	it("tax should be 0 for anyone with a negative income", function(){
		expect(TaxCalculator.calculate(65, 'F', -10000)).toBe(0);
		expect(TaxCalculator.calculate(65, 'M', -10000)).toBe(0);
	});

	it("it should invoke TaxRateProvider only once", function(){
		TaxCalculator.calculate(65, 'F', 10000);
		expect(TaxRateProvider.getTaxRate.calls.length).toEqual(1);
	});

	it("it should audit for large income", function(){
		spyOn(AuditLogger, 'doAudit').andCallThrough();

		// andCallFake(function(income){
		// 	console.log('I am a fake logger with income : ' + income);
		// });

		TaxCalculator.calculate(65, 'F', 1000000);
		expect(AuditLogger.doAudit).toHaveBeenCalled();
		
	});

});