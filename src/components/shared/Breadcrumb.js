import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

export default function Breadcrumb({ name }) {
  return (
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        </ol>
      </nav>
    </Container>
  )
}
