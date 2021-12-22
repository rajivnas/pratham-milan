import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

export default function Footer() {
  return (
    <footer className="pt-4 border-top border-light">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="ms-0 ms-lg-4">
              <Link to="/">
                <img
                  src="./logo.png"
                  width="130"
                  height="auto"
                  className="mt-2 mt-md-4"
                  alt="logo"
                />
              </Link>
              <p className="mb-4 mt-1 text-muted">
                One of the best banquet halls in Domjur, Howrah
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <h4>Pages</h4>
            <ul className="text-muted">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/facilities">Top Facilities</Link>
              </li>
              <li>
                <Link to="/gallery">Our Gallery</Link>
              </li>
              <li>
                <Link to="/send-inquiry">Send Inquiry</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4>Quick Links</h4>
            <ul className="text-muted">
              <li>
                <Link to="/decoration">Decoration</Link>
              </li>
              <li>
                <Link to="/catering">Catering</Link>
              </li>
              <li>
                <Link to="/car-rental">Car Rental</Link>
              </li>
              <li>
                <Link to="/guidelines">Guidelines</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h4>Support</h4>
            <div className="support">
              <a className="text-muted" href="mailto:someone@example.com">
                <p>example@gmail.com</p>
              </a>

              <a className="text-muted" href="tel:9804888888">
                <p>9804888888</p>
              </a>
            </div>
          </Col>
        </Row>

        <small className="d-block mt-5 text-center text-muted">
          Pratham Milan | &copy; {new Date().getFullYear()}
        </small>

        <small className="d-lg-block text-end d-none text-muted">
          Designed & Developed by
          <a
            href="https://www.naskar.dev/"
            target="_blank"
            aria-label="Kishore Naskar"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            &nbsp;naskar.dev
          </a>
        </small>
      </Container>
    </footer>
  )
}
