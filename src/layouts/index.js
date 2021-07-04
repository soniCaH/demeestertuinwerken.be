import React, { useEffect, Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import $ from "jquery"

import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    // eslint-disable-next-line
    const foundation = require("foundation-sites")
    $(document).foundation()
  })

  const title = data.site.siteMetadata?.title || `Demeester Tuinwerken`

  return (
    <Fragment>
      <Header siteTitle={title} />
      <main className="l--content">{children}</main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
