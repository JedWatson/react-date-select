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
			
		};
	},
	render() {
		return (
			<div>
				<h3>Day Select</h3>
				<p>Pick a single date</p>
				<DateSelect isOpen={this.state.dateSelectIsOpen} onChange={this.toggleDateSelect} />
				
				<h3>Multi Select</h3>
				<p>Pick a start and end date</p>
				<DateSelect isOpen={this.state.multiSelectIsOpen} onChange={this.toggleMultiSelect} isMulti buttonLabel="Launch range picker" />
				
				<h3>Multi Select with Ranges</h3>
				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<DateSelect isOpen={this.state.rangeSelectIsOpen} onChange={this.toggleRangeSelect} isMulti showPredefinedRanges buttonLabel="Launch range picker (with default ranges)" />
			</div>
		);
	}
});

React.render(
	<DateSelectExamples />,
	document.getElementById('example')
);
