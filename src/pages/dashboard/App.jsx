import React from "react";
import { connect } from "react-redux";
import DisplayLocation from "../../components/display-location";
import DisplayWeatherToday from "../../components/display-weather-today";
import { getUserLocation } from "../../actions";

class APP extends React.Component {
  componentDidMount() {
    this.props.getUserLocation();
  }

  render() {
    // console.log("userLocation", userLocation);
    console.log("this.props.userLocation", this.props.userLocation);
    return (
      <div className="ui container">
        {this.props.userLocation.length ? <DisplayWeatherToday /> : <div>Loading...</div>}
        {this.props.userLocation.length ? <DisplayLocation location={this.props.userLocation[0]} /> : <div>Loading...</div>}
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userLocation: state.userLocation };
};

export default connect(mapStateToProps, { getUserLocation })(APP);

// imrc cc
// imr fc
