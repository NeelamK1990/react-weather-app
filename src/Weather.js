import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  let [ready, setReady] = useState(false);
  let [temperature, setTemperature] = useState(null);
  function handelResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                tupe="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Philadelphia</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix d-flex ">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Mostly Cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Preciptation: 1%</li>
              <li>Humidity: 49%</li>
              <li>Wind: 35km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "cf1ef184bc4f8c6749a14597b0b5efe6";
    let city = "Philadelphia";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handelResponse);

    return "Loading..";
  }
}
