import React from "react";
import imageOne from "../../image/410-4108569_get-it-on-google-play-logo-png-vector-removebg-preview.png";
import displayApp from "../../image/app-removebg-preview.png";

import "./App.css";
const App = () => {
  return (
    <div className="my-5">
      <h1 className="text-center">Go mobile with our iOS and Android app.</h1>
      <h6 className="text-center">
        Stay connected and get real-time updates, no matter where you are.
      </h6>
      <div>
        <img className="appImage" src={imageOne} alt="" />
      </div>
      <div>
        <img className="img-fluid" src={displayApp} alt="" />
      </div>
    </div>
  );
};

export default App;
