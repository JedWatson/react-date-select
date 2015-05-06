var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'DateSelectHeader',
	propTypes: {
		expanded: React.PropTypes.bool,
		date: React.PropTypes.object
	},
	render() {
		// helpers
		var date = moment(this.props.date);

		// classes
		var componentClass = classNames('DateSelect-calendar-header', {
			'DateSelect-calendar-header--expanded': this.props.expanded,
			'DateSelect-calendar-header--condensed': !this.props.expanded,
			'no-date': !this.props.date
		});
		
		// elements
		
		var header = this.props.expanded ? (<div className={componentClass}>
				<span className="DateSelect-calendar-header-dow">{date.format('dddd')}</span>
				<span className="DateSelect-calendar-header-month">{date.format('MMMM')}</span>
				<span className="DateSelect-calendar-header-day">{date.format('D')}</span>
				<span className="DateSelect-calendar-header-year">{date.format('YYYY')}</span>
			</div>) : ( <div className={componentClass}>
				<span className="DateSelect-calendar-header-dow">{date.format('dddd')}</span>
				<span className="DateSelect-calendar-header-day">{date.format('Do')}</span>
				<span className="DateSelect-calendar-header-month">{date.format('MMMM')}</span>
				<span className="DateSelect-calendar-header-year">{date.format('YYYY')}</span>
			</div>);

		if (this.props.date) {
			header = this.props.expanded ? (<div className={componentClass}>
				<span className="DateSelect-calendar-header-dow">{date.format('dddd')}</span>
				<span className="DateSelect-calendar-header-month">{date.format('MMMM')}</span>
				<span className="DateSelect-calendar-header-day">{date.format('D')}</span>
				<span className="DateSelect-calendar-header-year">{date.format('YYYY')}</span>
			</div>) : ( <div className={componentClass}>
				<span className="DateSelect-calendar-header-dow">{date.format('dddd')}</span>
				<span className="DateSelect-calendar-header-day">{date.format('Do')}</span>
				<span className="DateSelect-calendar-header-month">{date.format('MMMM')}</span>
				<span className="DateSelect-calendar-header-year">{date.format('YYYY')}</span>
			</div>);
		}
		
		return header;
	}
});
