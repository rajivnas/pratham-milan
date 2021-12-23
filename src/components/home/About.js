import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function About() {
  return (
    <section className="about py-4 py-md-5">
      <Container className="py-0 py-md-3">
        <Row>
          <Col md={6} sm={12}>
            <h2>
              A wedding destination <br /> of your dream
            </h2>
            <p>
              Pratham Milon is one of the most renowned wedding venues in
              Howrah, located on Domjur - Amta road, making it most accessible
              and convenient for all...
            </p>
            <Link to="/about">
              <p>Full story</p>
            </Link>
          </Col>
          <Col md={6} sm={12} className="mt-2">
            <StaticImage
              className="img-about"
              src="../../../static/about-home.jpg"
              alt="About"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
