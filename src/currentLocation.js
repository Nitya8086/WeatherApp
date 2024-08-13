import React from "react";
import Weather from "./Weather";

function CurrentLocation() {
  return (
    <React.Fragment>
      <div className="weather-box">
        <Weather />
      </div>
    </React.Fragment>
  );
}

export default CurrentLocation;
