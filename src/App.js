import React, { Component } from "react";
import Loader from 'react-loader-spinner'
import Homepage from "./components/Homepage.js";
import Results from "./components/Results.js";

import './App.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            displayHomepage: true,
            displayResults: false,
            loading: false,
        };
    }

    displayHomepageComponent = () => {
        this.setState({
            displayHomepage: true,
            displayResults: false,
            loading: false,
        });
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
          <div className="buttonContainer">
            <button className="findYourGighy" onClick={this.displayHomepageComponent}>Home</button>
            <button className="findYourGighy" onClick={this.displayResultsComponent}>Launch App</button>
          </div>
        </div>
      </header >
      <main className="wrapper">
        {this.state.displayHomepage ? <Homepage homepageProps={this.displayHomepage} /> : null}
        {this.state.displayResults ? <Results resultsProps={this.state.displayResults} /> : null}
      </main>
    </React.Fragment>
    );
  }
}

export default App;
