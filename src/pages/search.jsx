import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Search from "../components/Search/Search";
import config from "../../data/SiteConfig";

export const searches = graphql`
          query {
              siteSearchIndex {
                  index
              }
              allFile(filter: {absolutePath: {
                      regex: "/.*-\\d*(\\w)?\\./"
                  }
                }) {
                edges {
                  node {
                    childImageSharp{
                      fluid {
                        originalName
                        src
                      }
                    }
                  }
                }
              }
          }
        `;

class SearchPage extends Component {
  render() {
    return (
          <Layout>
            <div className="search-container">
              <Helmet title={`Search | ${config.siteTitle}`} />
              <Search 
                searchIndex={this.props.data.siteSearchIndex.index} 
                imageIndex={
                  this.props.data.allFile.edges.reduce((obj, item) => {
                    if (item.node.childImageSharp) {
                      // eslint-disable-next-line
                      obj[item.node.childImageSharp.fluid.originalName] = {src: item.node.childImageSharp.fluid.src}
                    }
                    return obj
                  }, {})
                }
              />
            </div>
          </Layout>
        )}

}



export default SearchPage;