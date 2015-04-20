'use strict';

var React = require('react');

var DateSelectDialog = require('./DateSelectDialog');

var DateSelect = React.createClass({
	displayName: 'DateSelect',

	getDefaultProps: function getDefaultProps() {
		return {
			buttonLabel: 'Launch Date Select'
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
		return this.state.isOpen ? React.createElement(DateSelectDialog, this.props) : null;
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'button',
				{ onClick: this.openDateSelect, type: 'button', className: 'btn btn-default' },
				this.props.buttonLabel
			),
			this.renderDateSelect()
		);
	}
});

module.exports = DateSelect;