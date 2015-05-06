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
			<div className="DateSelect-dialog modal-dialog">
				<div className="DateSelect-content">
					<div className="DateSelect-body">
						<DateSelectCalendar selectedDate={this.state.startDate} isHeaderless={this.props.isHeaderless} isInstant={this.props.isInstant} />
						{this.props.isMulti && <DateSelectCalendar selectedDate={this.state.endDate} isHeaderless={this.props.isHeaderless} />}
					</div>
					{this.renderRanges()}
					{!this.props.isInstant && <div className="DateSelect-footer">
						<button onClick={this.props.onSelect} className="DateSelect-footer-button primary">Confirm</button>
						<button onClick={this.props.onCancel} className="DateSelect-footer-button">Cancel</button>
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
			return <button key={'range-button' + i} onClick={action} className="DateSelect-range">{r.label}</button>;
		});
		return (
			<div className="DateSelect-ranges">
				<div className="DateSelect-ranges-header">Select:</div>
				<div className="DateSelect-ranges-body">
					{rangeItems}
				</div>
			</div>
		);
	},
	renderBackdrop() {
		return (
			<div className="DateSelect-backdrop modal-backdrop" onClick={this.props.backdropClosesDateSelect ? this.props.onCancel : null} />
		);
	},
	render() {
		// classes
		var componentClass = classNames('DateSelect', {
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
