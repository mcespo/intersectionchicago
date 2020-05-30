import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

export default function Header() {
  return (
    <StyledNav>
      <ul>
        {/* <li>
          <button>
            <span></span>
          </button>
        </li> */}
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
        text-decoration: none;
        background-color: transparent;
        color: var(--neutral-900);
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
          background-color: var(--neutral-900);
          height: 105%;
          left: -13%;
          transform: skewX(12deg);
          z-index: -1;
        }
        &:hover {
          border-color: var(--neutral-900);
          cursor: pointer;
          color: #5bcaff;
          &:after {
            left: -10%;
            width: 120%;
          }
        }

        &.active {
          cursor: text;
          color: var(--neutral-900);
          border-color: var(--neutral-900);
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
  button {
    display: block;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    font-size: 0;
    border: 5px solid #333;
    cursor: pointer;
    background-color: #333;
    span {
      display: block;
      transform: scale(1.2);
      position: absolute;
      width: 80%;
      top: 50%;
      left: 10%;
      right: 0;
      height: 2px;
      border-radius: 4px;
      background-color: #ffffff;
      /* animation: from-x-to-menu-center 600ms; */
      &:before {
        position: absolute;
        border-radius: 4px;
        display: block;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        content: "";
        transform: translateY(-6px);
        /* animation: from-x-to-menu-top 600ms; */
      }
      &:after {
        position: absolute;
        border-radius: 4px;
        display: block;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #ffffff;
        content: "";
        transform: translateY(6px);
        /* animation: from-x-to-menu-bottom 600ms; */
      }
    }
  }
`

// animation-duration: 600ms;
//     animation-timing-function: ease;
//     animation-delay: 0s;
//     animation-iteration-count: 1;
//     animation-direction: normal;
//     animation-fill-mode: none;
//     animation-play-state: running;
//     animation-name: from-x-to-menu-center;
