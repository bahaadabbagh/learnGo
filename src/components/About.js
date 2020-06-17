import React, { Component } from "react";
import { MDBBox } from "mdbreact";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <h1 display="flex" flex="column">
          LearnGO
        </h1>
        <br />
        <MDBBox display="flex" flex="column">
          I am the LearnGO App
        </MDBBox>
        <br />
        <MDBBox display="flex" flex="column">
          What am I ? let see together
        </MDBBox>
      </React.Fragment>
    );
  }
}
