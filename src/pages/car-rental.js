import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import { Container } from "react-bootstrap"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"

export default function carRental({ data }) {
  const backgroundImage = data.allStrapiCarRental.nodes[0]
  // const decoration = data.allStrapiGalleries.nodes

  const pluginImage = getImage(
    backgroundImage.bg_image.localFile.childImageSharp
  )

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Background image={bgImage} title={backgroundImage.title} />
      <Breadcrumb name={backgroundImage.title} />

      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{backgroundImage.headline}</h2>
        </div>
        <p className="page-description text-muted">
          {backgroundImage.description}
        </p>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiCarRental {
      nodes {
        title
        headline
        description
        bg_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 70
              )
            }
          }
        }
      }
    }
  }
`
