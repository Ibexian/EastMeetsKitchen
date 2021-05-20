import React, { Component } from "react";
import "./Footer.css";
import Social from "../Social/Social";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <h4>{copyright}</h4>
          <Social />
        </div>
      </footer>
    );
  }
}

export default Footer;
