var React = require('react');

var DateSelectDialog = require('./DateSelectDialog');

var DateSelect = React.createClass({
	getDefaultProps () {
		return {
			buttonLabel: 'Launch Date Select'
		};
	},
	getInitialState () {
		return {
			isOpen: false
		};
	},
	openDateSelect () {
		this.setState({ isOpen: true });
	},
	closeDateSelect () {
		this.setState({ isOpen: false });
	},
	renderDateSelect () {
		return this.state.isOpen ? <DateSelectDialog {...this.props} /> : null;
	},
	render () {
		return (
			<div>
				<button onClick={this.openDateSelect} type="button" className="btn btn-default">{this.props.buttonLabel}</button>
				{this.renderDateSelect()}
			</div>
		);
	}
});

module.exports = DateSelect;
