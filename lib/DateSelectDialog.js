'use strict';

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
	getInitialState: function getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	renderDialog: function renderDialog() {
		if (!this.props.isOpen) return null;
		return React.createElement(
			'div',
			{ className: 'DateSelect-dialog' },
			React.createElement(
				'div',
				{ className: 'DateSelect-content' },
				React.createElement(
					'div',
					{ className: 'DateSelect-body' },
					React.createElement(DateSelectCalendar, { selectedDate: this.state.startDate, isHeaderless: this.props.isHeaderless, isInstant: this.props.isInstant }),
					this.props.isMulti && React.createElement(DateSelectCalendar, { selectedDate: this.state.endDate, isHeaderless: this.props.isHeaderless })
				),
				this.renderRanges(),
				!this.props.isInstant && React.createElement(
					'div',
					{ className: 'DateSelectFooter' },
					React.createElement(
						'button',
						{ onClick: this.props.onSelect, className: 'DateSelectFooter__button DateSelectFooter__button--primary' },
						'Confirm'
					),
					React.createElement(
						'button',
						{ onClick: this.props.onCancel, className: 'DateSelectFooter__button DateSelectFooter__button--link' },
						'Cancel'
					)
				)
			)
		);
	},
	renderRanges: function renderRanges() {
		if (!this.props.showPredefinedRanges) return null;
		var self = this;
		var rangeItems = this.props.predefinedRangeOptions.map(function (r, i) {
			function action() {
				self.setState({
					startDate: moment().format('D'),
					endDate: r.value.format('D')
				});
			}
			return React.createElement(
				'button',
				{ key: 'range-button' + i, onClick: action, className: 'DateSelect__range__item' },
				r.label
			);
		});
		return React.createElement(
			'div',
			{ className: 'DateSelect__range' },
			rangeItems
		);
	},
	renderBackdrop: function renderBackdrop() {
		if (!this.props.isOpen) return null;
		return React.createElement('div', { className: 'DateSelect-backdrop', onClick: this.props.backdropClosesDateSelect ? this.props.onCancel : null });
	},
	render: function render() {
		// classes
		var componentClass = classNames('DateSelect', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.className);

		// build the components
		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-dialog', component: 'div' },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-backdrop', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});