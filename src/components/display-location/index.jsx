import React from "react";

function DisplayLocation({ location }) {
  return (


<div className="ui two column centered grid">
  <div className="column">  
    {/* <h1 className="ui header">Your location</h1> */}
  </div>
  <div className="four column centered row">
    <div className="column">
      <p>Coordinates Lat: {location.latitude}</p>
    </div>
    <div className="column">
      <p>Coordinates Long: {location.longitude}</p>
    </div>
  </div>
</div>
  );
}

export default DisplayLocation;
