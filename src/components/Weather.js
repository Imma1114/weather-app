import React, { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const API_KEY = "4b6f2d633a3760fe2d80c3e839279d22"; 

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found");
        setWeatherData(null);
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching weather");
    }
  };

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  return (
    <div className="weather-container">
      <h1>⛅Weather App</h1>
      < SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default Weather;