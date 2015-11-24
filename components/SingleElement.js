import React, { Component, PropTypes } from 'react';

export default class SingleElement extends Component {
	static propTypes = {
		value: PropTypes.number,
		elValue: PropTypes.number,
		highlightColor: PropTypes.string,
		mouseEnter: PropTypes.func,
		mouseLeave: PropTypes.func
	}

	_handleClick = (e) => { // ACTION TO STORE
		e.preventDefault();
	}

	_handleMouseEnter = () => {
		this.props.mouseEnter(this.props.elValue);
	}

	_handleMouseLeave = () => {
		this.props.mouseLeave();
	}

	render() {
		const { elValue, value, highlightColor } = this.props;
		const styles = {
			display:"inline-block", 
			height: "30px", width: "30px", 
			marginBottom: "5px", 
			borderStyle: "solid", 
			borderWidth: "1px", 
			borderColor: "black"
		};

		const highl = {
			backgroundColor: highlightColor
		};
		 
		const white = {
			backgroundColor: "#ffffff"
		};
		const highc = Object.assign({}, styles, highl);
		const whitec = Object.assign({}, styles, white);
		return (
			<a href="#" onClick={this._handleClick} onMouseOver={this._handleMouseEnter} onMouseOut={this._handleMouseLeave}>
			<div style={ elValue <= value ? highc : whitec}>
			</div>
			</a>
		);
	}
}
