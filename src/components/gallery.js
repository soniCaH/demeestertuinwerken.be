import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Gallery = ({ category }) => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        edges {
          node {
            relativeDirectory
            dir
            childImageSharp {
              gatsbyImageData(
                # aspectRatio: 1.5
                width: 1000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  const childImages = gallery.edges
    .filter(({ node }) => {
      return node.relativeDirectory === category
    })
    .map(({ node }, i) => {
      const image = getImage(node)
      return (
        <GatsbyImage
          image={image}
          alt={`Foto ${node.relativeDirectory}`}
          key={i}
          className={`cell medium-6`}
        />
      )
    })

  return <section className="gallery grid-x grid-margin-x grid-margin-y">{childImages}</section>
}

export default Gallery
