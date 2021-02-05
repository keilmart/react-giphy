import React, { Component } from "react";
import Homepage from "./components/Homepage.js";
import Results from "./components/Results.js";

import './App.css';
class App extends Component {
  // Below are 2 functions for the "Homepage" and "Results page", Since the header is "static" it will navigate to the page based on the users input, in this case picking either the home button or the button for the results //
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
  return (
    <React.Fragment>
      <header>
        <div className="wrapper">
          <div className="flexContent buttonContainer">
            <button className="inputClass" onClick={this.displayHomepageComponent}>&#x2190; giphy &#x2192;</button>
            <button className="inputClass" onClick={this.displayResultsComponent}>Launch App &#x2192;</button>
          </div>
        </div>
      </header >
      <main>
        {this.state.displayHomepage ? <Homepage homepageProps={this.displayHomepage} /> : null}
        {this.state.displayResults ? <Results resultsProps={this.state.displayResults} /> : null}
      </main>
    </React.Fragment>
    );
  }
}

export default App;
