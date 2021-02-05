import React, { Component } from 'react';
// import axios from "axios";
import GiphyList from './mainList.js'
import SearchBar from './SearchBar.js'
// import Loader from "react-loader-spinner";
import _ from 'lodash'
import '../App.css';

const API_KEY = "P4hCy0QXgCWhBkBv1WS8E4upKd540JNg"

class Results extends Component {
  constructor() {
    super()
    this.state = {
      gifs: {},
      loading: true,
    }
  }

  // when the components mounts, it runs the "apiCallToGiphy" call/function to the API // 
  componentDidMount() {
    this.apiCallToGiphy("computers")
  }

  // this is the call to the API, it is async, so it awaits for the reply from the API // 
  apiCallToGiphy = async (usersEnteredText) => {
    return await fetch(`http://api.giphy.com/v1/gifs/search?q=${usersEnteredText}&api_key=${API_KEY}&limit=18`)
    .then( res => res.json() )
    .then(json => {
      if(json.error) {
        alert("There was an error")
      } else {
        this.setState({
          gifs: json,
          loading: false,
        })
      }
    })
  }

  render() {
    const apiCallToGiphy = _.debounce((usersEnteredText) => {this.apiCallToGiphy(usersEnteredText)}, 200)

    // this is the loader for the gif section, should render a loading spinner and background //
    // if (this.state.loading) {
    //   return (
    //     <div class="flexContent loadScreen">
    //       <Loader
    //         type="MutatingDots"
    //         color="#4f7cff"
    //         secondaryColor="#f35163"
    //         height={100}
    //         width={100}
    //       />
    //     </div>
    //   );
    // }

    // this is checking for the received data from the state above, if
    if(!this.state.gifs.data) {
      return null
    } else {

      return (
        <div>
          <SearchBar onChange={(usersEnteredText) => apiCallToGiphy(usersEnteredText)} />
            <GiphyList gifs={this.state.gifs.data}/>
        </div>
      );
    }
  }
}

export default Results;