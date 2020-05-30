import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import BackgroundImage from "gatsby-background-image"

export default function HeroImg() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "intersection-hero-bg.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledBackground Tag="section" fluid={image.sharp.fluid}>
      <Header />
    </StyledBackground>
  )
}

const StyledBackground = styled(BackgroundImage)`
  width: 100vw;
  height: 450px;
`
