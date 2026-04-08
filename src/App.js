import React from "react";
import Weather from "./components/Weather";
import "./App.css";

// Import cloud images
import cloud1 from "./assets/cloud1.png";
import cloud2 from "./assets/cloud2.png";
import cloud3 from "./assets/cloud3.png";
import cloud4 from "./assets/cloud4.png";
import cloud5 from "./assets/cloud5.png";

function App() {
  return (
    <div className="app">
      {/* Floating clouds */}
      <img src={cloud1} className="cloud cloud1" alt="cloud1" />
      <img src={cloud2} className="cloud cloud2" alt="cloud2" />
      <img src={cloud3} className="cloud cloud3" alt="cloud3" />
      <img src={cloud4} className="cloud cloud4" alt="cloud4" />
      <img src={cloud5} className="cloud cloud5" alt="cloud5" />

      {/* Weather App */}
      <Weather />
    </div>
  );
}

export default App;