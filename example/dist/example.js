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

},{"react-date-select":undefined,"react/addons":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2pvc3MvRGV2ZWxvcG1lbnQvcmVhY3QtZGF0ZS1zZWxlY3QvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNLQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRTlDLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUMxQyxZQUFXLEVBQUUsb0JBQW9CO0FBQ2pDLGdCQUFlLEVBQUEsMkJBQUc7QUFDakIsU0FBTyxFQUVOLENBQUM7RUFDRjtBQUNELE9BQU0sRUFBQSxrQkFBRztBQUNSLFNBQ0M7OztHQUNDOzs7O0lBQW1CO0dBQ25COzs7O0lBQXlCO0dBQ3pCLG9CQUFDLFVBQVUsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEFBQUMsR0FBRztHQUVwRjs7OztJQUFxQjtHQUNyQjs7OztJQUFnQztHQUNoQyxvQkFBQyxVQUFVLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixBQUFDLEVBQUMsT0FBTyxNQUFBLEVBQUMsV0FBVyxFQUFDLHFCQUFxQixHQUFHO0dBRWhJOzs7O0lBQWlDO0dBQ2pDOzs7O0lBQTJFO0dBQzNFLG9CQUFDLFVBQVUsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQUFBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEFBQUMsRUFBQyxPQUFPLE1BQUEsRUFBQyxvQkFBb0IsTUFBQSxFQUFDLFdBQVcsRUFBQywyQ0FBMkMsR0FBRztHQUN0SyxDQUNMO0VBQ0Y7Q0FDRCxDQUFDLENBQUM7O0FBRUgsS0FBSyxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxrQkFBa0IsT0FBRyxFQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG5Ob3RlOiBFU0xpbnQgaXMgY3VycmVudGx5IG1pc3JlcG9ydGluZyB1bnVzZWQgLyB1bmRlY2xhcmVkIHZhcmlhYmxlcyBmb3IgSlNYLlxuVGhlc2UgZXJyb3JzIGNhbiBiZSBpZ25vcmVkIHVudGlsIHRoZSBidWcgaGFzIGJlZW4gZml4ZWQuXG4gKi9cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QvYWRkb25zJyk7XG52YXIgRGF0ZVNlbGVjdCA9IHJlcXVpcmUoJ3JlYWN0LWRhdGUtc2VsZWN0Jyk7XG5cbnZhciBEYXRlU2VsZWN0RXhhbXBsZXMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOiAnRGF0ZVNlbGVjdEV4YW1wbGVzJyxcblx0Z2V0SW5pdGlhbFN0YXRlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRcblx0XHR9O1xuXHR9LFxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMz5EYXkgU2VsZWN0PC9oMz5cblx0XHRcdFx0PHA+UGljayBhIHNpbmdsZSBkYXRlPC9wPlxuXHRcdFx0XHQ8RGF0ZVNlbGVjdCBpc09wZW49e3RoaXMuc3RhdGUuZGF0ZVNlbGVjdElzT3Blbn0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlRGF0ZVNlbGVjdH0gLz5cblx0XHRcdFx0XG5cdFx0XHRcdDxoMz5NdWx0aSBTZWxlY3Q8L2gzPlxuXHRcdFx0XHQ8cD5QaWNrIGEgc3RhcnQgYW5kIGVuZCBkYXRlPC9wPlxuXHRcdFx0XHQ8RGF0ZVNlbGVjdCBpc09wZW49e3RoaXMuc3RhdGUubXVsdGlTZWxlY3RJc09wZW59IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZU11bHRpU2VsZWN0fSBpc011bHRpIGJ1dHRvbkxhYmVsPVwiTGF1bmNoIHJhbmdlIHBpY2tlclwiIC8+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8aDM+TXVsdGkgU2VsZWN0IHdpdGggUmFuZ2VzPC9oMz5cblx0XHRcdFx0PHA+UGljayBhIHN0YXJ0IGFuZCBlbmQgZGF0ZSwgd2l0aCB0aGUgb3B0aW9uIHRvIHVzZSBwcmVkZWZpbmVkIHJhbmdlcy48L3A+XG5cdFx0XHRcdDxEYXRlU2VsZWN0IGlzT3Blbj17dGhpcy5zdGF0ZS5yYW5nZVNlbGVjdElzT3Blbn0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlUmFuZ2VTZWxlY3R9IGlzTXVsdGkgc2hvd1ByZWRlZmluZWRSYW5nZXMgYnV0dG9uTGFiZWw9XCJMYXVuY2ggcmFuZ2UgcGlja2VyICh3aXRoIGRlZmF1bHQgcmFuZ2VzKVwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59KTtcblxuUmVhY3QucmVuZGVyKFxuXHQ8RGF0ZVNlbGVjdEV4YW1wbGVzIC8+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpXG4pO1xuIl19
