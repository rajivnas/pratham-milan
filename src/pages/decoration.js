import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import Seo from "../components/shared/Seo"

export default function decoration({ data }) {
  const decoration = data.allStrapiDecorationPage.nodes[0]

  const pluginImage = getImage(decoration.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Decoration"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />

      <Background image={bgImage} title={decoration.title} />
      <Breadcrumb name={decoration.title} />

      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{decoration.headline}</h2>
        </div>

        <ReactMarkdown
          className="content text-muted mb-5"
          children={decoration.body}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiDecorationPage {
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
