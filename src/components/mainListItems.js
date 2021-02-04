import React from 'react'

const GifListItem = ({gif}) => {
  const gifImageInfo = gif.images.downsized_medium
  return (
    <div>
      <img src={gifImageInfo.url} alt={gifImageInfo.slug} height="250" width="250"></img>
    </div>
  )
}

export default GifListItem;

