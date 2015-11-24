import React, { Component, PropTypes } from 'react';
import styles from '../less/main.less';

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
		return (
			<a href="#" onClick={this._handleClick} onMouseOver={this._handleMouseEnter} onMouseOut={this._handleMouseLeave}>
			<div style={ elValue <= value ?
				{ display:"inline-block", height: "30px", width: "30px", marginBottom: "5px", borderStyle: "solid", borderWidth: "1px", borderColor: "black", backgroundColor: highlightColor } :
				{ display:"inline-block", height: "30px", width: "30px", marginBottom: "5px", borderStyle: "solid", borderWidth: "1px", borderColor: "black", backgroundColor: "#ffffff" }}>
			</div>
			</a>
		);
	}
}
