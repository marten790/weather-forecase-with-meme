// imrc cc
import React from "react";
import { getUserWeather } from "../../actions";
import { connect } from "react-redux";

import DisplayWeatherContainer from "./display-weather-container";

class DisplayWeatherToday extends React.Component {
  componentDidMount() {
    this.props.getUserWeather();
  }

  render() {
    const getWeatherResults = Object.keys(this.props.userWeather).length === 0;
    const errorMessage = <div>
    Please allow the brower to check your location if you would like to see
    weather information
  </div>;

    return getWeatherResults ? errorMessage : <DisplayWeatherContainer userWeather={this.props.userWeather} />;
  }
}

const mapStateToProps = (state) => {
  return { userWeather: state.userWeather };
};

export default connect(mapStateToProps, { getUserWeather })(
  DisplayWeatherToday
);
