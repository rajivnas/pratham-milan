import React from "react"
import About from "../components/home/About"
import Achievement from "../components/home/Achievement"
import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import Testimonials from "../components/shared/Testimonials"
import Layout from "../components/shared/Layout"
import Seo from "../components/shared/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Best banquet hall in Howrah" />
      <Hero />
      <About />
      <Services />
      <Achievement />
      <Testimonials />
    </Layout>
  )
}
