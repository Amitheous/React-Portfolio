import React, { Component } from "react";
import { Row } from "reactstrap";
export default class TopBox extends Component {
  render() {
    return (
      <div
        className={
          navigator.userAgent.indexOf("Chrome") !== -1
            ? "topBoxChrome"
            : "topBoxOther"
        }
      >
        <div className="text-center topBoxContent">
          <h1>Matthew Kartchner</h1>
          <h4>Web Developer</h4>
          <hr />
          <h4 className="pt-4 pb-2">Get in touch</h4>
          <Row>
            <a
              href="https://github.com/Amitheous"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto topBoxLink"
            >
              <i className="fab fa-github-square fa-4x" />
            </a>
            <a
              href="https://linkedin.com/in/matthew-kartchner"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto topBoxLink"
            >
              <i className="fab fa-linkedin fa-4x" />
            </a>
            <a href="mailto:mkartch12@gmail.com" className="mx-auto topBoxLink">
              <i className="fas fa-envelope-square fa-4x" />
            </a>
          </Row>
        </div>
      </div>
    );
  }
}
