jest.dontMock('../app');

describe('App', function () {
	var App 			= require('../app'),
			React     = require('react/addons'),
			TestUtils = React.addons.TestUtils;

	beforeEach(function () {
		app = TestUtils.renderIntoDocument(<App/>);
	});

	it('mounts and displays success message', function () {
		var app = TestUtils.renderIntoDocument(<App />);
    expect(app.getDOMNode().textContent).toEqual('This is where React mounts. React Works');
	});
});

