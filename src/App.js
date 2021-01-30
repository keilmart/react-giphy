import React, { Component } from "react";
import firebase from './Services/firebase.js'
import Loader from 'react-loader-spinner'
// import { scroller } from "react-scroll";
import Homepage from "./components/Homepage.js";
import Results from "./components/Results.js";

import './App.css';

firebase.firestore().collection('times').add({
  title: 'Rubiks Cube',
  time_seconds: 45
})


class App extends Component {
    constructor() {
        super();
        this.state = {
            displayHomepage: true,
            displayResults: false,
            loading: false,
        };
    }

    displayResultsComponent = () => {
        this.setState({
            displayHomepage: false,
            displayResults: true,
            loading: false,
        });
    }

  render() {
        if (this.state.loading) {
      return (
        <div class="loadScreen">
          <Loader
            type="MutatingDots"
            color="#4f7cff"
            secondaryColor="#f35163"
            height={100}
            width={100}
          />
        </div>
      );
    }
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
