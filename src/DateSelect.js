var _ = require('lodash');
var moment = require('moment');
var React = require('react');

var DateSelectDialog = require('./DateSelectDialog');

var DEFAULT_RANGES = [
	{ value: moment().subtract(1, 'weeks'),   label: 'Past week' },
	{ value: moment().subtract(1, 'months'),  label: 'Past month' },
	{ value: moment().subtract(3, 'months'),  label: 'Past 3 months' },
	{ value: moment().subtract(6, 'months'),  label: 'Past 6 months' },
	{ value: moment().subtract(12, 'months'), label: 'Past 12 months' }
];

var DateSelect = React.createClass({
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
	getDefaultProps () {
		return {
			buttonLabel: 'Launch Date Select',
			predefinedRangeOptions: DEFAULT_RANGES
		};
	},
	getInitialState () {
		return {
			isOpen: false
		};
	},
	openDateSelect () {
		this.setState({ isOpen: true });
	},
	closeDateSelect () {
		this.setState({ isOpen: false });
	},
	renderDateSelect () {
		if (!this.state.isOpen) return;
		var props = _.pick(this.props, ['value', 'isMulti', 'showPredefinedRanges', 'predefinedRangeOptions', 'backdropClosesDateSelect', 'isExpanded', 'isInstant', 'isHeaderless']);
		props.className = this.props.dialogClassName;
		props.onCancel = this.closeDateSelect;
		props.onSelect = this.closeDateSelect;
		return <DateSelectDialog {...props} />;
	},
	render () {
		return (
			<div>
				<button onClick={this.openDateSelect} type="button" className="btn btn-default">{this.props.buttonLabel}</button>
				{this.renderDateSelect()}
			</div>
		);
	}
});

module.exports = DateSelect;
