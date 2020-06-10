/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../utils"

import HeroImg from "./heroImg"
import Footer from "./footer"
import Donation from "./donation"

const Layout = ({ children }) => {
  return (
    <>
      <HeroImg />
      <div
        style={{
          margin: `5em auto 0`,
          maxWidth: 700,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Donation />
      </div>
      <Footer />
      <GlobalStyle />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
