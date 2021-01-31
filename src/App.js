import React, { Component } from "react";
import firebase from './Services/firebase.js'
import Loader from 'react-loader-spinner'
import SearchBar from './components/SearchBar';
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
            giphys: [],
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
            timeout={1500} //3 secs
          />
        </div>
      );
    }
  return (
    <React.Fragment>
      <header>
        <div className="wrapper">
            {/* <div className="logoContainer">
            <img src={logo} alt="" onClick={this.displayHomepage}></img>
          </div> */}
          <h1>logo</h1>
        <div className="changeThis">
          <button className="findYourGighy" onClick={this.displayResultsComponent}>Find your Giphy's!</button>
        </div>
        </div>
        </header >
          <main className="wrapper">
            {/* <button className="findYourGighy" onClick={this.displayResultsComponent}>Find your Giphy's!</button> */}
            {this.state.displayHomepage ? <Homepage goToResultsProps={this.displayHomepage} /> : null}
            {this.state.displayResults ? <Results resultsProps={this.state.displayResults} /> : null}
          </main>
        {/* {this.state.displayHomepage ? null : <Footer />} */}
      </React.Fragment>
    );
  }
}

export default App;
