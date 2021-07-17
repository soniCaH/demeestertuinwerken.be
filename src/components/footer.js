import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./footer.scss"

const Footer = () => (
  <footer className="l--footer">
    <div className="grid-container">
      <div className="grid-x grid-margin-x grid-margin-y">
        <div className="cell medium-6">
          <StaticImage
            src="../images/logo-white.png"
            alt="Demeester Tuinwerken"
            width={250}
            placeholder="tracedSVG"
          />
        </div>
        <div className="cell medium-6">
          <h2 className="border--after">Contact</h2>
          Yannis Demeester
          <br />
          Aarschotsebaan 35
          <br />
          3190 Schiplaken-Boortmeerbeek
          <br />
          <a href="tel:+32499203592">0499/20.35.92</a>
          <br />
          <a href="mailto:y.demeester.tuinwerken@gmail.com">
            y.demeester.tuinwerken@gmail.com
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
