/* global describe, it */

var jsdom = require('mocha-jsdom');

var React = require('react/addons');
var DateSelect = require('../src/DateSelect');
var TestUtils = React.addons.TestUtils;

describe('DateSelect test', function() {
  jsdom();

	it('should be rendered', function() {
    TestUtils.renderIntoDocument(<DateSelect/>);
	});
});
