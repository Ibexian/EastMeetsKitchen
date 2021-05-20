import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Gallery from "../components/Gallery/Gallery";
import config from "../../data/SiteConfig";

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          sizes {
            src
          }
        }
      }
    }
  }
`;

class GalleryPage extends Component {
  render() {
    const {data: {allImageSharp: {edges}}} = this.props;
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Gallery | ${config.siteTitle}`} />
          <Gallery images={edges} />
        </div>
      </Layout>
    );
  }
}

export default GalleryPage;