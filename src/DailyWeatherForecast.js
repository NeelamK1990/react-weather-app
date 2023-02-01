import React, { useState } from "react";

import "./DailyWeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
export default function DailyWeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handelResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="DailyWeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=matric`;

    axios.get(apiUrl).then(handelResponse);

    return null;
  }
}
