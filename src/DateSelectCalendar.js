var React = require('react/addons')
var classNames = require('classnames')

module.exports = React.createClass({
	getDefaultProps () {
		return {
			days: [10, 28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15].map((x, i) => {
				return {
					name: x,
					highlighted: false,
					continues: i === 0 || i === 15,
					selected: (i >= 0 && i <= 5) || i >= 14 || x === 7 || x === 6,
					disabled: x === 9
				}
			}),
			dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(x => ({ name: x.slice(0, 1), title: x })),
			months: ['Foo', 'Bar'].map(x => ({ name: x.slice(0, 3), value: x })),
			onSelect: () => {},
			selectedMonth: 'Bay',
			selectedYear: '2004',
			years: ['2003', '2004']
		}
	},

	render () {
		var {
			days,
			dayNames,
			months,
			onSelect,
			selectedMonth,
			selectedYear,
			years
		} = this.props

		var renderLegend = dayNames.map((day, i) => {
			return <abbr className="DateSelectCalendar__legend__day" key={'day-abbr-' + i} title={day.name}>{day.abbr}</abbr>
		})

		var renderDays = days.map((day, i) => {
			var handleOnSelect = onSelect && function () {
				onSelect(day)
			}

			// range select
			var selected = day.selected
			var dayBefore = days[i - 1] || { selected: day.continues }
			var dayAfter = days[i + 1] || { selected: day.continues }
			var selectClass

			if (selected) {
				if (dayBefore.selected && dayAfter.selected) {
					selectClass = 'is-range-selected'

				} else if (dayBefore.selected) {
					selectClass = 'is-selected is-selected-closed'

				} else if (dayAfter.selected) {
					selectClass = 'is-selected is-selected-open'

				} else {
					selectClass = 'is-selected'
				}
			}

			var dayClass = classNames('DateSelectCalendar__month__day', selectClass, {
				'is-highlighted': day.highlighted,
				'DateSelectCalendar__legend': day.disabled
			})

			return <button key={'day-' + i} onClick={handleOnSelect} className={dayClass}>{day}</button>
		})

		var monthOptions = months.map((month, i) => { return <option key={'month-' + i} value={month.value}>{month.name}</option> })
		var yearOptions = years.map((year, i) => { return <option key={'year-' + i} value={year}>{year}</option> })

		return (
			<div className='DateSelectCalendar'>
				<div className="DateSelectCalendar__toolbar">
					<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--prev">Previous Month</button>
					<select className="DateSelectCalendar__toolbar__select" value={selectedMonth}>{monthOptions}</select>
					<select className="DateSelectCalendar__toolbar__select" value={selectedYear}>{yearOptions}</select>
					<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--next">Next Month</button>
				</div>
				<div className="DateSelectCalendar__legend">{renderLegend}</div>
				<div className="DateSelectCalendar__month">{renderDays}</div>
			</div>
		)
	}
})
