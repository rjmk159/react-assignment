import React, { Component } from "react";
import { InfoContainerStyle } from "../assets/styles/InfoContainer.style";

class InfoComponent extends Component {
  render() {
    let { details } = this.props;
    return (
      <InfoContainerStyle key={details.id} className="infowindow--container">
        <div className="infowindow--details">
          <h4>{details.name}</h4>
          <span className="infowindow--address">{details.vicinity}</span>
        </div>
      </InfoContainerStyle>
    );
  }
}
export default InfoComponent;
