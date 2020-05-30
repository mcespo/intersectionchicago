import React from "react"
import styled from "@emotion/styled"

export default function Footer() {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} Intersection Chicago
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;
  font-size: 0.7em;
  margin: 5em 0 3em;
`
// .slide:hover,
// .slide:focus {
//   box-shadow: inset 6.5em 0 0 0 var(--hover);
// }
