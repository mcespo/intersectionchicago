import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

export default function GetInvolved() {
  return (
    <Layout>
      <SEO title="Get Involved" />
      <h1>Get Involved</h1>
      <h2>Join our newsletter</h2>
      <p>
        Intersection cannot function without the help and support from the
        community. We ask that you help us on our mission to bring change for
        the better. One of the best ways to assist is by volunteering to
        upcoming events as they get posted in our newsletter.
      </p>
      <p>
        Please consider subscribing to our newsltter and join us for any Human
        Library events or other partnerships as they get posted. Please know
        that we only send out emails sparingly and do not share your email
        address with anyone.
      </p>
      <Newsletter />
    </Layout>
  )
}
