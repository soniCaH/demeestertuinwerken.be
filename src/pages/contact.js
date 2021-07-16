import * as React from "react"

import Layout from "../layouts/index"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Contacteer ons" />
    <div className="grid-container">
      <h1 className="border--after">Contact</h1>

      <p>Bel me, schrijf me, laat me vlug iets weten!</p>
    </div>
  </Layout>
)

export default ContactPage
