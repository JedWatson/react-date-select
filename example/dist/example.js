require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
Note: ESLint is currently misreporting unused / undeclared variables for JSX.
These errors can be ignored until the bug has been fixed.
 */

'use strict';

var React = require('react/addons');
var DateSelect = require('react-date-select');

var DateSelectExamples = React.createClass({
	displayName: 'DateSelectExamples',
	getInitialState: function getInitialState() {
		return {};
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				null,
				'Day Select'
			),
			React.createElement(
				'p',
				null,
				'Pick a single date'
			),
			React.createElement(DateSelect, { isOpen: this.state.dateSelectIsOpen, onChange: this.toggleDateSelect }),
			React.createElement(
				'h3',
				null,
				'Multi Select'
			),
			React.createElement(
				'p',
				null,
				'Pick a start and end date'
			),
			React.createElement(DateSelect, { isOpen: this.state.multiSelectIsOpen, onChange: this.toggleMultiSelect, isMulti: true, buttonLabel: 'Launch range picker' }),
			React.createElement(
				'h3',
				null,
				'Multi Select with Ranges'
			),
			React.createElement(
				'p',
				null,
				'Pick a start and end date, with the option to use predefined ranges.'
			),
			React.createElement(DateSelect, { isOpen: this.state.rangeSelectIsOpen, onChange: this.toggleRangeSelect, isMulti: true, showPredefinedRanges: true, buttonLabel: 'Launch range picker (with default ranges)' })
		);
	}
});

React.render(React.createElement(DateSelectExamples, null), document.getElementById('example'));

},{"react-date-select":undefined,"react/addons":undefined}]},{},[1]);
