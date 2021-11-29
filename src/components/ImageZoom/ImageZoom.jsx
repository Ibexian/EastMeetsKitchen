import React from 'react'
import Image from 'gatsby-image'
import Zoom from 'react-medium-image-zoom'

import "./ImageZoom.css"
import 'react-medium-image-zoom/dist/styles.css'

const wrapperStyle = {
  width: '100%',
  height: '100%'
}

const ImageZoom = (props) => {
  return (
    <Zoom>
      <Image style={wrapperStyle} {...props} />
    </Zoom>
  )
}

export default ImageZoom