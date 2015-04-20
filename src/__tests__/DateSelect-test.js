'use strict';
/*global describe, it, jest, expect*/

jest.dontMock('../DateSelect');

var React = require('react/addons');
var DateSelect = require('../DateSelect');
var TestUtils = React.addons.TestUtils;

describe('DateSelect test', function() {

	// TODO: Add Tests

    // Render an instance of the component
    var instance = TestUtils.renderIntoDocument(
        <DateSelect />
    );

	it('should be rendered', function() {
		expect(true).toEqual(true);
	});

});
