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
		return {
			singleDateValue: new Date(),
			multiDateValue1: [new Date(), new Date()],
			multiDateValue2: [new Date(), new Date()]
		};
	},
	onDateChange: function onDateChange(key, value) {
		this.setState({ key: value });
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
			React.createElement(DateSelect, { value: this.state.singleDateValue, onChange: this.onDateChange.bind(this, 'singleDateValue') }),
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
			React.createElement(DateSelect, { value: this.state.multiDateValue1, onChange: this.onDateChange.bind(this, 'multiDateValue1'), isMulti: true, buttonLabel: 'Launch range picker' }),
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
			React.createElement(DateSelect, { value: this.state.multiDateValue2, onChange: this.onDateChange.bind(this, 'multiDateValue2'), isMulti: true, showPredefinedRanges: true, buttonLabel: 'Launch range picker (with default ranges)' })
		);
	}
});

React.render(React.createElement(DateSelectExamples, null), document.getElementById('example'));

},{"react-date-select":undefined,"react/addons":undefined}]},{},[1]);
