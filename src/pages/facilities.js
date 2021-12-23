import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import { Container } from "react-bootstrap"
import Facilities from "../components/Facilities"
import Seo from "../components/shared/Seo"

export default function facilities({ data }) {
  const facilities = data.allStrapiFacilityPage.nodes[0]

  const pluginImage = getImage(facilities.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Facilities"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={facilities.title} />
      <Breadcrumb name={facilities.title} />
      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{facilities.headline}</h2>
        </div>
        <p className="page-description text-muted">{facilities.description}</p>

        <Facilities />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiFacilityPage {
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
