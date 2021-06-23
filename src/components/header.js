import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          <StaticImage
            src="../images/logo-white.png"
            alt={siteTitle}
            height={50}
            placeholder="tracedSVG"
          />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
