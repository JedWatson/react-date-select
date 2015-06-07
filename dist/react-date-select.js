(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DateSelect = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blacklist = (window.blacklist);
var moment = (window.moment);
var React = (window.React);

var DateSelectDialog = require('./DateSelectDialog');

var DEFAULT_RANGES = [{ value: moment().subtract(1, 'weeks'), label: 'Past week' }, { value: moment().subtract(1, 'months'), label: 'Past month' }, { value: moment().subtract(3, 'months'), label: 'Past 3 months' }, { value: moment().subtract(6, 'months'), label: 'Past 6 months' }, { value: moment().subtract(12, 'months'), label: 'Past 12 months' }];

var DateSelect = React.createClass({
	displayName: 'DateSelect',

	propTypes: {
		backdropClosesDateSelect: React.PropTypes.bool,
		dialogClassName: React.PropTypes.string,
		isExpanded: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		isMulti: React.PropTypes.bool,
		predefinedRangeOptions: React.PropTypes.array,
		showPredefinedRanges: React.PropTypes.bool,
		value: React.PropTypes.any
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonLabel: 'Launch Date Select',
			predefinedRangeOptions: DEFAULT_RANGES
		};
	},
	getInitialState: function getInitialState() {
		return {
			isOpen: false
		};
	},
	openDateSelect: function openDateSelect() {
		this.setState({ isOpen: true });
	},
	closeDateSelect: function closeDateSelect() {
		this.setState({ isOpen: false });
	},
	renderDateSelect: function renderDateSelect() {
		// if (!this.state.isOpen) return;
		var dialogProps = blacklist(this.props, 'dialogClassName');
		dialogProps.className = this.props.dialogClassName;
		dialogProps.onCancel = this.closeDateSelect;
		dialogProps.onSelect = this.closeDateSelect;
		return React.createElement(DateSelectDialog, _extends({ isOpen: this.state.isOpen }, dialogProps));
	},
	renderChildren: function renderChildren() {
		var _this = this;

		return React.Children.map(this.props.children, function (child) {
			return React.cloneElement(child, { onClick: _this.openDateSelect });
		});
	},
	renderButton: function renderButton() {
		return React.createElement(
			'button',
			{ onClick: this.openDateSelect, type: 'button', className: this.props.buttonClassName },
			this.props.buttonLabel
		);
	},
	render: function render() {
		return React.createElement(
			'span',
			null,
			React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton(),
			this.renderDateSelect()
		);
	}
});

module.exports = DateSelect;

},{"./DateSelectDialog":3}],2:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var moment = (window.moment);
var classNames = (window.classNames);

var DateSelectHeader = require('./DateSelectHeader');

module.exports = React.createClass({
	displayName: 'DateSelectCalendar',
	propTypes: {
		isExpanded: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		selectedDate: React.PropTypes.string,
		weekStartsOn: React.PropTypes.string,
		yearRange: React.PropTypes.arrayOf(React.PropTypes.number)
	},
	getDefaultProps: function getDefaultProps() {
		var yearRange = [];
		yearRange.push(parseInt(moment().subtract(10, 'years').format('YYYY')));
		yearRange.push(parseInt(moment().add(10, 'years').format('YYYY')));

		return {
			weekStartsOn: 'Monday',
			yearRange: yearRange
		};
	},
	getInitialState: function getInitialState() {
		return {
			selectedDate: this.props.selectedDate
		};
	},

	handleDaySelection: function handleDaySelection(day) {
		this.setState({ selectedDate: day });
	},

	render: function render() {
		var self = this;
		var firstDayOfMonth = moment().startOf('month').format('D');
		var lastDayOfMonth = moment().endOf('month').format('D');
		var currentDayOfMonth = moment().format('D');

		var calendarClass = classNames('DateSelectCalendar', {
			'DateSelectCalendar--start': this.props.startDate,
			'DateSelectCalendar--end': this.props.endDate
		});

		// variables
		var currentMonth = moment().format('MMMM');
		var currentYear = moment().format('YYYY');
		var years = [];
		var months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var daysOfTheMonth = [];
		var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		for (var i = firstDayOfMonth; i < lastDayOfMonth; i++) {
			daysOfTheMonth.push(i);
		}
		for (var j = this.props.yearRange[0]; j < this.props.yearRange[1]; j++) {
			years.push(j);
		}

		// elements

		var weekDays = daysOfTheWeek.map(function (day, i) {
			return React.createElement(
				'abbr',
				{ key: 'day' + i, className: 'DateSelectCalendar__legend__day', title: day },
				day.slice(0, 1)
			);
		});
		var monthDays = daysOfTheMonth.map(function (day) {
			var dayClass = classNames('DateSelectCalendar__month__day', {
				'is-current-day': day === currentDayOfMonth,
				'is-selected': day === self.state.selectedDate,
				'is-before-selected-day': self.state.selectedDate && day < self.state.selectedDate,
				'is-after-selected-day': self.state.selectedDate && day > self.state.selectedDate
			});
			return React.createElement(
				'button',
				{ key: 'day' + day, onClick: self.handleDaySelection.bind(self, day), className: dayClass },
				day
			);
		});

		var titleMonths = months.map(function (month, i) {
			return React.createElement(
				'option',
				{ key: 'month' + i, value: month },
				month.slice(0, 3)
			);
		});
		var titleYears = years.map(function (year, i) {
			return React.createElement(
				'option',
				{ key: 'year' + i, value: year },
				year
			);
		});

		var calendar = React.createElement(
			'div',
			{ className: calendarClass },
			!this.props.isHeaderless && React.createElement(DateSelectHeader, { selectedDate: this.state.selectedDate, isExpanded: this.props.isExpanded }),
			React.createElement(
				'div',
				{ className: 'DateSelectCalendar__toolbar' },
				React.createElement(
					'button',
					{ className: 'DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--prev' },
					'Previous Month'
				),
				React.createElement(
					'select',
					{ className: 'DateSelectCalendar__toolbar__select', defaultValue: currentMonth },
					titleMonths
				),
				React.createElement(
					'select',
					{ className: 'DateSelectCalendar__toolbar__select', defaultValue: currentYear },
					titleYears
				),
				React.createElement(
					'button',
					{ className: 'DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--next' },
					'Next Month'
				)
			),
			React.createElement(
				'div',
				{ className: 'DateSelectCalendar__legend' },
				weekDays
			),
			React.createElement(
				'div',
				{ className: 'DateSelectCalendar__month' },
				monthDays
			)
		);

		return calendar;
	}
});

},{"./DateSelectHeader":4,"react/addons":undefined}],3:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var moment = (window.moment);
var classNames = (window.classNames);

