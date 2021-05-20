import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

export default class FeatureTemplate extends React.Component {
  render() {
    const {data: {allMarkdownRemark: {edges}}} = this.props;
    return (
      <Layout>
        <div className="tag-container">
          <Helmet title={`Featured Posts | ${config.siteTitle}`} />
          <PostListing postEdges={edges} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query FeaturePage {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: {featured: {in: true}} }
    ) {
        totalCount
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
                  fluid(traceSVG: {
                    color: "#5E6A68"
                  }) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            date
          }
        }
      }
    }
  }`;