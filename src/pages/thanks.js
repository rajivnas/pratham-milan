import { graphql, Link } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { Container } from "react-bootstrap"

export default function thanks({ data }) {
  const thanks = data.allStrapiThanksPage.nodes[0]

  const pluginImage = getImage(thanks.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Background image={bgImage} title={thanks.title} />
      <Breadcrumb name={thanks.title} />

      <Container className="mb-5">
        <div className="page-title">
          <h2 className="display-6 fw-normal">{thanks.headline}</h2>
        </div>
        <p className="page-description text-muted">
          {thanks.message} <Link to="/">home</Link> page.
        </p>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiThanksPage {
      nodes {
        title
        headline
        message
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
