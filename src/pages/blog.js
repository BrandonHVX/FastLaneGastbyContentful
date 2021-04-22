import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import styles from "./blog.module.css";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulBlogPost.edges");

    return (
      <Layout>
        <div>
          <Helmet />
          <div>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list"></ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;
