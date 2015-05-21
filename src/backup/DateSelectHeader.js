var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'DateSelectHeader',
	propTypes: {
		expanded: React.PropTypes.bool,
		date: React.PropTypes.object
	},
	render() {
		// helpers
		var date = moment(this.props.date);

		// classes
		var componentClass = classNames('DateSelectHeader', {
			'DateSelectHeader--expanded': this.props.expanded,
			'DateSelectHeader--condensed': !this.props.expanded,
			'no-date': !this.props.date
		});
		
		// elements
		var header = this.props.expanded ? (<div className={componentClass}>
				<span className="DateSelectHeader__dow">{date.format('dddd')}</span>
				<span className="DateSelectHeader__month">{date.format('MMMM')}</span>
				<span className="DateSelectHeader__day">{date.format('D')}</span>
				<span className="DateSelectHeader__year">{date.format('YYYY')}</span>
			</div>) : ( <div className={componentClass}>
				<span className="DateSelectHeader__dow">{date.format('dddd')}</span>
				<span className="DateSelectHeader__day">{date.format('Do')}</span>
				<span className="DateSelectHeader__month">{date.format('MMMM')}</span>
				<span className="DateSelectHeader__year">{date.format('YYYY')}</span>
			</div>);

		if (this.props.date) {
			header = this.props.expanded ? (<div className={componentClass}>
				<span className="DateSelectHeader__dow">{date.format('dddd')}</span>
				<span className="DateSelectHeader__month">{date.format('MMMM')}</span>
				<span className="DateSelectHeader__day">{date.format('D')}</span>
				<span className="DateSelectHeader__year">{date.format('YYYY')}</span>
			</div>) : ( <div className={componentClass}>
				<span className="DateSelectHeader__dow">{date.format('dddd')}</span>
				<span className="DateSelectHeader__day">{date.format('Do')}</span>
				<span className="DateSelectHeader__month">{date.format('MMMM')}</span>
				<span className="DateSelectHeader__year">{date.format('YYYY')}</span>
			</div>);
		}
		
		return header;
	}
});
