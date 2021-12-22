import { graphql } from "gatsby"
import React from "react"
import { getImage } from "gatsby-plugin-image"
import Background from "../components/shared/Background"
import { Col, Container, Form, Row, Button } from "react-bootstrap"
import Layout from "../components/shared/Layout"
import Breadcrumb from "../components/shared/Breadcrumb"

export default function contact({ data }) {
  const contact = data.allStrapiContactPage.nodes[0]

  const pluginImage = getImage(contact.bg_image.localFile.childImageSharp)

  const bgImage = [
    `linear-gradient(rgba(233, 186, 186, 0.208), rgba(20, 20, 20, 0.479))`,
    pluginImage,
  ]

  return (
    <Layout>
      <Background image={bgImage} title={contact.title} />
      <Breadcrumb name={contact.title} />
      <Container>
        <div className="page-title">
          <h2 className="display-6 fw-normal">{contact.headline}</h2>
        </div>
        <p className="page-description text-muted">{contact.description}</p>

        <div className="contact pt-2 pt-md-3 pb-4">
          <Row>
            <Col md={6} className="mb-3">
              <Form
                className="p-2"
                method="POST"
                action="https://pm-form-submission.herokuapp.com/api/contact"
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="text" name="name" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={5} />
                </Form.Group>

                <Button variant="secondary" type="submit">
                  Send Message!
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <div className="bg-light p-4 mb-2">
                <h3 style={{ color: "#6a6b6d" }}>Quick Contact</h3>

                <p className="mb-2">
                  <span>+91</span> {contact.phone_number}
                </p>
                <p className="mb-2">{contact.email_id}</p>
                <p>Amta Rd, Karuripara, Makardah, Howrah, West Bengal 711405</p>
              </div>
              <div className="responsive-map">
                <iframe
                  title="Pratham Milon"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14731.066941542937!2d88.236258!3d22.6251843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x756e72c2053132d0!2sPratham%20Milan!5e0!3m2!1sen!2sin!4v1638713873899!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiContactPage {
      nodes {
        title
        headline
        description
        phone_number
        email_id
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
