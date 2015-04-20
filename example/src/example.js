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
				<h3>Day Select</h3>
				<p>Pick a single date</p>
				<DateSelect value={this.state.singleDateValue} onChange={this.onDateChange.bind(this, 'singleDateValue')} />
				
				<h3>Multi Select</h3>
				<p>Pick a start and end date</p>
				<DateSelect value={this.state.multiDateValue1} onChange={this.onDateChange.bind(this, 'multiDateValue1')} isMulti buttonLabel="Launch range picker" />
				
				<h3>Multi Select with Ranges</h3>
				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<DateSelect value={this.state.multiDateValue2} onChange={this.onDateChange.bind(this, 'multiDateValue2')} isMulti showPredefinedRanges buttonLabel="Launch range picker (with default ranges)" />
			</div>
		);
	}
});

React.render(
	<DateSelectExamples />,
	document.getElementById('example')
);
