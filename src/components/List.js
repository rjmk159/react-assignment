import React, { Component } from "react";
import noImage from "../assets/images/no_preview.jpg";

class List extends Component {
  render() {
    let { details, isOpen, _key } = this.props;
    let image =
      details.photos && details.photos.length
        ? details.photos[0].getUrl()
        : noImage;
    return (
      <div key={_key} className="nearest-list--container">
        <div
          className="nearest-list--image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="nearest-list--details">
          <h4>{details.name}</h4>
          <span className="nearest-list--address">{details.vicinity}</span>
          <span className={`nearest-list--time ${isOpen ? "open" : "closed"}`}>
            {isOpen ? "Open" : "Closed"}
          </span>
          <span className={`nearest-list--type-icon`}>
            <img src={details.icon} alt="icon"/>
          </span>
        </div>
      </div>
    );
  }
}
export default List;
