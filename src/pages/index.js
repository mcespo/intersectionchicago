import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Intersection</h1>
    <p>
      Intersection is a Chicago-based nonprofit dedicated to creating change
      through dialogue.
    </p>
    <p>
      Prejudice is defined as “Preconceived opinion that is not based on reason
      or actual experience.” Intersection events facilitate actual experience in
      an effort to replace prejudicial thoughts with genuine relationship and
      engagement with another person. A study published in Science found that
      “Perspective-taking, ‘imagining the world from another’s vantage point,’
      is one thought process theorized to be especially cognitively active that
      has has been shown to reduce prejudice…” By encouraging dialogue among
      participants, we are also encouraging our participants to imagine one
      another’s experiences. It is by shedding light on these challenging
      topics, acknowledging their existence and exploring the controversy, that
      we can begin to build bridges of understanding and mutual respect.
    </p>
    <p>
      Our primary program is the{" "}
      <a href="http://humanlibrarychicago.org/">
        Human Library Chicago Chapter
      </a>
      . A Human Library is an event that aims to create dialogue and
      understanding between people. Individuals volunteer as human ‘books’ and
      participants in the event can ‘read’ the book- meaning they would have a
      one on one conversation with the volunteer and share in a dialogue about
      that individual’s experience. Books are volunteers from all walks of life
      who have experienced discrimination based on race, religion, sexual
      preference, class, gender identity, sex, age, lifestyle choices,
      disability and other aspects of their life. The Human Library provides the
      opportunity for the community to share and understand the experiences of
      others in their community.
    </p>
  </Layout>
)

export default IndexPage
