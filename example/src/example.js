var React = require('react/addons')
var DateSelectCalendar = require('react-date-select')

var DateSelectExamples = React.createClass({
	render () {
		return (
			<div>
        <DateSelectCalendar
          selectedDate={new Date()}
          isHeaderless={false}
          isInstant={true}
        />
			</div>
		);
	}
});

React.render(
	<DateSelectExamples />,
	document.getElementById('example')
);
