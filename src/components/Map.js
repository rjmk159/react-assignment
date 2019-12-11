import React, { Component } from "react";
import { InfoWindow, Marker } from "google-maps-react";
import MapContainer from "../container/MapContainer";
import InfoComponent from "../components/InfoComponent";
import pin from "../assets/images/pin.png";

export class Map extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    list: []
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  setLocation = list => {
    this.setState({ list: list });
    this.props.setLocations(list);
  };
  render() {
    return (
      <MapContainer
        centerAroundCurrentLocation={this.props.centerAroundCurrentLocation}
        google={this.props.google}
        setLocations={list => {
          this.setLocation(list);
        }}
        selectedPlace={this.props.selectedPlace}
      >
        {this.state.list && this.state.list.length > 0
          ? this.state.list.map((item, index) => {
              return (
                <Marker
                  key={index}
                  icon={pin}
                  position={{
                    lat: item.geometry.location.lat(),
                    lng: item.geometry.location.lng()
                  }}
                  onClick={this.onMarkerClick}
                  name={item.name}
                />
              );
            })
          : ""}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <InfoComponent
            details={this.state.selectedPlace}
            list={this.state.list}
          />
        </InfoWindow>
      </MapContainer>
    );
  }
}

export default Map;
