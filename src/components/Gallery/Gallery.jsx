import React, { Component } from "react";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    const {images} = this.props;
    return (
      <div className="gallery">
        <ul>
          {images.map( image => (
            <li>
              <img src={image.node.sizes.src} alt="" />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery;