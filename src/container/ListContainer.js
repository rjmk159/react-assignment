import React, { Component } from "react";
import { ListContainerStyle } from "../assets/styles/List.style";
import List from "../components/List";

class ListContainer extends Component {
  render() {
    return (
      <ListContainerStyle>
        {this.props.list && this.props.list.length
          ? this.props.list.map((item, index) => {
              var isOpen = item.opening_hours && item.opening_hours.open_now;
              return (
                <div key = {item.id}>
                  <List
                    _key={Math.random() + new Date()}
                    isOpen={isOpen}
                    details={item}
                  />
                </div>
              );
            })
          : ""}
      </ListContainerStyle>
    );
  }
}
export default ListContainer;
