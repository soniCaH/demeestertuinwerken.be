import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import Layout from "../layouts/index"
import Seo from "../components/seo"

const IndexPage = () => {
  const { heroImage } = useStaticQuery(
    graphql`
      query {
        heroImage: file(relativePath: { eq: "cover.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 2.5
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const heroImageObject = getImage(heroImage)

  return (
    <Layout>
      <Seo title="Home" />
      <BgImage
        image={heroImageObject}
        style={{
          width: "100%",
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "var(--color-white)",
        }}
        className="hero_image"
      >
        <h1
          style={{
            color: "var(--color-white)",
            textShadow: "1px 1px 1px #333",
          }}
        >
          Tuinwerken Demeester
        </h1>
        <p className="highlight" style={{ textAlign: "center" }}>
          Professionele tuinaanleg en -onderhoud, algemene tuinwerken, opritten,
          grondwerken...
        </p>
      </BgImage>

      <div className="grid-x home__fullwidth_section">
        <div className="cell medium-4 home__picture--left">
          <StaticImage src="../images/home-foto1.jpg" alt="Foto" />
        </div>
        <div className="cell medium-8 home__text--right">
          <h2>Persoonlijke totaalaanpak</h2>
          <p>Uw partner voor al uw tuinwerken!</p>
        </div>
      </div>

      <div className="grid-container">
        <h2 className="border--after">Onze diensten</h2>
        <div className="grid-x grid-margin-x grid-margin-y">
          <Link to="/services/tuinaanleg" className="cell medium-6 grid-image">
            <StaticImage
              src="../images/services-tuinaanleg.jpg"
              alt="Tuinaanleg"
              placeholder="blurred"
            />
            <h3 className="grid-image__title">Tuinaanleg</h3>
          </Link>
          <Link
            to="/services/tuinonderhoud"
            className="cell medium-6 grid-image"
          >
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
            <StaticImage
              src="../images/services-tuinpoorten.jpg"
              alt="Tuinpoorten"
            />
            <h3 className="grid-image__title">Tuinpoorten</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
