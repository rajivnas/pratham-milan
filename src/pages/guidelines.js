import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { Container } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import Seo from "../components/shared/Seo"

export default function guidelines({ data }) {
  const guidelines = data.allStrapiGuidelinesPage.nodes[0]

  const pluginImage = getImage(guidelines.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Guidelines"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={guidelines.title} />
      <Breadcrumb name={guidelines.title} />

      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{guidelines.headline}</h2>
        </div>

        <ReactMarkdown
          className="content text-muted mb-5"
          children={guidelines.body}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiGuidelinesPage {
      nodes {
        title
        headline
        body
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
