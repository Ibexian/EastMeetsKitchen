import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import window from "global";

class BookPage extends Component {
  render() {
    window.location = config.bookLink;
    return (
      <Helmet>
        <meta httpEquiv="refresh" content={`s;URL=${config.bookLink}`} />
      </Helmet>
    );
  }
}

export default BookPage;
