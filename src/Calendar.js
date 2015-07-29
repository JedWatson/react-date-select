var React = require('react/addons')
var classnames = require('classnames')

module.exports = React.createClass({
	getDefaultProps () {
		return {
			dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(x => (
				{
					name: x.slice(0, 1),
					title: x
				}
			)),
			days: [30, 1, 2, 3].map(x => x.toString()),
			months: ['February', 'May'].map(x => ({ name: x.slice(0, 3), value: x })),
			years: ['2003', '2004'],

			disabled: {
				days: [0, 1, 2, 4]
			},

			onSelect: () => {},
			selected: {
				year: '2004',
				month: 'May',
				days: [-1, 0, 1, 2, 3]
			}
		}
	},

	onSelect (year, month, day) {
		this.props.onSelect(year, month, day)
	},

	render () {
		var {
			dayNames,

			days,
			months,
			years,

			disabled,
			highlighted,
			selected
		} = this.props

		var disabledMap = {}
		disabled.forEach(dayIndex => { disabledMap[dayIndex] = true })

		var highlightedMap = {}
		highlighted.forEach(dayIndex => { highlightedMap[dayIndex] = true })

		var selectedMap = {}
		selected.forEach(dayIndex => { selectedMap[dayIndex] = true })

		var renderLegend = dayNames.map((day, i) => { return <abbr className="DateSelectCalendar__legend__day" key={'day-abbr-' + i} title={day.name}>{day.abbr}</abbr> })
		var renderDays = days.map((day, i) => {
			var dayDisabled = disabled[i]
			var dayHighlighted = highlighted[i]
			var daySelected = selected[i]
			var selectClass

			if (daySelected) {
				var dayBeforeSelected = selectedMap[i - 1]
				var dayAfterSelected = selectedMap[i + 1]

				// range select
				if (dayBeforeSelected && dayAfterSelected) {
					selectClass = 'is-range-selected'

				} else if (dayBeforeSelected) {
					selectClass = 'is-selected is-selected-closed'

				} else if (dayAfterSelected) {
					selectClass = 'is-selected is-selected-open'

				} else {
					selectClass = 'is-selected'
				}
			}

			var dayClassName = classnames('DateSelectCalendar__month__day', selectClass, {
				'is-highlighted': dayHighlighted,
				'DateSelectCalendar__legend': dayDisabled
			})

			var handleOnSelect
			if (!dayDisabled) {
				handleOnSelect = () => {
					this.onSelect(this.props.selected.year, this.props.selected.month, day)
				}
			}

			return <button key={'day-' + i} className={dayClassName} onClick={handleOnSelect}>{day}</button>
		})

		var monthOptions = months.map((month, i) => { return <option key={'month-' + i} value={month.value}>{month.label}</option> })
		var yearOptions = years.map((year, i) => { return <option key={'year-' + i} value={year}>{year}</option> })

		return (
			<div className='DateSelectCalendar'>
				<div className="DateSelectCalendar__toolbar">
					<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--prev">Previous Month</button>
					<select className="DateSelectCalendar__toolbar__select" value={selected.month}>{monthOptions}</select>
					<select className="DateSelectCalendar__toolbar__select" value={selected.year}>{yearOptions}</select>
					<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--next">Next Month</button>
				</div>
				<div className="DateSelectCalendar__legend">{renderLegend}</div>
				<div className="DateSelectCalendar__month">{renderDays}</div>
			</div>
		)
	}
})
