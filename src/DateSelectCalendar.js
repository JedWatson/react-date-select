var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

var DateSelectHeader = require('./DateSelectHeader');

module.exports = React.createClass({
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

		// variables
		var selectedMonth = 'Bay';
		var selectedYear = '2004';

		var years = ['2003', '2004'];
		var months = ['April', 'Bay'].map(function(x) { return { name: x.slice(0, 3), value: x } });
		var days = [10, 28, 29, 30, 31, 1,2,3,4,5,6,7,8,9,10,15].map(function(x) { return {
      name: x,
      highlighted: false,
      selected: x >= 29 && x <= 31,
      disabled: x == 28,
    }})
		var dayNames = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(function(x) { return { name: x.slice(0, 1), title: x } })

    ////////// RENDERING
    var renderLegend = dayNames.map(function(day, i) {
			return <abbr className="DateSelectCalendar__legend__day" key={'day-abbr-' + i} title={day.name}>{day.abbr}</abbr>
    })

		var renderDays = days.map(function(day, i) {
      function handleOnSelect() {
        self.handleDaySelection(day)
      }

      var selected = day.selected
      var dayBefore = days[i - 1] || {}
      var dayAfter = days[i + 1] || {}

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
		});

		var monthOptions = months.map(function(month, i) { return <option key={'month-' + i} value={month.value}>{month.name}</option> });
		var yearOptions = years.map(function(year, i) { return <option key={'year-' + i} value={year}>{year}</option> });

		return <div className='DateSelectCalendar'>
			<div className="DateSelectCalendar__toolbar">
				<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--prev">Previous Month</button>
				<select className="DateSelectCalendar__toolbar__select" value={selectedMonth}>{monthOptions}</select>
				<select className="DateSelectCalendar__toolbar__select" value={selectedYear}>{yearOptions}</select>
				<button className="DateSelectCalendar__toolbar__button DateSelectCalendar__toolbar__button--next">Next Month</button>
			</div>
			<div className="DateSelectCalendar__legend">{renderLegend}</div>
			<div className="DateSelectCalendar__month">{renderDays}</div>
		</div>
	}
});
