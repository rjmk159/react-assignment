import React, { Component } from "react";
import { HeaderContainer } from "../assets/styles/Header.style";
import { strings } from "../utils/strings";
import logo from "../assets/images/browserstack.svg";

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <img src={logo} alt="logo"/>
        {strings.HeaderText}
      </HeaderContainer>
    );
  }
}
export default Header;
