import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardLink,
  Button
} from "reactstrap";
export default class Project extends Component {
  render() {
    return (
      <Card className="mx-auto projectCard border-dark">
        <CardImg top width="100%" src={this.props.img} />
        <CardBody className="d-flex flex-column">
          <div className="my-auto">
            <CardTitle className="text-center">
              <strong>{this.props.title}</strong>
            </CardTitle>
            <CardSubtitle className="mb-2 text-center">
              {this.props.subtitle}
            </CardSubtitle>
          </div>
          <div className="text-center mt-auto">
            <CardLink
              target="_blank"
              className="mr-3"
              href={this.props.pageLink}
            >
              <Button color="dark">Visit Page</Button>
            </CardLink>
            <CardLink
              target="_blank"
              className="ml-3"
              href={this.props.codeLink}
            >
              <Button color="dark">Original Code</Button>
            </CardLink>
          </div>
        </CardBody>
      </Card>
    );
  }
}
