import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import HomeTiles from "../components/HomeTiles/HomeTiles";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <HomeTiles config={config} />
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            image {
              feature {
                childImageSharp {
                  fluid(
                    maxWidth: 1800
                    maxHeight: 1000
                    cropFocus: ENTROPY
                    quality: 90
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date
          }
        }
      }
    }
  }
`;
