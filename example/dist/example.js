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
			dateSelectIsOpen: false,
			multiSelectIsOpen: false,
			rangeSelectIsOpen: false
		};
	},
	toggleDateSelect: function toggleDateSelect() {
		this.setState({ dateSelectIsOpen: !this.state.dateSelectIsOpen });
	},
	toggleMultiSelect: function toggleMultiSelect() {
		this.setState({ multiSelectIsOpen: !this.state.multiSelectIsOpen });
	},
	toggleRangeSelect: function toggleRangeSelect() {
		this.setState({ rangeSelectIsOpen: !this.state.rangeSelectIsOpen });
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
			React.createElement(
				'button',
				{ onClick: this.toggleDateSelect, type: 'button', className: 'btn btn-default' },
				'Launch Date Select'
			),
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
			React.createElement(
				'button',
				{ onClick: this.toggleMultiSelect, type: 'button', className: 'btn btn-default' },
				'Launch Multi Select'
			),
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
			React.createElement(
				'button',
				{ onClick: this.toggleRangeSelect, type: 'button', className: 'btn btn-default' },
				'Launch Range Select'
			),
			React.createElement(DateSelect, { isOpen: this.state.dateSelectIsOpen, onChange: this.toggleDateSelect }),
			React.createElement(DateSelect, { isOpen: this.state.multiSelectIsOpen, onChange: this.toggleMultiSelect, isMulti: true }),
			React.createElement(DateSelect, { isOpen: this.state.rangeSelectIsOpen, onChange: this.toggleRangeSelect, isMulti: true, showPredefinedRanges: true })
		);
	}
});

