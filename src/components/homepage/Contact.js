import React, { Component } from "react";
import { Card, Form, FormGroup, Input, Button } from "reactstrap";

export default class Contact extends Component {
	render() {
		return (
			<div id="contact" className="pb-5">
				<header
					id="contactHeader"
					className="text-center pt-5 pb-3 text-uppercase small"
				>
					<h2>Contact Me</h2>
				</header>

				<Card
					className="py-4 col-10 col-md-6 col-lg-5 mx-auto border-primary"
					id="formCard"
				>
					<Form
						name="contact"
						method="POST"
						className="text-center py-3"
						netlify='true'
					>
						<FormGroup>
							<Input
								className="border-primary"
								name="name"
								type="text"
								placeholder="Name"
								id="name"
							/>
						</FormGroup>
						<FormGroup>
							<Input
								className="border-primary"
								name="email"
								type="email"
								placeholder="Enter Email"
								id="email"
							/>
						</FormGroup>
						<FormGroup>
							<Input
								className="border-primary"
								name="message"
								type="textarea"
								placeholder="Your Message"
								id="message"
							/>
						</FormGroup>
						<Button color="info" type="submit">
							Submit
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}
