import React, { Component } from "react";
import AppContainer from "./container/AppContainer";
import Map from "./components/Map";
import store from "./redux/store";
import { Provider } from "react-redux";
import PlaceType from "./components/PlaceType";
import List from "./container/ListContainer";

import { GoogleApiWrapper } from "google-maps-react";

class App extends Component {
  state = {
    list: []
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <PlaceType
            selectedPlace={type => {
              this.setState({ selectedPlace: type });
            }}
          />
          <Map
            centerAroundCurrentLocation
            google={this.props.google}
            selectedPlace={this.state.selectedPlace}
            setLocations={list => this.setState({ list })}
          />
          <List list={this.state.list} />
        </AppContainer>
      </Provider>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCdWkEeqRMNnTrlSmKnCo1WFY7xo6-nKw8"
})(App);
