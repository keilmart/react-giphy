import React, { Component } from "react";
import mainImage from '../assets/mainImage.png';
class Homepage extends Component {
    
    render() {
        return (
            <section className='wrapper'>
                <div className="homepageContainer">
                    <div className="mainImageContainer">
                        <img className="mainImage" src={mainImage} alt="Logo"/>
                    </div>
                    <div className="mainDescription">
                        <h1>giphy</h1>
                        <h2>Stay up to date to with trending Gif's.</h2>
                        <span><p>This project started as a hackathon style project, decided to revisit is and add some more features. Adding reacts hooks and FireStore next!</p></span>
                        <span><p>The core functionality is to search for a term and return gifs based on your request. adding a trending section next.</p></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Homepage;