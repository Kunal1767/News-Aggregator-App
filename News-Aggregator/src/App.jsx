import React from "react";
import "./App.css";
import Weather from "./weather"; // Import the Weather component

function App() {
  return (
    <>
      <div>
        <h1>Weather App</h1>
        <Weather /> {/* Display the weather component */}
      </div>
    </>
  );
}

export default App;
