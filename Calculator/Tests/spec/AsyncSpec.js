/*global describe, expect, beforeEach, console*/
/*global it*/
/*global MathCalculator*/
'use strict';

describe("EF Calculator", function(){

	it('should be 10000 for 2 employees having 5000 income', function(){
		var result;
		var flag;

		spyOn(DataAccess, 'getEmployees').andCallFake(function(callback){
			callback([
				{age : 99, income : 5000, gender : 'M'},
				{age : 99, income : 3000, gender : 'M'}
				]);
		})

		runs( function(){
			EFCalculator.CalculateEPF(function(totalIncome){
				result = totalIncome;
				flag = true;
			});
		});

		waitsFor(function(){
			return flag;
		}, 300);

		runs(function(){
			expect(result).toBe(8000);
		});
		
	});
});