var DateSelectCalendar = require('./DateSelectCalendar');

module.exports = React.createClass({
	displayName: 'DateSelectDialog',
	propTypes: {
		backdropClosesDateSelect: React.PropTypes.bool,
		className: React.PropTypes.string,
		isExpanded: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		isMulti: React.PropTypes.bool,
		onCancel: React.PropTypes.func,
		onSelect: React.PropTypes.func,
		predefinedRangeOptions: React.PropTypes.array,
		showPredefinedRanges: React.PropTypes.bool
	},
	getInitialState: function getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	renderDialog: function renderDialog() {
		if (!this.props.isOpen) return null;
		return React.createElement(
			'div',
			{ className: 'DateSelect-dialog' },
			React.createElement(
				'div',
				{ className: 'DateSelect-content' },
				React.createElement(
					'div',
					{ className: 'DateSelect-body' },
					React.createElement(DateSelectCalendar, { selectedDate: this.state.startDate, isHeaderless: this.props.isHeaderless, isInstant: this.props.isInstant }),
					this.props.isMulti && React.createElement(DateSelectCalendar, { selectedDate: this.state.endDate, isHeaderless: this.props.isHeaderless })
				),
				this.renderRanges(),
				!this.props.isInstant && React.createElement(
					'div',
					{ className: 'DateSelectFooter' },
					React.createElement(
						'button',
						{ onClick: this.props.onSelect, className: 'DateSelectFooter__button DateSelectFooter__button--primary' },
						'Confirm'
					),
					React.createElement(
						'button',
						{ onClick: this.props.onCancel, className: 'DateSelectFooter__button DateSelectFooter__button--link' },
						'Cancel'
					)
				)
			)
		);
	},
	renderRanges: function renderRanges() {
		if (!this.props.showPredefinedRanges) return null;
		var self = this;
		var rangeItems = this.props.predefinedRangeOptions.map(function (r, i) {
			function action() {
				self.setState({
					startDate: moment().format('D'),
					endDate: r.value.format('D')
				});
			}
			return React.createElement(
				'button',
				{ key: 'range-button' + i, onClick: action, className: 'DateSelect__range__item' },
				r.label
			);
		});
		return React.createElement(
			'div',
			{ className: 'DateSelect__range' },
			rangeItems
		);
	},
	renderBackdrop: function renderBackdrop() {
		if (!this.props.isOpen) return null;
		return React.createElement('div', { className: 'DateSelect-backdrop', onClick: this.props.backdropClosesDateSelect ? this.props.onCancel : null });
	},
	render: function render() {
		// classes
		var componentClass = classNames('DateSelect', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.className);

		// build the components
		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-dialog', component: 'div' },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-backdrop', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});

},{"./DateSelectCalendar":2,"react/addons":undefined}],4:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var moment = (window.moment);
var classNames = (window.classNames);

module.exports = React.createClass({
	displayName: 'DateSelectHeader',
	propTypes: {
		expanded: React.PropTypes.bool,
		date: React.PropTypes.object
	},
	render: function render() {
		// helpers
		var date = moment(this.props.date);

		// classes
		var componentClass = classNames('DateSelectHeader', {
			'DateSelectHeader--expanded': this.props.expanded,
			'DateSelectHeader--condensed': !this.props.expanded,
			'no-date': !this.props.date
		});

		// elements
		var header = this.props.expanded ? React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__dow' },
				date.format('dddd')
			),
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__month' },
				date.format('MMMM')
			),
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__day' },
				date.format('D')
			),
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__year' },
				date.format('YYYY')
			)
		) : React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__dow' },
				date.format('dddd')
			),
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__day' },
				date.format('Do')
			),
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__month' },
				date.format('MMMM')
			),
			React.createElement(
				'span',
				{ className: 'DateSelectHeader__year' },
				date.format('YYYY')
			)
		);

		if (this.props.date) {
			header = this.props.expanded ? React.createElement(
				'div',
				{ className: componentClass },
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__dow' },
					date.format('dddd')
				),
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__month' },
					date.format('MMMM')
				),
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__day' },
					date.format('D')
				),
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__year' },
					date.format('YYYY')
				)
			) : React.createElement(
				'div',
				{ className: componentClass },
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__dow' },
					date.format('dddd')
				),
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__day' },
					date.format('Do')
				),
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__month' },
					date.format('MMMM')
				),
				React.createElement(
					'span',
					{ className: 'DateSelectHeader__year' },
					date.format('YYYY')
				)
			);
		}

		return header;
	}
});

},{"react/addons":undefined}]},{},[1])(1)
});