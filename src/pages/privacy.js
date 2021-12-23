import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { Container } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import { Helmet } from "react-helmet"

export default function privacy({ data }) {
  const privacy = data.allStrapiPrivacyPage.nodes[0]

  const pluginImage = getImage(privacy.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Helmet>
        <title>Privacy-Policy | Pratham Milon</title>
      </Helmet>
      <Background image={bgImage} title={privacy.title} />
      <Breadcrumb name={privacy.title} />

      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{privacy.headline}</h2>
        </div>

        <ReactMarkdown
          className="content text-muted mb-5"
          children={privacy.body}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiPrivacyPage {
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
