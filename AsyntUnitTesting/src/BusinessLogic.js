'use strict';

var NetworkAccess = function(){

	function getData(){
		var deferred = $.Deferred();

		setTimeout(function(){

			var data = { id : 1, name : 'Arthur', age : '42'}

			deferred.resolve(data);

		}, 2000);

		return deferred;
	}

	return {
		getData: getData
	};
}()

var DataAccess = function(){

	function getData(callback1){

		setTimeout(function(){

			var data = { id : 1, name : 'Arthur', age : '42'}

			callback1(data);

		}, 2000)
	}

	return {
		getData: getData
	};

}();

var BusinessLogic = function(){

	function calculate(callback){

		var data = DataAccess.getData(function(data){

			data.age = data.age * 10;

			callback(data);
		});
	}

	function decipher(){
		return NetworkAccess.getData();
	}

	return {
		calculate: calculate,
		decipher: decipher
	};

}();