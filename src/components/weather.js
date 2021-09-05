import React, { useState, useEffect } from "react";
import axios from "axios";

import keys from "../config";
const Weather = () => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/";

  const [userInput, setUserInput] = useState("leipzig");
  const [weatherData, setWeatherData] = useState({});
  const getWeather = (endpoint) => {
    axios
      .get(`${baseUrl}weather?q=${endpoint}&units=metric&appid=${keys.apiKey}`)
      .then((weather) => setWeatherData(weather.data))

      .catch((err) => console.log("Please type an existing city name"));
  };

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(userInput);
  };

  //find the direction

  /*  
          const windDir = weatherData.wind.deg;
           const windD = [
        { direction: "N", start: 310, end: 360 },
        { direction: "N", start: 1, end: 50 },
        { direction: "W", start: 230, end: 309 },
        { direction: "S", start: 130, end: 229 },
        { direction: "E", start: 49, end: 129 },
      ];
        
       
      const findDirection = windD.find(
        (dir) => dir.start <= windDir && dir.end >= windDir
      );
      */

  useEffect(() => {
    getWeather(userInput);
  }, []);

  // the time
  const year = new Date();
  const getFullYear = year.getFullYear();
  const getDayName = () => {
    return year.toLocaleDateString("en-US", { weekday: "long" });
  };
  const getTime = () => {
    return year.toLocaleDateString("en-US", { day: "numeric" });
  };
  const getMonthName = () => {
    return year.toLocaleDateString("en-US", { month: "long" });
  };

  return (
    <div className="app-wrap">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={changeHandle}
            placeholder="enter a city name"
          />
          <input type="submit" id="submit" value="Search" />
        </form>
      </header>
      {weatherData?.main && (
        <main>
          <section class="location">
            <div class="city">
              {" "}
              {weatherData.name}, {weatherData.sys.country}
            </div>
            <div class="date">
              {getDayName()} {getTime()} {getMonthName()} {getFullYear}
            </div>
          </section>
          <div class="current">
            <div class="temp">
              <span class="tempN" id="temp">
                {weatherData.main.temp.toFixed()}
              </span>
              <span>°</span>
            </div>
            <div class="feelsContainer">
              Feels like{" "}
              <span class="feels">
                {Math.floor(weatherData.main.feels_like)}
              </span>
              <span>°</span>
            </div>

            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              class="icon"
              alt=""
            />

            <div class="weather">{weatherData.weather[0].main}</div>
            <div class="hi-low">
              {weatherData.main.temp_min.toFixed()} /{" "}
              {weatherData.main.temp_max.toFixed()}
            </div>
            <div class="wind">
              <i class="fas fa-wind"></i>
              <div>
                Wind direction: <span class="windDeg">N</span>
              </div>
              <div>
                Speed:{" "}
                <span class="windSpeed">{weatherData.wind.speed}km/h</span>
              </div>
              <div>
                Max-gust:{" "}
                <span class="windGust">
                  {Math.floor(weatherData.wind.gust)}km/h
                </span>
              </div>
            </div>
            <div class="hum-img">
              <i class="fas fa-water"></i>

              <div class="humidity"> humidity:{weatherData.main.humidity}%</div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
export default Weather;
