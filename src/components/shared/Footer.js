import { Link } from "gatsby"
import React from "react"
import { BsFacebook, BsInstagram, BsYoutube, BsWhatsapp } from "react-icons/bs"
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
                  src="/logo.png"
                  width="100"
                  height="auto"
                  className="logo mt-2 mt-md-4"
                  alt="logo"
                />
              </Link>
              <p className="mt-1 text-muted">The best banquet hall in Howrah</p>

              <div className="social-icons mb-4 ">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noreferrer"
                >
                  <BsFacebook size={20} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                >
                  <BsInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Youtube"
                  rel="noreferrer"
                >
                  <BsYoutube size={20} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label="Whatsapp"
                  rel="noreferrer"
                >
                  <BsWhatsapp size={20} />
                </a>
              </div>
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
