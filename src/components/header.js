import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Logo from "./logo"
import Nav from "./nav"

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <Nav />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 5vw;
  height: 100px;
  z-index: 5;
  justify-content: space-between;
  a {
    display: inline-block;
  }
`
