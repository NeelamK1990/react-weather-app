import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Philadelphia" />
        <footer>
          This project is coded by{" "}
          <a
            className="text-decoration-none"
            href="/"
            target="_blank"
            rel="noreferrer"
          >
            Neelam Katwal
          </a>{" "}
          and is{" "}
          <a
            className="text-decoration-none"
            href="https://github.com/NeelamK1990/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            className="text-decoration-none"
            href="https://nee-react-weather-app.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
