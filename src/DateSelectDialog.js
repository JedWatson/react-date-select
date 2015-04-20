var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var moment = require('moment');
var classNames = require('classnames');

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
	getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	renderDialog() {
		return (
			<div className="modal-dialog date-picker-dialog">
				<div className="date-picker-content">
					<div className="date-picker-body">
						<DateSelectCalendar selectedDate={this.state.startDate} isHeaderless={this.props.isHeaderless} isInstant={this.props.isInstant} />
						{this.props.isMulti && <DateSelectCalendar selectedDate={this.state.endDate} isHeaderless={this.props.isHeaderless} />}
					</div>
					{this.renderRanges()}
					{!this.props.isInstant && <div className="date-picker-footer">
						<button onClick={this.props.onSelect} className="date-picker-footer-button primary">Confirm</button>
						<button onClick={this.props.onCancel} className="date-picker-footer-button">Cancel</button>
					</div>}
				</div>
			</div>
		);
	},
	renderRanges() {
		if (!this.props.showPredefinedRanges) return;
		var self = this;
		var rangeItems = this.props.predefinedRangeOptions.map(function(r,i) {
			function action() {
				self.setState({
					startDate: moment().format('D'),
					endDate: r.value.format('D')
				});
			};
			return <button key={'range-button' + i} onClick={action} className="date-picker-range">{r.label}</button>;
		});
		return (
			<div className="date-picker-ranges">
				<div className="date-picker-ranges-header">Select:</div>
				<div className="date-picker-ranges-body">
					{rangeItems}
				</div>
			</div>
		);
	},
	renderBackdrop() {
		return (
			<div className="modal-backdrop date-picker-backdrop" onClick={this.props.backdropClosesDateSelect ? this.props.onCancel : null} />
		);
	},
	render() {
		// classes
		var componentClass = classNames('date-picker', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.className);
		
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
