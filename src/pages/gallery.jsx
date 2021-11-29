import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Gallery from "../components/Gallery/Gallery";
import config from "../../data/SiteConfig";

export const query = graphql`
  query {
    allFile(sort: {order: ASC, fields: absolutePath}, filter: {absolutePath: {regex: "/gallery-(([01]?[0-9])|(20))*/"}}) {
      edges {
        node {
          childImageSharp{
            fluid(maxHeight: 1000
              quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;


class GalleryPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`Gallery | ${config.siteTitle}`} />
          <Gallery images={this.props.data.allFile.edges}/>
        </div>
      </Layout>
    );
  }
}

export default GalleryPage;