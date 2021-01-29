import React, { Component } from "react";

import firebase from './Services/firebase.js'

import Homepage from "./components/Homepage.js";
import Results from "./components/Results.js";

import './App.css';

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})


class App extends Component {
  constructor(){
    super();
    this.state = {
      displayLandingPage: true,
      application: [],
      picture: [],
      comments: "",
      alt: ""
    }
  }

    displayResultsComponent = () => {
    this.setState({
      displayResults: true,
      displayHomepage: false,
    });
  }

  render() {
  return (
    <React.Fragment>
      <div className='App'>
        <Homepage/>
        <Results/>
      </div>
    </React.Fragment>
  );
  }
}

export default App;
