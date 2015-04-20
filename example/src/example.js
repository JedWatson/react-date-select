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
			dateSelectIsOpen: false,
			multiSelectIsOpen: false,
			rangeSelectIsOpen: false
		};
	},
	toggleDateSelect() {
		this.setState({ dateSelectIsOpen: !this.state.dateSelectIsOpen });
	},
	toggleMultiSelect() {
		this.setState({ multiSelectIsOpen: !this.state.multiSelectIsOpen });
	},
	toggleRangeSelect() {
		this.setState({ rangeSelectIsOpen: !this.state.rangeSelectIsOpen });
	},
	render() {
		return (
			<div>
				<h3>Day Select</h3>
				<p>Pick a single date</p>
				<button onClick={this.toggleDateSelect} type="button" className="btn btn-default">Launch Date Select</button>
				
				<h3>Multi Select</h3>
				<p>Pick a start and end date</p>
				<button onClick={this.toggleMultiSelect} type="button" className="btn btn-default">Launch Multi Select</button>
				
				<h3>Multi Select with Ranges</h3>
				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<button onClick={this.toggleRangeSelect} type="button" className="btn btn-default">Launch Range Select</button>
				
				<DateSelect isOpen={this.state.dateSelectIsOpen}  onChange={this.toggleDateSelect} />
				<DateSelect isOpen={this.state.multiSelectIsOpen} onChange={this.toggleMultiSelect} isMulti />
				<DateSelect isOpen={this.state.rangeSelectIsOpen} onChange={this.toggleRangeSelect} isMulti showPredefinedRanges />
			</div>
		);
	}
});

React.render(
	<DateSelectExamples />,
	document.getElementById('example')
);
