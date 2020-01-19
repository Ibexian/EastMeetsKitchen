import React from "react";
import Helmet from "react-helmet";
import Carousel from "nuka-carousel";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Social from "../components/Social/Social";

class Index extends React.Component {
  findFeatured() {
    const {
      data: {
        allMarkdownRemark: { edges }
      }
    } = this.props;
    return (
      <Carousel
        autoplay="true"
        wrapAround="true"
        speed="1000"
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            type="button"
            className="controlButton"
            onClick={previousSlide}>
            {`<`}
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button type="button" className="controlButton" onClick={nextSlide}>
            {`>`}
          </button>
        )}
        renderBottomCenterControls="false">
        {edges.map(post => (
          <Link to={post.node.fields.slug} key={post.node.frontmatter.title}>
            <div className="featureBox">
              <Img
                fluid={
                  post.node.frontmatter.image.feature.childImageSharp.fluid
                }
                className="featureImage"
              />
              <h2>{post.node.frontmatter.title}</h2>
            </div>
          </Link>
        ))}
      </Carousel>
    );
  }

  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />
          <SEO />
          <a className="bookPromo" href={config.bookLink}>
            <div className="text">
              <p>
                <h3>
                  Dim Sum,
                  <br />
                  Done VEGAN!
                </h3>
                <h4>Over 50 classic dim sum recipes.</h4>
              </p>
              <div className="order">Order Now!</div>
            </div>
            <div className="books">
              <div className="book">
                <img src={config.bookImage} alt="Cover for Vegan Dim Sum" />
              </div>
            </div>
          </a>
          {this.findFeatured()}
          <Social />
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
