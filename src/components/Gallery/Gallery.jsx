import React, { Component } from "react";
import ImageZoom from "../ImageZoom/ImageZoom";
import "./Gallery.css";


class Gallery extends Component {
  render() {
    console.log(this.props.images)
    const images = this.props.images;
    return (
      <div className="gallery">
        <ul>
          {images.map( image => (
            <li style={{width: `calc(50vh * ${image.node.childImageSharp.fluid.aspectRatio})`, maxWidth: `calc(600px * ${image.node.childImageSharp.fluid.aspectRatio})`}}>
              <ImageZoom fluid={image.node.childImageSharp.fluid}/> 
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery;