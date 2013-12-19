/*global describe, expect, beforeEach, console*/
/*global it*/
/*global MathCalculator*/
'use strict';

describe('Calculator', function(){
	var calculator;

	beforeEach(function(){
		console.log('top level before each');
	});

	it('should exist', function(){
		expect(true).toBe(true);
	});


	describe('Add', function(){

		beforeEach(function(){
			calculator = new MathCalculator();
			console.log('add levle before each');
		});

		it('should return the sum of two positive integers', function(){
			var result = calculator.add(4,5);

			expect(result).toBe(9);
		});

		it('should should return the sum of two negative integers', function(){
			var result = calculator.add(-4,-5);

			expect(result).toBe(-9);
		});
	});
});