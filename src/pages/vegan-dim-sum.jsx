import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Book from "../components/Book/Book";
import config from "../../data/SiteConfig";

class BookPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Vegan Dim Sum | ${config.siteTitle}`} />
          <Book image={config.bookImage} link={config.bookLink} />
        </div>
      </Layout>
    );
  }
}

export default BookPage;
