import React from 'react'

const GiphyListProp = ({gif}) => {
  const gifImageInfo = gif.images.downsized_medium
  // const gifImageTitle = gif.name
  return (
    <div>
      <img src={gifImageInfo.url} name={gifImageInfo.title} alt={gifImageInfo.slug} height="250" width="250"></img>
      {/* <h4>{gifImageTitle.title}</h4> */}
    </div>
  )
}

export default GiphyListProp;

