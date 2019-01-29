import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

import { Link } from "react-scroll";
export default class AppNavbar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	toggle() {
		this.setState({ collapse: !this.state.collapse });
	}
	render() {
		return (
			<Navbar className="navbar fixed-top" expand="md">
				<NavbarBrand className="navbarBrand text-uppercase pl-5 ml-5">
					Amitheous
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle}>
					<span className="navbarToggler navbar-toggler-icon">Menu</span>
				</NavbarToggler>
				<Collapse
					isOpen={this.state.collapse}
					className="text-uppercase"
					navbar
				>
					<Nav className="ml-auto mr-5 pr-5" navbar>
						<NavItem>
							<Link to="topBox" duration={1400} spy smooth>
								<NavLink className="px-4 navLink">Home</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link to="projects" duration={1400} spy smooth>
								<NavLink className="px-4 navLink">Projects</NavLink>
							</Link>
						</NavItem>
						<NavItem>
							<Link to="contact" duration={1400} spy smooth>
								<NavLink className="px-4 navLink">Contact</NavLink>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
