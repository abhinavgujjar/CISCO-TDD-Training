var DataAccess = function(){

	function getEmployees( callback){
		var count = 0;
		//this goes across the network
		//returns an array of employees
		setTimeout(function(){
			callback([{age : 99, income : 10000, gender : 'M'}]);
		}, 1000);

	}
	return {
		getEmployees : getEmployees
	}

}();