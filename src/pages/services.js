import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layouts/index"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <Seo title="Onze services" />
    <div className="grid-container">
      <h1 className="border--after">Onze services</h1>
    </div>
    <div className="services__fullwidth_section">
      <div className="grid-container">
        <div className="grid-x">
          <h2>Totaalaanpak of detailwerk</h2>
        </div>
      </div>
    </div>
    <div className="grid-container">
      <div className="grid-x grid-margin-x grid-margin-y">
        <Link to="/services/tuinaanleg" className="cell medium-6 grid-image">
          <StaticImage
            src="../images/services-tuinaanleg.jpg"
            alt="Tuinaanleg"
            placeholder="blurred"
          />
          <h3 className="grid-image__title">Tuinaanleg</h3>
        </Link>
        <Link to="/services/tuinonderhoud" className="cell medium-6 grid-image">
          <StaticImage
            src="../images/services-tuinonderhoud.jpg"
            alt="Tuinonderhoud"
            placeholder="blurred"
          />
          <h3 className="grid-image__title">Tuinonderhoud</h3>
        </Link>
        <Link to="/services/transport" className="cell medium-6 grid-image">
          <StaticImage
            src="../images/services-transport.jpg"
            alt="Transport"
            placeholder="blurred"
          />
          <h3 className="grid-image__title">Transport</h3>
        </Link>
        <Link to="/services/realisaties" className="cell medium-6 grid-image">
          <StaticImage
            src="../images/services-realisaties.jpg"
            alt="Realisaties"
            placeholder="blurred"
          />
          <h3 className="grid-image__title">Realisaties</h3>
        </Link>
        <Link to="/services/sportvelden" className="cell medium-6 grid-image">
          <StaticImage
            src="../images/services-sportvelden.jpg"
            alt="Sportvelden onderhoud"
            placeholder="blurred"
          />
          <h3 className="grid-image__title">Sportvelden</h3>
        </Link>
        <Link to="/services/grondwerken" className="cell medium-6 grid-image">
          <StaticImage
            src="../images/services-grondwerken.jpg"
            alt="Grondwerken"
            placeholder="blurred"
          />
          <h3 className="grid-image__title">Grondwerken</h3>
        </Link>
        <Link to="/services/tuinpoorten" className="cell medium-6 grid-image">
          <StaticImage src="../images/services-tuinpoorten.jpg" alt="Tuinpoorten" />
          <h3 className="grid-image__title">Tuinpoorten</h3>
        </Link>
      </div>
      <p></p>
    </div>
  </Layout>
)

export default ServicesPage
