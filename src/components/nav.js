import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import { defaultTheme } from "../utils/themes"

export default function Header() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link activeClassName="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/about/">
            About
          </Link>
        </li>
        <li>
          <Link activeClassName="active" to="/get-involved/">
            Get involved
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  font-family: "Oswald", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  transform: translateY(-2px);
  ul {
    display: flex;
    margin: 0;
    list-style-type: none;
    li {
      margin-bottom: 0;
      a {
        font-family: ${defaultTheme.sansSerif};
        text-decoration: none;
        background-color: transparent;
        color: ${defaultTheme.white};
        font-weight: 300;
        flex: 1 1 auto;
        padding: 5px 15px;
        border: 2px solid transparent;
        text-align: center;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
        transition: 300ms;
        z-index: 1;
        &:after {
          position: absolute;
          transition: 300ms;
          content: "";
          width: 0;
          bottom: -2px;
          background-color: none;
          height: 110%;
          left: -13%;
          transform: skewX(12deg);
          z-index: -1;
        }
        &:hover {
          border-color: ${defaultTheme.white};
          cursor: pointer;
          color: ${defaultTheme.white};
          &:after {
            left: -10%;
            width: 120%;
          }
        }
        &.active {
          cursor: text;
          color: ${defaultTheme.white};
          border-color: ${defaultTheme.white};
          border-top-color: transparent;
          border-right-color: transparent;
          border-left-color: transparent;
          &:after {
            left: -13%;
            width: 0;
          }
        }
      }
    }
  }
`
