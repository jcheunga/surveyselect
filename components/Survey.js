import React, { Component, PropTypes } from 'react';
import SingleElement from './SingleElement';

const ratings = ["Not Rated", "Strongly Disagree", "Disagree", "Neither", "Agree", "Strongly Agree"];
const styles = [
	{	highlightColor: "#ffdd33", elValue: 1 },
	{ highlightColor: "#ffbb26", elValue: 2 }, 
	{ highlightColor: "#ff991a", elValue: 3 }, 
	{ highlightColor: "#ff770d", elValue: 4 },
	{ highlightColor: "#ff5500", elValue: 5 }
	];

export default class Survey extends Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			legend: 'Not Rated'
		}
	}

	_handleMouseIn = (id) => {
		this.setState({value: id, legend: ratings[id]});
	}

	_handleMouseOut = () => {
		this.setState({value: 0, legend: 'Not Rated'})
	}

	render() {
		let singleElementGrid = [];
		for (let key in styles) {
			if (styles.hasOwnProperty(key)) {
				let obj = styles[key];
				singleElementGrid.push(
					<SingleElement key={obj.elValue} value={this.state.value} elValue={obj.elValue} highlightColor={obj.highlightColor} mouseEnter={this._handleMouseIn} mouseLeave={this._handleMouseOut}/>
				);
			}
		}
		return (
			<div>		
			<div><h5>{this.state.legend}</h5></div>
			<div>
			{singleElementGrid}
			</div>			
			</div>
		);
	}
}
