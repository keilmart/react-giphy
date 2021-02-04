import React, { Component } from "react";
import axios from "axios";
// import Loader from 'react-loader-spinner'
import "../App.css";

class Results extends Component {

    constructor() {
        super();
        this.state = {
            giphyMainArray: [],
            loading: true,
        };
    }

    async componentDidMount() {
        await axios({
            url: `https://api.giphy.com/v1/gifs/trending`,
            method: `GET`,
            dataResponse: `json`,
            params: {
                api_key: `P4hCy0QXgCWhBkBv1WS8E4upKd540JNg`,
                limit: 12,
                offset: 0,
                rating: 'g',
            },

        })
            // Get back the data and parse for what I want, I pass a callback function because thats a set of steps that we tell what to do // .data goes into the array //
            .then((giphyAxiosResponse) => {
                // this is saving the data into set state.App // this refers to the component that we are inside of // every time setState runs, it re renders the page // 
                this.setState({
                    giphyMainArray: giphyAxiosResponse.data.data,
                    loading: false,
                });
            }
            ).catch(
                function (error) {
                    console.log('Show error notification!')
                    return Promise.reject(error)
                }
            );
    }
    

    render() {
        // if (this.state.loading) {
        //     return <div className="loadScreen"><Loader
        //         type="Puff"
        //         color="#ecbfea"
        //         height={100}
        //         width={100}
        //         // timeout={3000} //3 secs
        //     /></div>;
        // }

    return (
            <div className="Results">
                <main>
                    <div className="container">
                        <ul className="wrapper container">
                            {this.state.giphyMainArray.map((giphysToRender) => {
                                return (
                                        <li div key={giphysToRender.id} className="giphysStyle">
                                            <div className="imgHold">
                                                <img src={giphysToRender.images.fixed_height.url} />
                                            </div>
                                            <h4>{giphysToRender.title}</h4>
                                        </li>
                                );
                            })}
                        </ul>
                    </div>
                </main>
            </div >
        );
    }
}

export default Results;