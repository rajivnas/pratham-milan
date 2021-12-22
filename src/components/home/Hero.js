import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"

export default function Hero() {
  const data = useStaticQuery(graphql`
    {
      allStrapiSliders(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            heading
            sub_heading
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 70
                    placeholder: BLURRED
                    layout: CONSTRAINED
                  )
                }
              }
            }
            links {
              name
              path
            }
          }
        }
      }
    }
  `)

  const sliders = data.allStrapiSliders.edges

  return (
    <Carousel>
      {sliders.map(slider => {
        const pluginImage = getImage(
          slider.node.image.localFile.childImageSharp
        )

        const heroSlider = [
          `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
          pluginImage,
        ]

        const links = slider.node.links

        return (
          <Carousel.Item key={slider.node.id}>
            <BgImage image={heroSlider} className="hero-slider"></BgImage>

            <Carousel.Caption className="pb-5">
              <h1 className="fw-normal">{slider.node.heading}</h1>
              <p>{slider.node.sub_heading}</p>

              {links.map((link, i) => {
                return (
                  <Link to={`/${link.path}`} key={i}>
                    <Button
                      variant={
                        i === 0 ? `outline-danger text-white btn` : `light btn`
                      }
                    >
                      {link.name}
                    </Button>
                  </Link>
                )
              })}
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
