/*global describe, expect*/
/*global it*/
/*global spyOn*/
/*global TaxRateProvider*/
/*global TaxCalculator*/
'use strict';

describe('Display', function(){

	it('should update the result', function(){
		spyOn(DataAccess, 'getData').andReturn('FAKER');

		BusinessLogic.calculate();

		expect(BusinessLogic.result()).toBe('FAKER');
	});

});