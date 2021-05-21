import React, { Component } from "react";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    const images = [...Array(45).keys()].slice(1)
    return (
      <div className="gallery">
        <ul>
          {images.map( image => (
            <li>
              <img src={`/gallery/${image}.jpg`} alt="" />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Gallery;