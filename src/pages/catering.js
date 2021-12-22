import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

export default function catering({ data }) {
  const backgroundImage = data.allStrapiCateringPage.nodes[0]
  // const catering = data.allStrapiCatering.nodes

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
    allStrapiCateringPage {
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
