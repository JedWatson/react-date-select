'use strict';

var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

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
		var componentClass = classNames('date-select-calendar-header', {
			'date-select-calendar-header--expanded': this.props.expanded,
			'date-select-calendar-header--condensed': !this.props.expanded,
			'no-date': !this.props.date
		});

		// elements

		var header = this.props.expanded ? React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-dow' },
				date.format('dddd')
			),
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-month' },
				date.format('MMMM')
			),
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-day' },
				date.format('D')
			),
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-year' },
				date.format('YYYY')
			)
		) : React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-dow' },
				date.format('dddd')
			),
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-day' },
				date.format('Do')
			),
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-month' },
				date.format('MMMM')
			),
			React.createElement(
				'span',
				{ className: 'date-select-calendar-header-year' },
				date.format('YYYY')
			)
		);

		if (this.props.date) {
			header = this.props.expanded ? React.createElement(
				'div',
				{ className: componentClass },
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-dow' },
					date.format('dddd')
				),
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-month' },
					date.format('MMMM')
				),
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-day' },
					date.format('D')
				),
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-year' },
					date.format('YYYY')
				)
			) : React.createElement(
				'div',
				{ className: componentClass },
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-dow' },
					date.format('dddd')
				),
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-day' },
					date.format('Do')
				),
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-month' },
					date.format('MMMM')
				),
				React.createElement(
					'span',
					{ className: 'date-select-calendar-header-year' },
					date.format('YYYY')
				)
			);
		}

		return header;
	}
});