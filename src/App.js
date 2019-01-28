import React, { Component } from "react";

import { Container } from "reactstrap";
import Homepage from "./components/homepage/Homepage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container fluid className="App px-0">
        <Homepage />
      </Container>
    );
  }
}

export default App;
