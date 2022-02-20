import React from "react";
import WeatherItem from "./weather-item";

function DisplayWeatherContainer({ userWeather }) {
  return (
<div className="ui two column centered grid">
  <div className="column">  
    <h1 className="ui header">Your weather</h1>
  </div>
  <div className="four column centered row">
    <div className="column">
      <p>Location: {userWeather.name}</p>
      <p>Country: {userWeather.sys.country}</p>
    </div>
    <div className="column">
      <WeatherItem
        title={"Description:(Weather condition) "}
        description={userWeather.weather[0].description}
        weatherMeme={userWeather.weather[0].descriptionMeme}
        />
    </div>
  </div>
  <div className="four column centered row">
    <div className="column">
      <WeatherItem
        title={"Main:(Rain, Snow, Extreme etc.) "}
        description={userWeather.weather[0].main}
      />
    </div>
    <div className="column">
      <WeatherItem
        title={"Temp: "}
        description={userWeather.main.temp}
        symbol="&#8451;"
      />
    </div>
  </div>
  <div className="four column centered row">
    <div className="column">
      <WeatherItem
        title={"Feels like: "}
        description={userWeather.main.feels_like}
        symbol="&#8451;"
      />
    </div>
    <div className="column">
      <WeatherItem
        title={"Temp max: "}
        description={userWeather.main.temp_max}
        symbol="&#8451;"
      />
    </div>
  </div>
  <div className="four column centered row">
    <div className="column">
      <WeatherItem
        title={"Temp min: "}
        description={userWeather.main.temp_min}
        symbol="&#8451;"
      />
    </div>
    <div className="column">

      <WeatherItem
        title={"Humidity: "}
        description={userWeather.main.humidity}
        symbol="%"
      />
    </div>
  </div>
  <div className="four column centered row">
    <div className="column">
      <WeatherItem
        title={"Pressure: "}
        description={userWeather.main.pressure}
        symbol="hPa"
      />
   
    </div>
    <div className="column">
      <WeatherItem
        title={"Ground level: "}
        description={userWeather.main.grnd_level}
        symbol="hPa"
      />
      {/* <WeatherItem
        title={"Sea level: "}
        description={userWeather.main.sea_level}
        symbol="hPa"
      /> */}
    </div>
  </div>
  <div className="ui vertical divider">
  </div>
</div>
  );
}

export default DisplayWeatherContainer;
// imrc cc
// imr fc
