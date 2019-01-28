import React, { Component } from "react";
import AppNavbar from "./AppNavbar";
import Contact from "./Contact";
import Projects from "./Projects";
import TopBox from "./TopBox";

import "../../css/Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <TopBox />
        <Projects />
        <Contact />
      </div>
    );
  }
}
