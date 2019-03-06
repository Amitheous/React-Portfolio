import React, { Component } from "react";

import Project from "./Project";

import { Container, Row } from "reactstrap";
import devconnector from "../../img/homepage/devconnector.png";
import vueweather from "../../img/homepage/vueweather.png";
import vuetranslator from "../../img/homepage/vuetranslator.png";
import split from "../../img/homepage/split.png";
import finance from "../../img/homepage/finance.png";
import techtimeless from "../../img/homepage/techtimeless.png";

import devconnectorChrome from "../../img/homepage/devconnector.webp";
import vueweatherChrome from "../../img/homepage/vueweather.webp";
import vuetranslatorChrome from "../../img/homepage/vuetranslator.webp";
import splitChrome from "../../img/homepage/split.webp";
import financeChrome from "../../img/homepage/finance.webp";
import techtimelessChrome from "../../img/homepage/techtimeless.webp";

export default class Projects extends Component {
	render() {
		return (
			<div id="projects" className="projects pb-5">
				<header className="text-center pt-5 mb-1 pb-3 text-uppercase small">
						<h2>My Projects</h2>		
				</header>
				<Container fluid className="projectBox">
					<Row className="projectRow mx-0 px-0">
						<Project
							title="DevConnector"
							subtitle="A full-stack social media application for developers to communicate with each other, built on the MERN stack"
							pageLink="https://pure-gorge-99503.herokuapp.com/"
							codeLink="https://github.com/Amitheous/devconnector"
							img={
								navigator.userAgent.indexOf("Chrome") !== -1
									? devconnectorChrome
									: devconnector
							}
						/>
						<Project
							title="Vue Weather"
							subtitle="A weather application built using the Vue CDN and the Openweather API"
							pageLink="https://vue-weather-app.netlify.com"
							codeLink="https://github.com/Amitheous/vueWeather"
							img={
								navigator.userAgent.indexOf("Chrome") !== -1
									? vueweatherChrome
									: vueweather
							}
						/>
						<Project
							title="Split Landing"
							subtitle="A simple landing page split in two"
							pageLink="https://split-landing.netlify.com"
							codeLink="https://github.com/Amitheous/Split-Landing"
							img={
								navigator.userAgent.indexOf("Chrome") !== -1
									? splitChrome
									: split
							}
						/>
					</Row>
					<Row className="projectRow mx-0 px-0">
						<Project
							title="Vue Translator"
							subtitle="A single word translation application built using the Vue CLI and the Yandex Translate API"
							pageLink="https://vue-translator-app.netlify.com"
							codeLink="https://github.com/Amitheous/vue-translator"
							img={
								navigator.userAgent.indexOf("Chrome") !== -1
									? vuetranslatorChrome
									: vuetranslator
							}
						/>
						<Project
							title="Loan Calculators"
							subtitle="Tools for calculating the cost of a basic loan or an auto loan"
							pageLink="https://techtimeless.com/pages/finance"
							codeLink="https://github.com/Amitheous/PortfolioProject/tree/master/pages"
							img={
								navigator.userAgent.indexOf("Chrome") !== -1
									? financeChrome
									: finance
							}
						/>
						<Project
							title="Original Porfolio"
							subtitle="This was the portfolio I originally built!"
							pageLink="https://techtimeless.ciom"
							codeLink="https://github.com/Amitheous/PortfolioProject"
							img={
								navigator.userAgent.indexOf("Chrome") !== -1
									? techtimelessChrome
									: techtimeless
							}
						/>
					</Row>
				</Container>
			</div>
		);
	}
}
