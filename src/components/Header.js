import React, { Component } from "react";
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
            return <div className="loadScreen"><Loader
                type="Puff"
                color="#ecbfea"
                height={100}
                width={100}
                timeout={3000} //3 secs
            /></div>;
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
