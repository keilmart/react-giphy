import React from 'react'
import GiphyListProp from './mainListItems.js'

const GiphyList = ({gifs}) => {
  const giphList = gifs.map((gif, i) =>
    <div key={i}>
        <GiphyListProp gif={gif} key={gif.id} />
    </div>
  )

  return (
    <div className="flexContent">
      {giphList}
    </div>
  )
}

export default GiphyList;





// import React, { Component } from "react";
// import GiphyListProp from './mainListItems.js'

// class Results extends Component {

//     constructor() {
//         super();
//         this.state = {
//             giphyMainArray: [],
//             // loading: true,
//         };
//     }
    
//     render() {
//         // if (this.state.loading) {
//         //     return <div className="loadScreen"><Loader
//         //         type="Puff"
//         //         color="#ecbfea"
//         //         height={100}
//         //         width={100}
//         //         // timeout={3000} //3 secs
//         //     /></div>;
//         // }

//     return (
//             <div className="flexContent">
//                         <ul className="wrapper container">
//                             {this.state.giphyMainArray.map((giphysToRender) => {
//                                 return (
//                                         <li key={giphysToRender.id} className="giphysStyle">
//                                             <div className="imgHold">
//                                                 <img src={giphysToRender.images.fixed_height.url} />
//                                             </div>
//                                             <h4>{giphysToRender.title}</h4>
//                                         </li>
//                                     // </motion.div>
//                                 );
//                             })}
//                         </ul>

//             </div >
//         );
//     }
// }

// export default Results;





