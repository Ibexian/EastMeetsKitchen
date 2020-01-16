import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  render() {
    const { image, link } = this.props;
    return (
      <div className="post">
        <h1>Vegan Dim Sum - The Cookbook</h1>
        <a className="bookPromo-vert" href={link}>
          <div className="book">
            <img src={image} alt="Cover for Vegan Dim Sum" />
          </div>
          <p>
            <h1>I wrote a book!</h1>
            <p>lorem Ipsum</p>
          </p>
        </a>
      </div>
    );
  }
}

export default Book;
