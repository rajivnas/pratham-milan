import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import { Container } from "react-bootstrap"
import Layout from "../components/shared/Layout"
import Breadcrumb from "../components/shared/Breadcrumb"
import ReactMarkdown from "react-markdown"
import VideoTour from "../components/VideoTour"
import Seo from "../components/shared/Seo"

export default function about({ data }) {
  const about = data.allStrapiAboutPage.nodes[0]

  const pluginImage = getImage(about.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="About"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />

      <Background image={bgImage} title={about.title} />
      <Breadcrumb name={about.title} />
      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{about.headline}</h2>
        </div>

        <ReactMarkdown
          className="content text-muted mb-4"
          children={about.body}
        />

        <VideoTour />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAboutPage {
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
