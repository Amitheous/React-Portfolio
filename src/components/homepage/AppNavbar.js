import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem
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
			<Navbar dark className="navbar fixed-top" expand="md">
				<NavbarBrand className="navbarBrand text-uppercase">
					Amitheous
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} className='mr-3' />
				<Collapse
					isOpen={this.state.collapse}
					className="text-uppercase"
					navbar
				>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link
								to="topBox"
								duration={1400}
								spy
								smooth
								onClick={this.state.collapse ? this.toggle : null}
							>
								<p className="pr-4 navItem float-right">Home</p>
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="projects"
								duration={1400}
								spy
								smooth
								onClick={this.state.collapse ? this.toggle : null}
							>
								<p className="pr-4 navItem float-right">Projects</p>
							</Link>
						</NavItem>
						<NavItem>
							<Link
								to="contact"
								duration={1400}
								spy
								smooth
								onClick={this.state.collapse ? this.toggle : null}
							>
								<p className="pr-4 navItem float-right">Contact</p>
							</Link>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
