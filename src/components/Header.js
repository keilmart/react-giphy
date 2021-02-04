import React, { Component } from "react";
import "../Results.css";

class Header extends Component {
    
    sendResultsToParent = () => {
        this.props.searchPlantsProp();
    }

//     render() {
//         return (
//             <header>
//                 <div className="wrapper">
//                     {/* <div className="container">
//                         <div className="CHANGETHIS">
//                             <button className="findYourGighy" onClick={this.sendResultsToParent}>Go Back Home</button>
//                         </div>
//                         <div className="CHANGETHIS">
//                             <button className="findYourGighy" onClick={this.sendResultsToParent}>Find your Giphy's!</button>
//                         </div>
//                     </div> */}
//                 </div>
//             </header >
//         );
//     }
// }

export default Header;