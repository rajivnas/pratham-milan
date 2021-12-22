import React from "react"
import { BgImage } from "gbimage-bridge"

export default function Background({ image, styleClass, title, children }) {
  return (
    <>
      <BgImage image={image} className={styleClass}>
        <h1 className="title text-white text-center display-5 fw-bold">
          {title}
        </h1>
        {children}
      </BgImage>
    </>
  )
}

Background.defaultProps = {
  title: "Default Title",
  styleClass: "default-background",
}
