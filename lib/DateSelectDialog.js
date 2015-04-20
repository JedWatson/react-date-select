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
		return React.createElement(
			'div',
			{ className: 'modal-dialog date-select-dialog' },
			React.createElement(
				'div',
				{ className: 'date-select-content' },
				React.createElement(
					'div',
					{ className: 'date-select-body' },
					React.createElement(DateSelectCalendar, { selectedDate: this.state.startDate, isHeaderless: this.props.isHeaderless, isInstant: this.props.isInstant }),
					this.props.isMulti && React.createElement(DateSelectCalendar, { selectedDate: this.state.endDate, isHeaderless: this.props.isHeaderless })
				),
				this.renderRanges(),
				!this.props.isInstant && React.createElement(
					'div',
					{ className: 'date-select-footer' },
					React.createElement(
						'button',
						{ onClick: this.props.onSelect, className: 'date-select-footer-button primary' },
						'Confirm'
					),
					React.createElement(
						'button',
						{ onClick: this.props.onCancel, className: 'date-select-footer-button' },
						'Cancel'
					)
				)
			)
		);
	},
	renderRanges: function renderRanges() {
		if (!this.props.showPredefinedRanges) {
			return;
		}var self = this;
		var rangeItems = this.props.predefinedRangeOptions.map(function (r, i) {
			function action() {
				self.setState({
					startDate: moment().format('D'),
					endDate: r.value.format('D')
				});
			};
			return React.createElement(
				'button',
				{ key: 'range-button' + i, onClick: action, className: 'date-select-range' },
				r.label
			);
		});
		return React.createElement(
			'div',
			{ className: 'date-select-ranges' },
			React.createElement(
				'div',
				{ className: 'date-select-ranges-header' },
				'Select:'
			),
			React.createElement(
				'div',
				{ className: 'date-select-ranges-body' },
				rangeItems
			)
		);
	},
	renderBackdrop: function renderBackdrop() {
		return React.createElement('div', { className: 'modal-backdrop date-select-backdrop', onClick: this.props.backdropClosesDateSelect ? this.props.onCancel : null });
	},
	render: function render() {
		// classes
		var componentClass = classNames('date-select', {
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
				{ transitionName: 'modal-background', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});