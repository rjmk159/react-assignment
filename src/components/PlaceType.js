import React, { Component } from "react";
import { connect } from "react-redux";
import Helper from "../utils/Helper";
import { strings } from "../utils/strings"

class PlaceType extends Component {
  state = {
    types: [
      "accounting",
      "airport",
      "amusement_park",
      "aquarium",
      "art_gallery",
      "atm",
      "bakery",
      "bank",
      "bar",
      "beauty_salon",
      "bicycle_store",
      "book_store",
      "bowling_alley",
      "bus_station",
      "cafe",
      "campground",
      "car_dealer",
      "car_rental",
      "car_repair",
      "car_wash",
      "casino",
      "cemetery",
      "church",
      "city_hall",
      "clothing_store",
      "convenience_store",
      "courthouse",
      "dentist",
      "department_store",
      "doctor",
      "electrician",
      "electronics_store",
      "embassy",
      "fire_station",
      "florist",
      "funeral_home",
      "furniture_store",
      "gas_station",
      "gym",
      "hair_care",
      "hardware_store",
      "hindu_temple",
      "home_goods_store",
      "hospital",
      "insurance_agency",
      "jewelry_store",
      "laundry",
      "lawyer",
      "library",
      "liquor_store",
      "local_government_office",
      "locksmith",
      "lodging",
      "mel_delivery",
      "meal_takeaway",
      "mosque",
      "movie_rental",
      "movie_theater",
      "moving_company",
      "museum",
      "night_club",
      "painter",
      "park",
      "parking",
      "pet_store",
      "pharmacy",
      "physiotherapist",
      "plumber",
      "police",
      "post_office",
      "real_estate_agency",
      "restaurant",
      "roofing_contractor",
      "rv_park",
      "school",
      "shoe_store",
      "shopping_mall",
      "spa",
      "stadium",
      "storage",
      "store",
      "subway_station",
      "synagogue",
      "taxi_stand",
      "train_station",
      "transit_station",
      "travel_agency",
      "university",
      "veterinary_care",
      "zoo"
    ],
    initialTypes: [
      "accounting",
      "airport",
      "amusement_park",
      "aquarium",
      "art_gallery",
      "atm",
      "bakery",
      "bank",
      "bar",
      "beauty_salon",
      "bicycle_store",
      "book_store",
      "bowling_alley",
      "bus_station",
      "cafe",
      "campground",
      "car_dealer",
      "car_rental",
      "car_repair",
      "car_wash",
      "casino",
      "cemetery",
      "church",
      "city_hall",
      "clothing_store",
      "convenience_store",
      "courthouse",
      "dentist",
      "department_store",
      "doctor",
      "electrician",
      "electronics_store",
      "embassy",
      "fire_station",
      "florist",
      "funeral_home",
      "furniture_store",
      "gas_station",
      "gym",
      "hair_care",
      "hardware_store",
      "hindu_temple",
      "home_goods_store",
      "hospital",
      "insurance_agency",
      "jewelry_store",
      "laundry",
      "lawyer",
      "library",
      "liquor_store",
      "local_government_office",
      "locksmith",
      "lodging",
      "mel_delivery",
      "meal_takeaway",
      "mosque",
      "movie_rental",
      "movie_theater",
      "moving_company",
      "museum",
      "night_club",
      "painter",
      "park",
      "parking",
      "pet_store",
      "pharmacy",
      "physiotherapist",
      "plumber",
      "police",
      "post_office",
      "real_estate_agency",
      "restaurant",
      "roofing_contractor",
      "rv_park",
      "school",
      "shoe_store",
      "shopping_mall",
      "spa",
      "stadium",
      "storage",
      "store",
      "subway_station",
      "synagogue",
      "taxi_stand",
      "train_station",
      "transit_station",
      "travel_agency",
      "university",
      "veterinary_care",
      "zoo"
    ],
    selectedList: []
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.value;
    let _type = [];
    _type.push(name);
    this.setState(
      {
        selectedList: _type
      },
      () => {
        this.props.selectedPlace(_type);
      }
    );
  };

  handleFindString = e => {
    let _value = e.target.value;
    _value = _value.toLowerCase();
    this.setState({ value: _value });
    if (_value === "") {
      this.setState({ types: this.state.initialTypes });
      return;
    }
    const regex = new RegExp(_value);
    let newTypes = this.state.types.filter(element =>
      regex.test(element, _value)
    );
    this.setState({ types: newTypes });
  };
  render() {
    let { types } = this.state;
    return (
      <div className="types--container">
        <div className="types--searchbox">
          <input
            type="text"
            placeholder={strings.SearchPlaceHolder}
            onChange={e => this.handleFindString(e)}
          />
          <span>{strings.NearMe}</span>
        </div>
        {types.map((item, index) => {
          item = Helper.replaceDash(item);
          return (
            <label key={index}>
              <input
                type="radio"
                name="type"
                className="types"
                value={item}
                onChange={this.handleInputChange}
              />
              {Helper.capitalizeFirstLetter(item)}
            </label>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps, {})(PlaceType);
