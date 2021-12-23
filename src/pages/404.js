import { graphql, Link } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import Seo from "../components/shared/Seo"

export default function Error({ data }) {
  const notFound = data.allStrapi404Page.nodes[0]

  const pluginImage = getImage(notFound.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]
  return (
    <Layout>
      <Seo title="404" description="This page does not exist.." />

      <Background image={bgImage} title={notFound.title} />
      <Breadcrumb name={notFound.title} />
      <Container>
        <div className="p-3 text-center">
          <h2>{notFound.headline}</h2>
          <p className="fw-bold text-muted">
            Please go back to the <Link to="/">Home</Link> page
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapi404Page {
      nodes {
        title
        headline
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
