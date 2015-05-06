/*
Note: ESLint is currently misreporting unused / undeclared variables for JSX.
These errors can be ignored until the bug has been fixed.
 */

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
				<h3>Pick a single date</h3>
				<DateSelect value={this.state.singleDateValue} onChange={this.onDateChange.bind(this, 'singleDateValue')} />
				
				<h3>Pick a start and end date</h3>
				<DateSelect value={this.state.multiDateValue1} onChange={this.onDateChange.bind(this, 'multiDateValue1')} isMulti buttonLabel="Launch range picker" />
				
				<h3>Pick a start and end date, with the option to use predefined ranges.</h3>
				<DateSelect value={this.state.multiDateValue2} onChange={this.onDateChange.bind(this, 'multiDateValue2')} isMulti showPredefinedRanges buttonLabel="Launch range picker (with default ranges)" />
			</div>
		);
	}
});

React.render(
	<DateSelectExamples />,
	document.getElementById('example')
);
