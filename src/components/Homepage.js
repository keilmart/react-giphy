import React, { Component } from "react";
import "../App.css";
import mainImage from '../assets/mainImage.png';
class Header extends Component {
    
    render() {
        return (
            <section>
                <div className="headerContainer">
                    <div className="mainImageContainer">
                        <img class="mainImage" src={mainImage} alt="Logo"/>
                    </div>
                    <div className="mainDescription">
                        <h1>Stay up to date to with trending Gif's.</h1>
                        <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, repellendus? Hic, laboriosam ut. Odio eveniet quod</p></span>
                        <span><p>sapiente, est deserunt, adipisci quaerat cupiditate vel veniam voluptates saepe quam cumque? Molestiae, libero.</p></span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;


