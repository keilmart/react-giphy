import React, { Component } from "react";
import SearchBar from './SearchBar';
// import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import "../Header.css";

class Header extends Component {
    
    sendResultsToParent = () => {
        this.props.searchPlantsProp();
    }

    render() {
        return (
            <header>
                {/* <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                    className="column widBox widgetOne shadowThree"
                >
                    <div className="wrapper backer">
                        <h1>Todays Trending Giphys!</h1>
                    </div>
                </motion.div> */}
                <SearchBar onTermChange={this.handleTermChange} />
                <div className="CHANGETHIS">
                    <button className="findYourGighy" onClick={this.sendResultsToParent}>Find your Giphy's!</button>
                </div>
                {/* <button
                    onClick={(e) => scroller.scrollTo("Results", {
                        duration: 1200,
                        smooth: true,
                    })}
                >
                    Show Me The Gif's
          </button> */}
            </header >
        );
    }
}

export default Header;


