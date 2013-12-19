describe('main', function(){

	beforeEach(function(){
		jasmine.getFixtures().set('<div id="target" ><div id="inner" ></div></div>');
	});

	it('should select the correct div', function(){
		$('#inner').html('abhinav');

		expect($('#inner').html()).toBe('abhinav')
	});

});