import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Gallery from "../components/Gallery/Gallery";
import config from "../../data/SiteConfig";


class GalleryPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Gallery | ${config.siteTitle}`} />
          <Gallery  />
        </div>
      </Layout>
    );
  }
}

export default GalleryPage;