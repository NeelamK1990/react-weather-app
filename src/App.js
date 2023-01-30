import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Philadelphia" />
        <footer>
          This project is coded by Neelam Katwal and is{" "}
          <a
            className="text-decoration-none"
            href="https://github.com/NeelamK1990/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
