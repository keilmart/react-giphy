import React, { Component } from 'react';
import SearchBar from './SearchBar.js'
import axios from "axios";
import _ from 'lodash'
import { motion } from "framer-motion";
import Loader from "react-loader-spinner";

const API_KEY = "P4hCy0QXgCWhBkBv1WS8E4upKd540JNg"

class Results extends Component {

    constructor() {
    super();
        this.state = {
            giphyMainArray: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.apiCallToGiphy("computer")
    }

    apiCallToGiphy = async (usersEnteredText) => {
        return await axios ({
            method: `GET`,
            dataResponse: `json`,
            url: `https://api.giphy.com/v1/gifs/search?q=${usersEnteredText}&api_key=${API_KEY}`,
            params: {
                limit: 18,
                offset: 0,
        },
    })
    
    .then((giphyAxiosResponse) => {
                
            // this is saving the data into set state.App // this refers to the component that we are inside of // every time setState runs, it re renders the page // 

        this.setState({
            giphyMainArray: giphyAxiosResponse.data.data,
            loading: false,
            });
        }
            ).catch(
                function (error) {
                    console.log('An Error Has Occurred!')
                    return Promise.reject(error)
                }
            );
        }
    

    render() {
        console.log(this.state.giphysMainArray)
        const apiCallToGiphy = _.debounce((usersEnteredText) => {this.apiCallToGiphy(usersEnteredText)}, 200)

        if (this.state.loading) {
            return <div className="loadScreen"><Loader
                type="Puff"
                color="#62d3dd"
                height={100}
                width={100}
                timeout={5000} // 5 second Timeout // 
            /></div>;
        }

    return (
        <React.Fragment>
            <SearchBar onChange={(usersEnteredText) => apiCallToGiphy(usersEnteredText)} />
                        <main className="flexContent">
                            {this.state.giphyMainArray.map((giphysToRender) => {
                                return (
                                <div>
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95, x: "-5px", y: "5px" }}
                                    >
                                        <li div key={giphysToRender.id} className="giphyListItem">
                                            <div className="giphyImageContainer">
                                                <img src={giphysToRender.images.fixed_height.url} height="265" width="265" alt={giphysToRender.title}/>
                                                <h4>{giphysToRender.title}</h4>
                                                <a href={giphysToRender.url} target="_blank"><h4>Click Me!</h4></a>
                                            </div>
                                        </li>
                                    </motion.div>
                                </div>
                                );
                            })}
                        </main>
        </React.Fragment>
        );
    }
}

export default Results;