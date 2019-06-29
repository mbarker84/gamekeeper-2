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

    const header = (
      <div>
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
              {title}
            </Link>
          </h1>
          <Bio></Bio>
        </div>
        <Hero />
      </div>
    )

    return (
      <div>
        <div className={styles.outer}>
          <header className={styles.header}>{header}</header>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
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
