import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="l--header">
    <div class="title-bar" data-responsive-toggle="navigation">
      <Link to="/">
        <StaticImage
          src="../images/logo-greens.png"
          alt={siteTitle}
          formats={["auto", "webp", "avif"]}
          placeholder="none"
          height="50"
        />
      </Link>
      <div className="menu-responsive">
        <div class="title-bar-title">Menu</div>
        <button
          class="menu-icon"
          type="button"
          data-toggle="navigation"
          aria-label="Toggle Responsive navigation"
        ></button>
      </div>
    </div>
    <div className="sticky-container" data-sticky-container>
      <div
        class="top-bar"
        id="navigation"
        data-sticky
        data-options="marginTop: 0"
      >
        <div className="grid-container top-bar">
          <Link to="/" className="hide-for-small-only">
            <StaticImage
              src="../images/logo-greens.png"
              alt={siteTitle}
              formats={["auto", "webp", "avif"]}
              placeholder="none"
              // height="100"
            />
          </Link>
          <ul class="menu">
            <li>
              <Link to="/" activeClassName="active" partiallyActive={true}>
                Start
              </Link>
            </li>
            <li>
              <Link to="/services" activeClassName="active" partiallyActive={true}>
                Wat doen we
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active" partiallyActive={true}>
                Wie zijn we
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active" partiallyActive={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
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
