import * as React from 'react';
const moment = require('moment');

module.exports = React.createClass({
	handleMouseDown (event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},
	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event);
	},
	handleMouseMove (event) {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, event);
	},
	render () {
		return (
			<div
			className={this.props.className}
			onMouseDown={this.handleMouseDown}
			onMouseEnter={this.handleMouseEnter}
			onMouseMove={this.handleMouseMove}
			title={this.props.option.title}>
				<h4><strong>{this.props.option.term.get('name')}</strong></h4>
				{`${moment.utc(this.props.option.term.get('start_date')).format('ddd, MMM Do, YYYY')} - ${moment(this.props.option.term.get('end_date')).format('ddd, MMM Do, YYYY')}`}
			</div>
		);
	}
})
