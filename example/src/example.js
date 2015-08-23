var React = require('react/addons');
var DateSelect = require('react-date-select');

var DateSelectExamples = React.createClass({
	displayName: 'DateSelectExamples',
	getInitialState() {
		return {
			singleDateValue: new Date(),
			multiDateValue1: [new Date(), new Date()],
			multiDateValue2: [new Date(), new Date()]
		};
	},
	onDateChange(key, value) {
		this.setState({ key: value });
	},
	render() {
		return (
			<div>
				<h3>Calendar</h3>
				<DateSelect.Calendar value={this.state.singleDateValue} onChange={this.onDateChange.bind(this, 'singleDateValue')} />

				<h3>Popup</h3>

				<p>Pick a single date</p>
				<DateSelect.Popup value={this.state.singleDateValue} onChange={this.onDateChange.bind(this, 'singleDateValue')} />

				<p>Pick a start and end date</p>
				<DateSelect.Popup value={this.state.multiDateValue1} onChange={this.onDateChange.bind(this, 'multiDateValue1')} isMulti buttonLabel="Launch range picker" />

				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<DateSelect.Popup value={this.state.multiDateValue2} onChange={this.onDateChange.bind(this, 'multiDateValue2')} isMulti showPredefinedRanges buttonLabel="Launch range picker (with default ranges)" />
			</div>
		);
	}
});

React.render(
	<DateSelectExamples />,
	document.getElementById('example')
);
