import React, { Component } from "react";
import { Wrapper, Container } from "../assets/styles/AppContainer.style";
import Header from "../components/Header";

class AppOverlay extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Header />
          {this.props.children}
        </Wrapper>
      </Container>
    );
  }
}

export default AppOverlay;
