import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaQuoteLeft } from "react-icons/fa"
import { Carousel, Container } from "react-bootstrap"

export default function Testimonials() {
  const data = useStaticQuery(graphql`
    {
      allStrapiTestimonials {
        edges {
          node {
            id
            name
            review
          }
        }
      }
    }
  `)

  const testimonials = data.allStrapiTestimonials.edges

  return (
    <section className="testimonials py-4 py-md-5">
      <Container className="pt-5">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <Carousel>
          {testimonials.map(testimonial => {
            return (
              <Carousel.Item key={testimonial.node.id}>
                <div className="testimonial">
                  <FaQuoteLeft size={24} />
                  <h3 className="fs-5 mb-5">
                    &nbsp; &nbsp; &nbsp;{testimonial.node.review}
                  </h3>
                  <p className="text-end fst-italic fw-normal">
                    - {testimonial.node.name}
                  </p>
                </div>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <small>
          <a
            href="https://www.google.com/search?q=pratham+milan&rlz=1C1ONGR_enIN966IN966&oq=prath&aqs=chrome.1.69i60j69i59l3j69i57j69i60l3.3686j0j7&sourceid=chrome&ie=UTF-8#lrd=0x39f881f1d54fd791:0x756e72c2053132d0,1,,,"
            target="_blank"
            aria-label="Google"
            rel="noreferrer"
          >
            <img
              src="/google.png"
              width="18"
              height="auto"
              alt="Google"
              className="pb-2"
            />
            &nbsp;Google review
          </a>
        </small>
      </Container>
    </section>
  )
}
