import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

export default function Achievement() {
  const data = useStaticQuery(graphql`
    {
      allStrapiAchievements {
        edges {
          node {
            id
            quantity
            details
          }
        }
      }
    }
  `)

  const achievements = data.allStrapiAchievements.edges

  return (
    <section className="achievement py-5">
      <Container className="text-center py-3 py-md-5">
        <Row>
          {achievements.map(achievement => {
            return (
              <Col
                sm={4}
                className="my-1 mb-3 mb-md-0"
                key={achievement.node.id}
              >
                <h2>
                  {achievement.node.quantity}
                  <span>+</span>
                </h2>
                <p>{achievement.node.details}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
