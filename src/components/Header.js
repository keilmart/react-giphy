import React, { Component } from "react";
import SearchBar from './SearchBar';
// import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import "../Results.css";

class Header extends Component {
    
    sendResultsToParent = () => {
        this.props.searchPlantsProp();
    }

    render() {
        return (
            <header>
                <div className="wrapper">
                    <SearchBar onTermChange={this.handleTermChange} />
                        <div className="CHANGETHIS">
                            <button className="findYourGighy" onClick={this.sendResultsToParent}>Find your Giphy's!</button>
                        </div>
                    </div>
            </header >
        );
    }
}

export default Header;