import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import { Container } from "react-bootstrap"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"
import Seo from "../components/shared/Seo"
import Cars from "../components/Cars"

export default function carRental({ data }) {
  const carRental = data.allStrapiCarRental.nodes[0]

  const pluginImage = getImage(carRental.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Car Rental"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={carRental.title} />
      <Breadcrumb name={carRental.title} />

      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{carRental.headline}</h2>
        </div>
        <p className="page-description text-muted">{carRental.description}</p>

        <Cars />
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
