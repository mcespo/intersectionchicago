/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import HeroImg from "./heroImg"
import Footer from "./footer"
import "./layout.css"
import Donation from "./donation"

const Layout = ({ children }) => {
  return (
    <StyledContainer>
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
    </StyledContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledContainer = styled.div`
  p {
    a {
      color: var(--neutral-100);
      font-size: 0.75;
      font-weight: bold;
      text-decoration-color: var(--blue-100);
      transition: 300ms;
      &:hover {
        color: var(--blue-100);
        text-decoration-color: var(--neutral-100);
      }
    }
  }
`

export default Layout
