describe('Protractor Demo App', () => {

	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	it('should add one and two', () => {
		add(1, 2);
		const result = element(by.binding('latest')).getText();
		expect(result).toEqual('3');
	});

	it('should have a history', () => {
		add(1, 2);
		add(2, 6);
		add(3, 3);
		add(-1, 1);
		add(2, 0);

		const history = element.all(by.repeater('result in memory'));
		expect(history.count()).toEqual(5);
	});

	const add = (a, b) => {
		element(by.model('first')).sendKeys(a);
		element(by.model('second')).sendKeys(b);
		element(by.id('gobutton')).click();
	};
});

