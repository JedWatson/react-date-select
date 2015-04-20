'use strict';

var _ = require('lodash'),
    React = require('react'),
    classNames = require('classnames');

var DateSelect = React.createClass({

	displayName: 'DateSelect',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'(select a date)'
		);
	}

});

module.exports = DateSelect;