import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Services() {
  const data = useStaticQuery(graphql`
    {
      allStrapiServices {
        edges {
          node {
            id
            name
            description
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    quality: 50
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const services = data.allStrapiServices.edges

  return (
    <section className="services py-4 py-md-5">
      <Container>
        <div className="section-title">
          <h2>Services</h2>
        </div>

        <Row>
          {services.map(service => {
            return (
              <Col md={4} sm={6} className="service-item" key={service.node.id}>
                <GatsbyImage
                  className="my-2"
                  image={getImage(service.node.image.localFile.childImageSharp)}
                  alt={service.node.name}
                />
                <h3>{service.node.name}</h3>
                <p>{service.node.description}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
