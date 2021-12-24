import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export default function Header() {
  const [navScroll, setNavbar] = useState(false)

  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  //nav scroll
  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    scrollHeader()
    window.addEventListener("scroll", scrollHeader)
  })

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={navScroll ? "navScroll" : "navbar-light"}
    >
      <Container fluid="lg">
        <Link to="/" className="navbar-brand">
          <img
            src="/logo.png"
            className="logo"
            alt="logo"
            width="120"
            height="auto"
          />
          <img
            src="/logo-white.png"
            className="logo-white"
            alt="logo"
            width="120"
            height="auto"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {data.site.siteMetadata.menu.map((link, i) => (
              <Link key={i} to={link.to} className="nav-link">
                {link.name}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
