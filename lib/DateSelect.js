'use strict';

var _ = require('lodash');
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
		if (!this.state.isOpen) {
			return;
		}var props = _.pick(this.props, ['value', 'isMulti', 'showPredefinedRanges', 'predefinedRangeOptions', 'backdropClosesDateSelect', 'isExpanded', 'isInstant', 'isHeaderless']);
		props.className = this.props.dialogClassName;
		props.onCancel = this.closeDateSelect;
		props.onSelect = this.closeDateSelect;
		return React.createElement(DateSelectDialog, props);
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