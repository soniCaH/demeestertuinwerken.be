import * as React from "react"

import Layout from "../layouts/index"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="Over ons - Wie zijn wij" />
    <div className="grid-container">
      <h1 className="border--after">Wie zijn wij</h1>

      <p>Wij zijn de Yannis hein!@</p>
    </div>
  </Layout>
)

export default AboutPage
