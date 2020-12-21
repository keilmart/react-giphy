import React, { Component } from "react";
import Header from "./components/Header.js";
import Results from "./components/Results.js";
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
