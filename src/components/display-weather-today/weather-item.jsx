// imrc cc
// imr fc
import React from "react";

function WeatherItem({ title, description, weatherMeme, symbol }) {
  return (
    <div className="item">
      <p>
        <span>{title ? title : "No title?"} </span>
        <span>{description ? description : "No details"} </span>
        <span>{symbol ? symbol : ""}</span>
      </p>
      {weatherMeme ? (
        <div className="ui small image">
          <img
            alt={description ? description : "No details"}
            src={weatherMeme}
          />
        </div>
      ) : null}
    </div>
  );
}

export default WeatherItem;
