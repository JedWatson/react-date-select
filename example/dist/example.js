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
				'p',
				null,
				'Pick a single date'
			),
			React.createElement(DateSelect, { value: this.state.singleDateValue, onChange: this.onDateChange.bind(this, 'singleDateValue') }),
			React.createElement(
				'p',
				null,
				'Pick a start and end date'
			),
			React.createElement(DateSelect, { value: this.state.multiDateValue1, onChange: this.onDateChange.bind(this, 'multiDateValue1'), isMulti: true, buttonLabel: 'Launch range picker' }),
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

},{"react-date-select":undefined,"react/addons":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2pvc3MvRGV2ZWxvcG1lbnQvcmVhY3QtZGF0ZS1zZWxlY3QvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNLQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRTlDLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUMxQyxZQUFXLEVBQUUsb0JBQW9CO0FBQ2pDLGdCQUFlLEVBQUEsMkJBQUc7QUFDakIsU0FBTztBQUNOLGtCQUFlLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDM0Isa0JBQWUsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN6QyxrQkFBZSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDO0dBQ3pDLENBQUM7RUFDRjtBQUNELGFBQVksRUFBQSxzQkFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLE1BQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztFQUM5QjtBQUNELE9BQU0sRUFBQSxrQkFBRztBQUNSLFNBQ0M7OztHQUNDOzs7O0lBQXlCO0dBQ3pCLG9CQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEFBQUMsR0FBRztHQUU1Rzs7OztJQUFnQztHQUNoQyxvQkFBQyxVQUFVLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxBQUFDLEVBQUMsT0FBTyxNQUFBLEVBQUMsV0FBVyxFQUFDLHFCQUFxQixHQUFHO0dBRXRKOzs7O0lBQTJFO0dBQzNFLG9CQUFDLFVBQVUsSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLEFBQUMsRUFBQyxPQUFPLE1BQUEsRUFBQyxvQkFBb0IsTUFBQSxFQUFDLFdBQVcsRUFBQywyQ0FBMkMsR0FBRztHQUM1TCxDQUNMO0VBQ0Y7Q0FDRCxDQUFDLENBQUM7O0FBRUgsS0FBSyxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxrQkFBa0IsT0FBRyxFQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG5Ob3RlOiBFU0xpbnQgaXMgY3VycmVudGx5IG1pc3JlcG9ydGluZyB1bnVzZWQgLyB1bmRlY2xhcmVkIHZhcmlhYmxlcyBmb3IgSlNYLlxuVGhlc2UgZXJyb3JzIGNhbiBiZSBpZ25vcmVkIHVudGlsIHRoZSBidWcgaGFzIGJlZW4gZml4ZWQuXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QvYWRkb25zJyk7XG52YXIgRGF0ZVNlbGVjdCA9IHJlcXVpcmUoJ3JlYWN0LWRhdGUtc2VsZWN0Jyk7XG5cbnZhciBEYXRlU2VsZWN0RXhhbXBsZXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnRGF0ZVNlbGVjdEV4YW1wbGVzJyxcblx0Z2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzaW5nbGVEYXRlVmFsdWU6IG5ldyBEYXRlKCksXG5cdFx0XHRtdWx0aURhdGVWYWx1ZTE6IFtuZXcgRGF0ZSgpLCBuZXcgRGF0ZSgpXSxcblx0XHRcdG11bHRpRGF0ZVZhbHVlMjogW25ldyBEYXRlKCksIG5ldyBEYXRlKCldXG5cdFx0fTtcblx0fSxcblx0b25EYXRlQ2hhbmdlKGtleSwgdmFsdWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsga2V5OiB2YWx1ZSB9KTtcblx0fSxcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD5QaWNrIGEgc2luZ2xlIGRhdGU8L3A+XG5cdFx0XHRcdDxEYXRlU2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnNpbmdsZURhdGVWYWx1ZX0gb25DaGFuZ2U9e3RoaXMub25EYXRlQ2hhbmdlLmJpbmQodGhpcywgJ3NpbmdsZURhdGVWYWx1ZScpfSAvPlxuXHRcdFx0XHRcblx0XHRcdFx0PHA+UGljayBhIHN0YXJ0IGFuZCBlbmQgZGF0ZTwvcD5cblx0XHRcdFx0PERhdGVTZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUubXVsdGlEYXRlVmFsdWUxfSBvbkNoYW5nZT17dGhpcy5vbkRhdGVDaGFuZ2UuYmluZCh0aGlzLCAnbXVsdGlEYXRlVmFsdWUxJyl9IGlzTXVsdGkgYnV0dG9uTGFiZWw9XCJMYXVuY2ggcmFuZ2UgcGlja2VyXCIgLz5cblx0XHRcdFx0XG5cdFx0XHRcdDxwPlBpY2sgYSBzdGFydCBhbmQgZW5kIGRhdGUsIHdpdGggdGhlIG9wdGlvbiB0byB1c2UgcHJlZGVmaW5lZCByYW5nZXMuPC9wPlxuXHRcdFx0XHQ8RGF0ZVNlbGVjdCB2YWx1ZT17dGhpcy5zdGF0ZS5tdWx0aURhdGVWYWx1ZTJ9IG9uQ2hhbmdlPXt0aGlzLm9uRGF0ZUNoYW5nZS5iaW5kKHRoaXMsICdtdWx0aURhdGVWYWx1ZTInKX0gaXNNdWx0aSBzaG93UHJlZGVmaW5lZFJhbmdlcyBidXR0b25MYWJlbD1cIkxhdW5jaCByYW5nZSBwaWNrZXIgKHdpdGggZGVmYXVsdCByYW5nZXMpXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoXG5cdDxEYXRlU2VsZWN0RXhhbXBsZXMgLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7XG4iXX0=
