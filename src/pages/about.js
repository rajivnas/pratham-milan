import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import { Container } from "react-bootstrap"
import Layout from "../components/shared/Layout"
import Breadcrumb from "../components/shared/Breadcrumb"
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
      <Container className="mb-5">
        <div className="page-title">
          <h2 className="display-6 fw-normal">{about.headline}</h2>
        </div>
        <p className="page-description text-muted">{about.description}</p>

        <div className="page-sub-title">
          <h4>Brief history of our journey</h4>
          <p className="text-muted">{about.brief_history}</p>
        </div>

        <VideoTour />

        <div className="page-sub-title">
          <h4>Location and connectivity</h4>
          <p className="text-muted">{about.location_connectivity}</p>
        </div>
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
        description
        brief_history
        location_connectivity
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
