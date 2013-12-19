'use strict';
var DataAccess = function(){
	function getData(){
		return ' Data from DB';
	}

	return {
		getData: getData
	}

}();

var BusinessLogic = function(){

	function calculate(){
		var data = DataAccess.getData();
		vm.result(data);
	}

	var vm = {
		calculate: calculate,
		result: ko.observable('HOO HAA')
	};

	return vm

}();

ko.applyBindings(BusinessLogic);


