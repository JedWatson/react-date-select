var blacklist = require('blacklist');
var CalendarComponent = require('./Calendar');
var classNames = require('classnames');
var React = require('react/addons');

export var Popup = require('./Popup');

var InlineCalendar = React.createClass({
	propTypes: {
		className: React.PropTypes.string,
		style: React.PropTypes.object
	},
	render () {
		var calendarProps = blacklist(this.props, 'className', 'style');
		var componentClass = classNames('DateSelect DateSelect-inline-container', this.props.className);
		return (
			<div className={componentClass} style={this.props.style}>
				<CalendarComponent {...calendarProps} />
			</div>
		);
	}
});

export var Calendar = InlineCalendar;
