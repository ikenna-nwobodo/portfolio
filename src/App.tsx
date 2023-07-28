import React from "react";
import "./App.css";
import Renders from "./Renders";
import vid from "./images/bg/bggrad.mp4";
function App() {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="main">
        <Renders />
      </div>
    </div>
  );
}

export default App;
