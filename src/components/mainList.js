import React from 'react'
import GiphyListItem from './mainListItems.js'

const GiphyList = ({gifs}) => {
  const giphList = gifs.map((gif, i) =>
    <div key={i}>
        <GiphyListItem gif={gif} key={gif.id} />
    </div>
  )

  return (
    <div className="flexContent">
      {giphList}
    </div>
  )
}

export default GiphyList;