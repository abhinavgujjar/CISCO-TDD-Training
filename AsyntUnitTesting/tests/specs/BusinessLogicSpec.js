/*global describe, expect*/
/*global it*/
/*global spyOn*/
/*global TaxRateProvider*/
/*global TaxCalculator*/
'use strict';

describe('Tax Calculator', function(){
	
	it('should multiply the age by 10', function(){
		var resultData;
		var count = 0;
		var flag = false;
		spyOn(DataAccess, 'getData').andCallFake(function(callback){
			callback({ id : 99, name : 'dummy', age : '99'});
		})

		//RUN the async codee
		runs(function(){
			BusinessLogic.calculate(function(data){
				resultData = data;
				flag = true;
			});	
		});

		//wait for some indication that sync code has evaluated
		waitsFor(function() {
			count++
			console.log('checking...');
			return flag;
		}, 500);

		//check against expectations
		runs(function() {
			console.log('count : ' + count);

			expect(resultData).toBeDefined();
		});
		
	});


	it('should multiply the age by 10 using deferred', function(){
		var resultData;
		var count = 0;
		var flag = false;
		spyOn(NetworkAccess, 'getData').andCallFake(function(){
			var deferred = $.Deferred();
			deferred.resolve({ id : 99, name : 'dummy', age : '99'});
			return deferred;
		})

		//RUN the async codee
		runs(function(){
			BusinessLogic.decipher().then(function(data){
				resultData = data;
				flag = true;
			});	
		});

		//wait for some indication that sync code has evaluated
		waitsFor(function() {
			count++
			console.log('checking...');
			return flag;
		}, 500);

		//check against expectations
		runs(function() {
			console.log('count : ' + count);

			expect(resultData).toBeDefined();
		});
		
	});

});