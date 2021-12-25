import { graphql, useStaticQuery } from "gatsby"
import React from "react"
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
      <Container className="bg-light pt-5">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <Carousel>
          {testimonials.map(testimonial => {
            return (
              <Carousel.Item key={testimonial.node.id}>
                <div className="testimonial">
                  <img
                    src="/quote.png"
                    width="100"
                    height="auto"
                    className="quote-icon"
                    alt="Quote"
                  />
                  <h3 className="fs-5 mb-5">
                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{testimonial.node.review}
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
          <img
            src="/google.png"
            width="18"
            height="auto"
            alt="Google"
            className="pb-2"
          />
          &nbsp;Google review
        </small>
      </Container>
    </section>
  )
}
