var React = require('react/addons')

var classnames = require('classnames')
var moment = require('moment')

var Header = require('./DateSelectHeader')

module.exports = React.createClass({
	render () {
		var self = this
		var firstDayOfMonth = moment().startOf('month').format('D')
		var lastDayOfMonth  = moment().endOf('month').format('D')
		var currentDayOfMonth  = moment().format('D')

		// variables
		var currentMonth = moment().format('MMMM')
		var currentYear = moment().format('YYYY')
		var years = []
		var months = ['January','February','March','April','June','July','August','September','October','November','December']

		var daysOfTheMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
		var daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

		for (var i = firstDayOfMonth; i < lastDayOfMonth; i++) {
			daysOfTheMonth.push(i)
		}

		for (var j = this.props.yearRange[0]; j < this.props.yearRange[1]; j++) {
			years.push(j)
		}

		var calendarClass = classnames('DateSelectCalendar', {
			'DateSelectCalendar--start': this.props.startDate,
			'DateSelectCalendar--end': this.props.endDate
		})

		var weekDays = daysOfTheWeek.map((day, i) => { return <abbr key={'day' + i} className="DateSelectCalendar__legend__day" title={day}>{day.slice(0, 1)}</abbr> })
		var monthDays = daysOfTheMonth.map((day) => {
			var dayClass = classnames('DateSelectCalendar__month__day', {
				'is-current-day': day === currentDayOfMonth,
				'is-selected': day === self.state.selectedDate,
				'is-before-selected-day': self.state.selectedDate && (day < self.state.selectedDate),
				'is-after-selected-day': self.state.selectedDate && (day > self.state.selectedDate)
			})

			return <button key={'day' + day} onClick={self.handleDaySelection.bind(self, day)} className={dayClass}>{day}</button>
		})

		var titleMonths = months.map((month, i) => { return <option key={'month' + i} value={month}>{month.slice(0,3)}</option> })
		var titleYears = years.map((year, i) => { return <option key={'year' + i} value={year}>{year}</option> })
		return <div className={calendarClass}>
			<div className="DateSelectCalendar__toolbar">
				<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--prev">Previous Month</button>
				<select className="DateSelectCalendar__toolbar__select" defaultValue={currentMonth}>{titleMonths}</select>
				<select className="DateSelectCalendar__toolbar__select" defaultValue={currentYear}>{titleYears}</select>
				<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--next">Next Month</button>
			</div>
			<div className="DateSelectCalendar__legend">{weekDays}</div>
			<div className="DateSelectCalendar__month">{monthDays}</div>
		</div>

		return (
			<Header selectedDate={this.state.selectedDate} isExpanded={this.props.isExpanded} />
			<Calendar
				days={days}
				dayNames={dayNames}
				months={months}
				disabled={disabledOptions}

				onSelect={onSelect}
				selected={selected}
			/>
		)
	}
})
