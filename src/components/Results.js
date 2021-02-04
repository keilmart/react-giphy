import React, { Component } from 'react';
import '../App.css';
import _ from 'lodash'

const API_KEY = "P4hCy0QXgCWhBkBv1WS8E4upKd540JNg"

class Results extends Component {
  constructor() {
    super()
    this.state = {
      gifs: {}
    }
  }

  componentDidMount() {
    this.apiCallToGiphy("computers")
  }

  apiCallToGiphy(usersEnteredText) {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${usersEnteredText}&api_key=${API_KEY}&limit=24`)
    .then( res => res.json() )
    .then(json => {
      if(json.error) {
        alert("There was an error")
      } else {
        this.setState({
          gifs: json
        })
      }
    })
  }

  render() {
    const apiCallToGiphy = _.debounce((usersEnteredText) => {this.apiCallToGiphy(usersEnteredText)}, 200)

    if(!this.state.gifs.data) {
      return null
    } else {
      return (
        <div className="container">
          <div>
          </div>
        </div>
      );
    }
  }
}

export default Results;