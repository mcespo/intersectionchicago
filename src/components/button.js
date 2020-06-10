import React from "react"
import styled from "@emotion/styled"
import { defaultTheme } from "../utils/themes"

export default function Button({ text, clickEvent }) {
  return (
    <StyledButton type="button" aria-label={text} onClick={clickEvent}>
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  font-family: ${defaultTheme.sansSerif};
  text-decoration: none;
  background-color: transparent;
  color: ${defaultTheme.darkBlue};
  font-weight: 300;
  flex: 1 1 auto;
  padding: 5px 15px;
  border: 2px solid ${defaultTheme.darkBlue};
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
    background-color: ${defaultTheme.darkBlue};
    height: 110%;
    left: -13%;
    transform: skewX(12deg);
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    color: ${defaultTheme.white};
    &:after {
      left: -10%;
      width: 120%;
    }
  }
`
