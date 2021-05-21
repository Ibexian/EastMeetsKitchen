import React, { Component } from "react";
import Img from 'gatsby-image';
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Img fluid={this.props.image} />

        <div className="info">
          <h1>
          Christina Ng
          </h1>
          <div className="bio">
            Christina is a culinary-trained cookbook author, food photographer and Youtube personality. Her goal is to show and teach people that turning their favorite dishes plant-based is simple and easy. She specializes in traditional Asian cuisine, but is always up for the challenge of any recipe that comes her way.
          </div>
          <div className="contact">
            <p>business enquiries & collbaorations</p>
            <a className="contact" href="mailto:eastmeetskitchen@gmail.com">eastmeetskitchen@gmail.com</a>
          </div>
          <a className="contact" href="https://instagram.com/eastmeetskitchn/">@eastmeetskitchn</a>
        </div>
      </div>
    );
  }
};