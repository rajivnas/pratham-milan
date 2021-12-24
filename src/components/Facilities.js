import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Facilities() {
  const data = useStaticQuery(graphql`
    {
      allStrapiFacilities {
        edges {
          node {
            name
            description
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 70
                    layout: CONSTRAINED
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

  const facilities = data.allStrapiFacilities.edges

  return (
    <div className="facilities pt-2 pt-md-3 pb-5">
      {facilities.map((facility, i) => {
        return (
          <Row className="mb-4" key={i}>
            <Col
              lg={6}
              className={i % 2 === 0 ? `order-lg-first` : `order-lg-last`}
            >
              <GatsbyImage
                className="fac-img"
                image={getImage(facility.node.image.localFile.childImageSharp)}
                alt={facility.node.name}
              />
            </Col>
            <Col lg={6}>
              <div className="fac-info bg-light p-3 p-lg-5">
                <span className="fs-5 text-warning">0{i + 1}</span>
                <h3 className="text-muted">{facility.node.name}</h3>
                <p className="lead">{facility.node.description}</p>
              </div>
            </Col>
          </Row>
        )
      })}
    </div>
  )
}
