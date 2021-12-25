import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function VideoTour() {
  const data = useStaticQuery(graphql`
    {
      allStrapiAboutPage {
        edges {
          node {
            youtube_link
          }
        }
      }
    }
  `)

  const link = data.allStrapiAboutPage.edges[0]

  return (
    <div className="mb-5">
      <div className="mb-3 text-start text-md-center">
        <h3 style={{ color: "#6a6b6d" }}>Take a short video tour</h3>
      </div>

      <div className="video-tour ratio ratio-16x9">
        <iframe
          src={link.node.youtube_link}
          title="YouTube video player"
          style={{ border: "0" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  )
}
