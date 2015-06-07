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