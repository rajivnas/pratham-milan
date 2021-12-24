import { graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { Container } from "react-bootstrap"
import Seo from "../components/shared/Seo"

export default function gallery({ data }) {
  const galleryPage = data.allStrapiGalleryPage.nodes[0]
  const galleries = data.allStrapiGalleries.nodes

  const pluginImage = getImage(galleryPage.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Gallery"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={galleryPage.title} />
      <Breadcrumb name={galleryPage.title} />
      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{galleryPage.headline}</h2>
        </div>
        <p className="page-description text-muted">{galleryPage.description}</p>

        <SimpleReactLightbox>
          <SRLWrapper>
            <div className="gallary pt-2 pt-md-3 pb-5">
              {galleries.map(gallery => {
                return (
                  <div key={gallery.id}>
                    <GatsbyImage
                      image={getImage(gallery.image.localFile.childImageSharp)}
                      alt={gallery.alt}
                    />
                  </div>
                )
              })}
            </div>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiGalleryPage {
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
    allStrapiGalleries(sort: { fields: image___createdAt, order: DESC }) {
      nodes {
        id
        alt
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 60
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
`
