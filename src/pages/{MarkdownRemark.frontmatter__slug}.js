import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import Seo from "../components/seo"

import Gallery from "../components/gallery"

export default function Page({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Seo title="Home" />
      <div className="grid-container">
        <h1 className="border--after margin--before">{frontmatter.title}</h1>
        <div className="grid-x grid-margin-x grid-margin-y">
          <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <Gallery category={frontmatter.category} />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        category
      }
    }
  }
`
