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
		confirmationIsRequired: React.PropTypes.bool,
		isMulti: React.PropTypes.bool,
		onCancel: React.PropTypes.func,
		onSelect: React.PropTypes.func,
		predefinedRangeOptions: React.PropTypes.array,
		showPredefinedRanges: React.PropTypes.bool
	},
	getDefaultProps() {
		return {
			confirmationIsRequired: true
		};
	},
	getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	renderFooter() {
		if (!this.props.confirmationIsRequired) return null;
		return (
			<div className="DateSelectFooter">
				<button onClick={this.props.onSelect} className="DateSelectFooter__button DateSelectFooter__button--primary">Confirm</button>
				<button onClick={this.props.onCancel} className="DateSelectFooter__button DateSelectFooter__button--link">Cancel</button>
			</div>
		);
	},
	renderDialog() {
		if (!this.props.isOpen) return null;
		return (
			<div className="DateSelect-dialog">
				<div className="DateSelect-content">
					<div className="DateSelect-body">
						<DateSelectCalendar selectedDate={this.state.startDate} isHeaderless={this.props.isHeaderless} confirmationIsRequired={this.props.confirmationIsRequired} />
						{this.props.isMulti && <DateSelectCalendar selectedDate={this.state.endDate} isHeaderless={this.props.isHeaderless} />}
					</div>
					{this.renderRanges()}
					{this.renderFooter()}
				</div>
			</div>
		);
	},
	renderRanges() {
		if (!this.props.showPredefinedRanges) return null;
		var self = this;
		var rangeItems = this.props.predefinedRangeOptions.map(function(r, i) {
			function action() {
				self.setState({
					startDate: moment().format('D'),
					endDate: r.value.format('D')
				});
			}
			return <button key={'range-button' + i} onClick={action} className="DateSelect__range__item">{r.label}</button>;
		});
		return (
			<div className="DateSelect__range">
				{rangeItems}
			</div>
		);
	},
	renderBackdrop() {
		if (!this.props.isOpen) return null;
		return (
			<div className="DateSelect-backdrop" onClick={this.props.backdropClosesDateSelect ? this.props.onCancel : null} />
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
				<ReactCSSTransitionGroup transitionName="modal-backdrop" component="div">
					{this.renderBackdrop()}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});
