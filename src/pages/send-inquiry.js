import { graphql } from "gatsby"
import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import Breadcrumb from "../components/shared/Breadcrumb"
import Layout from "../components/shared/Layout"
import Seo from "../components/shared/Seo"

export default function sendInquiry({ data }) {
  const inquiry = data.allStrapiSendInquiry.nodes[0]

  const pluginImage = getImage(inquiry.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Seo
        title="Send Inquiry"
        description=""
        keywords="Pratham Milan Garden, Pratham Milan banquet hall"
      />
      <Background image={bgImage} title={inquiry.title} />
      <Breadcrumb name={inquiry.title} />
      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{inquiry.headline}</h2>
        </div>
        <p className="page-description text-muted">{inquiry.description}</p>

        <Form
          className="send-inquiry py-4 px-3 p-md-5 bg-light mb-5"
          method="POST"
          action="https://pm-form-submission.herokuapp.com/api/inquiry"
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" name="name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email id</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="phone" name="phone" required />
              </Form.Group>
            </Col>
            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" name="address" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Date of event</Form.Label>
                <Form.Control type="date" name="date" required />
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>Event type</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="event_type"
                >
                  <option>Wedding ceremony</option>
                  <option>Birthday party</option>
                  <option>Rice ceremony</option>
                  <option>Engagement party </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Expected guest</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="expected_guests"
                >
                  <option>100 - 200 persons</option>
                  <option>200 - 300 persons</option>
                  <option>300 - 500 persons</option>
                  <option>500 - 700 persons</option>
                  <option>700 - 1000 persons</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={5}>
              <Form.Group className="mb-3">
                <Form.Label>Food & Catering</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="catering"
                >
                  <option>Lunch & Dinner</option>
                  <option>Breakfast & Lunch</option>
                  <option>Breakfast, Lunch & Dinner</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Type of food</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="food_type"
                >
                  <option>Vegetarian</option>
                  <option>Non-vegetarian</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-4">
                <Form.Label>Car Parking</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="parking"
                >
                  <option>Upto - 10 cars</option>
                  <option>Upto - 20 cars</option>
                  <option>Upto - 30 cars</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="secondary" type="submit">
            Send Request
          </Button>
        </Form>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiSendInquiry {
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
