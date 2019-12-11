import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MapContainerStyle } from "../assets/styles/Map.style";
import { strings } from '../utils/strings';
import { connect } from "react-redux";

const mapStyles = {
  map: {
    width: "100%",
    height: "100vh"
  }
};

class Map extends Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const { currentLocation } = this.state;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let { zoom } = this.props;
      const { lat, lng } = currentLocation;
      const center = new maps.LatLng(lat, lng);
      this.setState({ center });
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
    }
  }
  recenterMap() {
    const map = this.map;
    const { currentLocation } = this.state;
    const current = currentLocation;
    const google = this.props.google;
    const maps = google.maps;
    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }
  renderChildren() {
    const { children } = this.props;
    const { currentLocation } = this.state;
    if (!children) return;
    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: currentLocation
      });
    });
  }
  setNearByLocation = () => {
    this.loadMap();
    this.props.setLocations([]);
    let {currentLocation} = this.state;
    console.log(this.props.selectedPlace)
    let request = {
      location: currentLocation,
      types: this.props.selectedPlace || ["ATM"],
      radius: 5000
    };
    if (this.props && this.props.google) {
      const { google } = this.props;
      let service = new google.maps.places.PlacesService(this.map);
      service.nearbySearch(request, this.callback);
    }
  };
  callback = (request, status) => {
   
    this.props.setLocations(request);
  };
  render() {
    const style = Object.assign({}, mapStyles.map);
    return (
      <MapContainerStyle>
        <div style={style} ref="map">
          <div className="map-loader">
              Loading map...
          </div>

        </div>
        {this.renderChildren()}
        <div className="search-container">
          <button onClick={this.setNearByLocation}>{strings.SearchCtaText}</button>
        </div>
      </MapContainerStyle>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, { })(Map);

Map.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 19.1700576,
    lng: 72.8602116
  },
  centerAroundCurrentLocation: false,
  visible: true
};
