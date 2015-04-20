/*
Note: ESLint is currently misreporting unused / undeclared variables for JSX.
These errors can be ignored until the bug has been fixed.
 */

var React = require('react'),
	DateSelect = require('react-date-select');

React.render(
	<div>
		Date Select:
		<DateSelect />
	</div>,
	document.getElementById('example')
);
