import React, { Component } from "react";
import mainImage from '../assets/mainImage.png';
class Header extends Component {
    
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
                        <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repellendus? Hic, laboriosam ut. Odio eveniet quod</p></span>
                        <span><p>sapiente, est deserunt, adipisci quaerat cupiditate vel veniam voluptates saepe quam cumque? Molestiae, libero.</p></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;