React.render(React.createElement(DateSelectExamples, null), document.getElementById('example'));

},{"react-date-select":undefined,"react/addons":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2pvc3MvRGV2ZWxvcG1lbnQvcmVhY3QtZGF0ZS1zZWxlY3QvZXhhbXBsZS9zcmMvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNLQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRTlDLElBQUksa0JBQWtCLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUMxQyxZQUFXLEVBQUUsb0JBQW9CO0FBQ2pDLGdCQUFlLEVBQUEsMkJBQUc7QUFDakIsU0FBTztBQUNOLG1CQUFnQixFQUFFLEtBQUs7QUFDdkIsb0JBQWlCLEVBQUUsS0FBSztBQUN4QixvQkFBaUIsRUFBRSxLQUFLO0dBQ3hCLENBQUM7RUFDRjtBQUNELGlCQUFnQixFQUFBLDRCQUFHO0FBQ2xCLE1BQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0VBQ2xFO0FBQ0Qsa0JBQWlCLEVBQUEsNkJBQUc7QUFDbkIsTUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7RUFDcEU7QUFDRCxrQkFBaUIsRUFBQSw2QkFBRztBQUNuQixNQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztFQUNwRTtBQUNELE9BQU0sRUFBQSxrQkFBRztBQUNSLFNBQ0M7OztHQUNDOzs7O0lBQW1CO0dBQ25COzs7O0lBQXlCO0dBQ3pCOztNQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEFBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUI7O0lBQTRCO0dBRTdHOzs7O0lBQXFCO0dBQ3JCOzs7O0lBQWdDO0dBQ2hDOztNQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEFBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUI7O0lBQTZCO0dBRS9HOzs7O0lBQWlDO0dBQ2pDOzs7O0lBQTJFO0dBQzNFOztNQUFRLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEFBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxpQkFBaUI7O0lBQTZCO0dBRS9HLG9CQUFDLFVBQVUsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEFBQUMsR0FBRztHQUNyRixvQkFBQyxVQUFVLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixBQUFDLEVBQUMsT0FBTyxNQUFBLEdBQUc7R0FDOUYsb0JBQUMsVUFBVSxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixBQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQUFBQyxFQUFDLE9BQU8sTUFBQSxFQUFDLG9CQUFvQixNQUFBLEdBQUc7R0FDOUcsQ0FDTDtFQUNGO0NBQ0QsQ0FBQyxDQUFDOztBQUVILEtBQUssQ0FBQyxNQUFNLENBQ1gsb0JBQUMsa0JBQWtCLE9BQUcsRUFDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbEMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuTm90ZTogRVNMaW50IGlzIGN1cnJlbnRseSBtaXNyZXBvcnRpbmcgdW51c2VkIC8gdW5kZWNsYXJlZCB2YXJpYWJsZXMgZm9yIEpTWC5cblRoZXNlIGVycm9ycyBjYW4gYmUgaWdub3JlZCB1bnRpbCB0aGUgYnVnIGhhcyBiZWVuIGZpeGVkLlxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0L2FkZG9ucycpO1xudmFyIERhdGVTZWxlY3QgPSByZXF1aXJlKCdyZWFjdC1kYXRlLXNlbGVjdCcpO1xuXG52YXIgRGF0ZVNlbGVjdEV4YW1wbGVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTogJ0RhdGVTZWxlY3RFeGFtcGxlcycsXG5cdGdldEluaXRpYWxTdGF0ZSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0ZGF0ZVNlbGVjdElzT3BlbjogZmFsc2UsXG5cdFx0XHRtdWx0aVNlbGVjdElzT3BlbjogZmFsc2UsXG5cdFx0XHRyYW5nZVNlbGVjdElzT3BlbjogZmFsc2Vcblx0XHR9O1xuXHR9LFxuXHR0b2dnbGVEYXRlU2VsZWN0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBkYXRlU2VsZWN0SXNPcGVuOiAhdGhpcy5zdGF0ZS5kYXRlU2VsZWN0SXNPcGVuIH0pO1xuXHR9LFxuXHR0b2dnbGVNdWx0aVNlbGVjdCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgbXVsdGlTZWxlY3RJc09wZW46ICF0aGlzLnN0YXRlLm11bHRpU2VsZWN0SXNPcGVuIH0pO1xuXHR9LFxuXHR0b2dnbGVSYW5nZVNlbGVjdCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgcmFuZ2VTZWxlY3RJc09wZW46ICF0aGlzLnN0YXRlLnJhbmdlU2VsZWN0SXNPcGVuIH0pO1xuXHR9LFxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMz5EYXkgU2VsZWN0PC9oMz5cblx0XHRcdFx0PHA+UGljayBhIHNpbmdsZSBkYXRlPC9wPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRGF0ZVNlbGVjdH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPkxhdW5jaCBEYXRlIFNlbGVjdDwvYnV0dG9uPlxuXHRcdFx0XHRcblx0XHRcdFx0PGgzPk11bHRpIFNlbGVjdDwvaDM+XG5cdFx0XHRcdDxwPlBpY2sgYSBzdGFydCBhbmQgZW5kIGRhdGU8L3A+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy50b2dnbGVNdWx0aVNlbGVjdH0gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPkxhdW5jaCBNdWx0aSBTZWxlY3Q8L2J1dHRvbj5cblx0XHRcdFx0XG5cdFx0XHRcdDxoMz5NdWx0aSBTZWxlY3Qgd2l0aCBSYW5nZXM8L2gzPlxuXHRcdFx0XHQ8cD5QaWNrIGEgc3RhcnQgYW5kIGVuZCBkYXRlLCB3aXRoIHRoZSBvcHRpb24gdG8gdXNlIHByZWRlZmluZWQgcmFuZ2VzLjwvcD5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVJhbmdlU2VsZWN0fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+TGF1bmNoIFJhbmdlIFNlbGVjdDwvYnV0dG9uPlxuXHRcdFx0XHRcblx0XHRcdFx0PERhdGVTZWxlY3QgaXNPcGVuPXt0aGlzLnN0YXRlLmRhdGVTZWxlY3RJc09wZW59ICBvbkNoYW5nZT17dGhpcy50b2dnbGVEYXRlU2VsZWN0fSAvPlxuXHRcdFx0XHQ8RGF0ZVNlbGVjdCBpc09wZW49e3RoaXMuc3RhdGUubXVsdGlTZWxlY3RJc09wZW59IG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZU11bHRpU2VsZWN0fSBpc011bHRpIC8+XG5cdFx0XHRcdDxEYXRlU2VsZWN0IGlzT3Blbj17dGhpcy5zdGF0ZS5yYW5nZVNlbGVjdElzT3Blbn0gb25DaGFuZ2U9e3RoaXMudG9nZ2xlUmFuZ2VTZWxlY3R9IGlzTXVsdGkgc2hvd1ByZWRlZmluZWRSYW5nZXMgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuXG5SZWFjdC5yZW5kZXIoXG5cdDxEYXRlU2VsZWN0RXhhbXBsZXMgLz4sXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcbik7XG4iXX0=
