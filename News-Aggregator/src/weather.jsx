import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherClockCalendar = () => {
  const [location, setLocation] = useState("London"); // Default location
  const [weather, setWeather] = useState(null);
  const [utcTime, setUtcTime] = useState(new Date()); // Time based on UTC
  const [timezoneOffset, setTimezoneOffset] = useState(0); // Timezone offset in seconds

  const API_KEY = "477eefdf74c08cef7dfb75e30c79ff6e"; // Replace with your OpenWeatherMap API key

  // Fetch weather and timezone info
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);

      if (response.data.timezone) {
        setTimezoneOffset(response.data.timezone);
      }
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  // Update UTC time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(new Date()); // Always get the latest UTC time
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert UTC time to selected location time
  const adjustedTime = new Date(utcTime.getTime() + timezoneOffset * 1000);

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Enter State or Country"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {/* Clock */}
      <h1>{adjustedTime.toLocaleTimeString()}</h1>

      {/* Calendar */}
      <h2>{adjustedTime.toDateString()}</h2>

      {/* Weather Info */}
      {weather ? (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherClockCalendar;
