/*global describe, expect, beforeEach, console*/
/*global it*/
/*global MathCalculator*/
'use strict';

beforeEach(function() {
	this.addMatchers({
		toBeEven: function() {
			return (this.actual % 2) === 0;
		},
		toBeAFactorOf: function(expected) {
			return (expected % this.actual) === 0;
		}
	});
});

describe('Matcher', function(){


  afterEach(function() {
    console.log('after each function');
  });


	describe('toBeEven', function(){
		it('should match even numbers', function(){
			expect(6).toBeEven();
		});

		it('should not match odd numbers', function(){
			expect(7).not.toBeEven();
		});
	});

	describe('toBeAFactorOf', function(){
		it('should match the correct factorization', function(){
			expect(7).toBeAFactorOf(21);
		});

		it('should match the correct factorization', function(){
			expect(7).not.toBeAFactorOf(22);
		});
	});


	describe('toBe', function(){
		it('should match the same integers', function(){
			var a = 6;
			var b =6;
			expect(a).toBe(b);
		});

		it('should match the same strings', function(){
			var a = 'arthur dent';
			var b = 'arthur dent';
			expect(a).toBe(b);
		});

		it('should match the same booleans', function(){
			var a = true;
			var b = true;
			expect(a).toBe(b);
		});

		it('should not match different objects', function(){
			var a = { firstName : 'arthur', lastName: 'dent'};
			var b = { firstName : 'arthur', lastName: 'dent'};
			expect(a).not.toBe(b);
		});

	});

	describe('toEqual', function(){
		it('should match the same integers', function(){
			var a = 6;
			var b =6;
			expect(a).toEqual(b);
		});

		it('should match the same strings', function(){
			var a = 'arthur dent';
			var b = 'arthur dent';
			expect(a).toEqual(b);
		});

		it('should actually match different objects', function(){
			var a = { firstName : 'arthur', lastName: 'dent'};
			var b = { firstName : 'arthur', lastName: 'dent'};
			expect(a).toEqual(b);
		});

	});

	describe('toBeDefined', function(){
		it('should match objects that are not defined', function(){
			var foo = {};
			expect(foo.bar).not.toBeDefined();
		});

		it('should match objects that are  defined', function(){
			var foo = {};
			expect(foo).toBeDefined();
		});

	});

	describe('toBeNull', function(){
		it('should match objects that are null', function(){
			var foo = null;
			expect(foo).toBeNull();
		});

	});

	describe('toBeTruthy', function(){
		it('should match many values', function(){
			expect(true).toBeTruthy();
			expect(1).toBeTruthy();
			expect({}).toBeTruthy();
		});

	});

	describe('toBeFalsy', function(){
		it('should match many values', function(){
			expect(false).toBeFalsy();
			expect('').toBeFalsy();
			expect(0).toBeFalsy();
			expect(NaN).toBeFalsy();
			expect(undefined).toBeFalsy();
			expect(null).toBeFalsy();
		});

	});

	describe('toContain', function(){
		it('should match value in homogenous array', function(){
			var foo = [1,2,4,5,6];
			expect(foo).toContain(4);
			expect(foo).not.toContain(3);
		});

		it('should match value in homogenous string array', function(){
			var foo = ['alpha', 'beta', 'gamma'];
			expect(foo).toContain('beta');
			expect(foo).not.toContain('theta');
		});

		it('should match value in heterogenous array', function(){
			var foo = [1,2,4,5,6, 'seven'];
			expect(foo).toContain('seven');
		});

	});

	describe('toBeGreaterThan', function(){
		it('should evaluate cardinality of numbers', function(){
			expect(7).toBeGreaterThan(3);
			expect(8).not.toBeGreaterThan(13);
		});

		xit('should compare strings', function(){
			expect('All the kings men').toBeGreaterThan('All');
		});
	});

	describe('toBeCloseTo', function(){
		it('should evaluate closeness of numbers', function(){
			var pi = 3.141275;
			expect(pi).toBeCloseTo(3, 0);
			expect(pi).toBeCloseTo(3.14, 2);
		});
		
	});

	describe('toMatch', function(){
		it("The 'toMatch' matcher is for regular expressions", function() {
			var message = 'foo bar baz';

			expect(message).toMatch(/bar/);
			expect(message).toMatch('bar');
			expect(message).not.toMatch(/quux/);
		});

	});

	describe('toThrow', function(){
		it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
			var foo = function() {
				return 1 + 2;
			};


			var bar = function() {
				return a + 1;
			};

			expect(foo).not.toThrow();
			expect(bar).toThrow();
		});
	})

});