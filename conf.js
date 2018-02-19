// conf.js
exports.config = {
	directConnect: true,
	framework: 'jasmine',
	specs: ['specs.js'],
	multiCapabilities: [{
		browserName: 'firefox'
	}, {
		browserName: 'chrome'
	}, {
		browserName: 'chrome',
		chromeOptions: {
			args: ['--window-size=300,300']
		}
	}]
}
