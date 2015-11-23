import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
			<div>
			<Navbar>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="/">Test select</a>
		      </Navbar.Brand>
		    </Navbar.Header>
		    <Nav>	    	    
		    </Nav>
		  </Navbar>
		  </div>
		);
	}
}
