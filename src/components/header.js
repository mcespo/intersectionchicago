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
  flex-direction: column;
  justify-content: center;
  height: 450px;
  align-items: center;
  padding: 0 5vw;
  z-index: 5;
  @media (min-width: 800px) {
    flex-direction: row;
    height: 100px;
    justify-content: space-between;
  }
  a {
    display: inline-block;
  }
`
