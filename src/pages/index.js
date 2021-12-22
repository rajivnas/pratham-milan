import React from "react"
import About from "../components/home/About"
import Achievement from "../components/home/Achievement"
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import Testimonials from "../components/home/Testimonials"
import Layout from "../components/shared/Layout"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Achievement />
      <Testimonials />
    </Layout>
  )
}
