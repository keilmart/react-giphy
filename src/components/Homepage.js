import React, { Component } from "react";
import SearchBar from './SearchBar';
import Loader from 'react-loader-spinner'
import { scroller } from "react-scroll";
import { motion } from "framer-motion";
import "../Header.css";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.setState({
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
            <header>
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                    className="column widBox widgetOne shadowThree"
                >
                    <div className="wrapper backer">
                        <h1>Todays Trending Giphys!</h1>
                    </div>
                </motion.div>
                <SearchBar onTermChange={this.handleTermChange} />
                <button
                    onClick={(e) => scroller.scrollTo("Results", {
                        duration: 1200,
                        smooth: true,
                    })}
                >
                    Show Me The Gif's
          </button>
            </header >
        );
    }
}

export default Header;
