import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Hero() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        )
      }}
    />
  )
}

const query = graphql`
  query {
    file(absolutePath: { regex: "/banner.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
