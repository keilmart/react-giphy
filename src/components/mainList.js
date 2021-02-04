import React from 'react'
import GiphyListItem from './mainListItems.js'

const GifList = ({gifs}) => {
  const gifList = gifs.map((gif, i) =>
    <div key={i}>
        <GiphyListItem gif={gif} key={gif.id} />
    </div>
  )

  return (
    <div className="container">
      {gifList}
    </div>
  )
}

export default GifList;