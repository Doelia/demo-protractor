describe('Protractor Demo App', () => {

	beforeEach(() => {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	it('should add one and two', () => {
		element(by.model('first')).sendKeys(1);
		element(by.model('second')).sendKeys(2);
		element(by.id('gobutton')).click();
		const result = element(by.binding('latest')).getText();
		expect(result).toEqual('3');
	});

});
