import React, { Component } from "react";
import SearchBar from './SearchBar';
// import { scroller } from "react-scroll";
import { motion } from "framer-motion";

class Header extends Component {
    
    sendResultsToParentTwo = () => {
        this.props.searchResultsPropTwo();
    }

    render() {
        return (
            <section>
                <div className="headerContainer">
                    <h1>Test</h1>
                </div>
                <div className="homepageCopyText">
                    <p>Test test</p>
                    <button className="findYourGighy" onClick={this.sendResultsToParentTwo}>Find your Giphy's!</button>
                </div>
            </section>
        );
    }
}

export default Header;


