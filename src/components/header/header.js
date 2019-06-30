import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Bio from "../bio"

import styles from "./header.module.scss"

export default function Header() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <header className={styles.header}>
            <div className={styles.headerContent}>
              <h1 className={styles.heading}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`/`}
                >
                  {data.site.siteMetadata.title}
                </Link>
              </h1>
              <Bio></Bio>
            </div>
          </header>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
