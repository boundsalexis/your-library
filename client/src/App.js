// import React, { Component } from "react";
import React from "react";

import Test from "./components/Test"

// import logo from "./logo.svg";
// import "./App.css";

import API from "./utils/API";

function App() {

  const response = API.getBookIds("HarryPotter")

  return (
    response
    // API.getBookInfo()
  );
}

// heyeyeye
export default App;
