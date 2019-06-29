import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import Bio from "./bio"
import Hero from "./hero/hero"
import styles from "./layout.module.scss"

class Layout extends React.Component {
  render() {
    const { location, title, children, data } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <h1 className={styles.heading}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <Bio></Bio>
          <Hero />
        </div>
      )
    } else {
      header = (
        <h3 className={styles.heading}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(34),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
          className={styles.outer}
        >
          <header className={styles.header}>{header}</header>
          <main className={styles.main}>{children}</main>
        </div>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <script>
          {function() {
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/"
                  })
                }
              })
            }
          }}
        </script>
      </div>
    )
  }
}

export default Layout
