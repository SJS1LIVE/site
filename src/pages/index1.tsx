// import * as React from "react"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/sjs1.jpg"
      alt="SJS1 Hero Image"
    />
    <h1>Test</h1>
  </Layout>
)
  
  export default IndexPage
  