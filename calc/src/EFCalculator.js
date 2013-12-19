var EFCalculator = function(){

	var that = this;

	function _calculate(employees){
		var totalIncome = 0.0;

		$.each(employees, function(index, item){
			totalIncome = totalIncome + item.income;
		});

		that.callback(totalIncome);

	}

	function CalculateEPF(callback){
		that.callback = callback;
		var employees = DataAccess.getEmployees(_calculate);

	}

	return {
		CalculateEPF: CalculateEPF
	}
	
}();