import logo from "../sitelogo.svg";
import logo2 from "../siteicon.svg";

import "../App.css";
import React from "react";

const App = ({ mode, onToggle }) => {
  const siteIcon = mode === "light" ? logo : logo2;
  return (
    <div className="App">
      
      <img src={siteIcon} className="App-logo" alt="logo" />
      <h1>Light/Dark Mode</h1>
        <input type="checkbox" id="switch"/>
        <label  onClick={() => {
          onToggle(mode === "light" ? "dark" : "light");
        }} for="switch">
        Toggle {mode === "light" ? "dark" : "light"} mode
        </label>
    </div>
  );
};

export default App;