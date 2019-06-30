import React, { Fragment } from "react"

import Hero from "./hero/hero"
import Header from "./header/header"
import styles from "./layout.module.scss"

class Layout extends React.Component {
  renderHero() {
    const { children, location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname === rootPath) {
      return (
        <Fragment>
          <Hero></Hero>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
        </Fragment>
      )
    }

    return (
      <div className={styles.wrapperArticle}>
        <main className={styles.main}>{children}</main>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className={styles.outer}>
          <Header></Header>
          {this.renderHero()}
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
