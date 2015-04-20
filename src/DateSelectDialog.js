var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var moment = require('moment');
var classNames = require('classnames');

var DateSelectCalendar = require('./DateSelectCalendar');

var DEFAULT_RANGES = [
	{ value: moment().subtract(1, 'weeks'),   label: 'Past week' },
	{ value: moment().subtract(1, 'months'),  label: 'Past month' },
	{ value: moment().subtract(3, 'months'),  label: 'Past 3 months' },
	{ value: moment().subtract(6, 'months'),  label: 'Past 6 months' },
	{ value: moment().subtract(12, 'months'), label: 'Past 12 months' }
];

module.exports = React.createClass({
	displayName: 'DateSelectDialog',
	propTypes: {
		isMulti: React.PropTypes.bool,
		showPredefinedRanges: React.PropTypes.bool,
		predefinedRangeOptions: React.PropTypes.array,
		backdropClosesDateSelect: React.PropTypes.bool,

		isExpanded: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,

		customClass: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			predefinedRangeOptions: DEFAULT_RANGES
		};
	},
	getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	
	renderDialog() {
		return (
			<div className="modal-dialog date-select-dialog">
				<div className="date-select-content">
					<div className="date-select-body">
						<DateSelectCalendar selectedDate={this.state.startDate} isHeaderless={this.props.isHeaderless} isInstant={this.props.isInstant} />
						{this.props.isMulti && <DateSelectCalendar selectedDate={this.state.endDate} isHeaderless={this.props.isHeaderless} />}
					</div>
					{this.renderRanges()}
					{!this.props.isInstant && <div className="date-select-footer">
						<button onClick={this.props.onChange} className="date-select-footer-button primary">Confirm</button>
						<button onClick={this.props.onCancel} className="date-select-footer-button">Cancel</button>
					</div>}
				</div>
			</div>
		);
	},
	renderRanges() {
		if (!this.props.showPredefinedRanges) return;
		var rangeItems = this.props.predefinedRangeOptions.map(function(r,i) {
			function action() {
				self.setState({
					startDate: moment().format('D'),
					endDate: r.value.format('D')
				});
				console.log(moment().format() + ' to ' + r.value.format());
			};
			return <button key={'range-button' + i} onClick={action} className="date-select-range">{r.label}</button>;
		});
		return (
			<div className="date-select-ranges">
				<div className="date-select-ranges-header">Select:</div>
				<div className="date-select-ranges-body">
					{rangeItems}
				</div>
			</div>
		);
	},
	renderBackdrop() {
		return (
			<div className="modal-backdrop date-select-backdrop" onClick={this.props.backdropClosesDateSelect ? this.props.onCancel : null} />
		);
	},
	render() {
		var self = this;
		
		// classes
		var componentClass = classNames('date-select', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.customClass);
		
		// build the components
		return (
			<div className={componentClass}>
				<ReactCSSTransitionGroup transitionName="modal-dialog" component="div">
					{this.renderDialog()}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="modal-background" component="div">
					{this.renderBackdrop()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
