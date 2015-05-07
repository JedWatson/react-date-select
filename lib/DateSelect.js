'use strict';

var blacklist = require('blacklist');
var moment = require('moment');
var React = require('react');

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
		if (!this.state.isOpen) return;
		var dialogProps = blacklist(this.props, 'dialogClassName');
		dialogProps.className = this.props.dialogClassName;
		dialogProps.onCancel = this.closeDateSelect;
		dialogProps.onSelect = this.closeDateSelect;
		return React.createElement(DateSelectDialog, dialogProps);
	},
	renderChildren: function renderChildren() {
		var _this = this;

		return React.Children.map(this.props.children, function (child) {
			child.props.onClick = _this.openDateSelect;
			return child;
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