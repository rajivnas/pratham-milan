import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row } from "react-bootstrap"

export default function Cars() {
  const data = useStaticQuery(graphql`
    {
      allStrapiCars {
        edges {
          node {
            name
            description
            price
            img {
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
            specification {
              item
            }
          }
        }
      }
    }
  `)

  const cars = data.allStrapiCars.edges

  return (
    <div className="cars pt-2 pt-md-3 pb-4">
      {cars.map((car, i) => {
        const specifications = car.node.specification

        return (
          <Row className="cars-list mb-4" key={i}>
            <Col lg={6}>
              <GatsbyImage
                className="car-img mb-2"
                image={getImage(car.node.img.localFile.childImageSharp)}
                alt={car.node.name}
              />
            </Col>
            <Col lg={6}>
              <h2 className="car-name">{car.node.name}</h2>
              <p>{car.node.description}</p>
              <hr />

              <Row>
                <Col xs={8}>
                  <p className="fs-5">Specification</p>

                  <Row>
                    {specifications.map((specification, i) => {
                      return (
                        <Col xs={6} key={i}>
                          <ul>
                            <li>{specification.item}</li>
                          </ul>
                        </Col>
                      )
                    })}
                  </Row>
                </Col>
                <Col xs={4}>
                  <h1 className="fs-3">₹ {car.node.price}/-</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        )
      })}
    </div>
  )
}
