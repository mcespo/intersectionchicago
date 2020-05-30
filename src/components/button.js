import React from "react"
import styled from "@emotion/styled"

export default function Button({ text, onPress }) {
  return (
    <ICButton type="button" aria-label={text} onClick={onPress}>
      {text}
    </ICButton>
  )
}

const ICButton = styled.button`
  font-family: "Oswald", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: none;
  background-color: transparent;
  color: var(--blue-100);
  font-weight: 300;
  flex: 1 1 auto;
  padding: 5px 15px;
  border: 2px solid var(--blue-100);
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
    background-color: var(--blue-100);
    height: 105%;
    left: -13%;
    transform: skewX(12deg);
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    color: var(--neutral-900);
    &:after {
      left: -10%;
      width: 120%;
    }
  }
`
