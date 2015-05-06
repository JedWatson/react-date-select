var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

var DateSelectHeader = require('./DateSelectHeader');

module.exports = React.createClass({
	displayName: 'DateSelectHeader',
	propTypes: {
		isExpanded: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		selectedDate: React.PropTypes.string,
		weekStartsOn: React.PropTypes.string,
		yearRange: React.PropTypes.arrayOf(React.PropTypes.number)
	},
	getDefaultProps() {
		var yearRange = [];
		yearRange.push(parseInt(moment().subtract(10, 'years').format('YYYY')));
		yearRange.push(parseInt(moment().add(10, 'years').format('YYYY')));

		return {
			weekStartsOn: 'Monday',
			yearRange: yearRange
		};
	},
	getInitialState() {
		return {
			selectedDate: this.props.selectedDate
		};
	},

	handleDaySelection(day) {
		this.setState({ selectedDate: day });
	},

	render() {
		var self = this;
		var firstDayOfMonth = moment().startOf('month').format('D');
		var lastDayOfMonth  = moment().endOf('month').format('D');
		var currentDayOfMonth  = moment().format('D');

		var calendarClass = classNames('DateSelect-calendar', {
			'DateSelect-calendar--start': this.props.startDate,
			'DateSelect-calendar--end': this.props.endDate
		});


		// variables
		var currentMonth = moment().format('MMMM');
		var currentYear = moment().format('YYYY');
		var years = [];
		var months = ['January','February','March','April','June','July','August','September','October','November','December'];
		var daysOfTheMonth = [];
		var daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
		for(var  i = firstDayOfMonth; i < lastDayOfMonth; i++) {
			daysOfTheMonth.push(i);
		}
		for (var i = this.props.yearRange[0]; i < this.props.yearRange[1]; i++) {
			years.push(i);
		}

		
		// elements
		
		var weekDays = daysOfTheWeek.map(function(day, i) {
			return <abbr key={'day' + i} className="DateSelect-calendar-legend-day" title={day}>{day.slice(0,1)}</abbr>
		});
		var monthDays = daysOfTheMonth.map(function(day) {
			var dayClass = classNames('DateSelect-calendar-month-day', {
				'current-day': day == currentDayOfMonth,
				'selected-day': day == self.state.selectedDate,
				'before-selected-day': self.state.selectedDate && (day < self.state.selectedDate),
				'after-selected-day': self.state.selectedDate && (day > self.state.selectedDate)
			})
			return <button key={'day' + day} onClick={self.handleDaySelection.bind(self, day)} className={dayClass}>{day}</button>
		});
		
		var titleMonths = months.map(function(month, i) {
			return <option key={'month' + i} value={month}>{month.slice(0,3)}</option>
		});
		var titleYears = years.map(function(year, i) {
			return <option key={'year' + i} value={year}>{year}</option>
		});

		var calendar = <div className={calendarClass}>
			{!this.props.isHeaderless && <DateSelectHeader selectedDate={this.state.selectedDate} isExpanded={this.props.isExpanded} />}
			<div className="DateSelect-calendar-toolbar">
				<button className="DateSelect-calendar-toolbar-button-prev">Previous Month</button>
				<select className="DateSelect-calendar-toolbar-select" defaultValue={currentMonth}>{titleMonths}</select>
				<select className="DateSelect-calendar-toolbar-select" defaultValue={currentYear}>{titleYears}</select>
				<button className="DateSelect-calendar-toolbar-button-next">Next Month</button>
			</div>
			<div className="DateSelect-calendar-legend">{weekDays}</div>
			<div className="DateSelect-calendar-month">{monthDays}</div>
		</div>
		
		return calendar;
	}
});
