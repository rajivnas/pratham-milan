import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import Seo from "../components/shared/Seo"

export default function catering({ data }) {
  const catering = data.allStrapiCateringPage.nodes[0]

  const pluginImage = getImage(catering.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Catering"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />

      <Background image={bgImage} title={catering.title} />
      <Breadcrumb name={catering.title} />

      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{catering.headline}</h2>
        </div>

        <ReactMarkdown
          className="content text-muted mb-5"
          children={catering.body}
        />
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
