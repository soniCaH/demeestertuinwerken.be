import * as React from "react"

import Layout from "../layouts/index"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const ContactPage = () => (
  <Layout>
    <Seo title="Contacteer ons" />
    <div className="grid-container">
      <h1 className="border--after">Contact</h1>

      <p>
        Voor informatie, offertes of andere vragen kan je altijd terecht op{" "}
        <a href="mailto:y.demeester.tuinwerken@gmail.com">
          y.demeester.tuinwerken@gmail.com
        </a>{" "}
        of op onze facebook pagina:{" "}
        <a
          href="https://www.facebook.com/Demeester.tuinwerken/"
          target="_blank"
        >
          https://www.facebook.com/demeester.tuinwerken/
        </a>
        .
      </p>
      <p>
        Bellen kan op <a href="tel:+320499203592">0499 20 35 92</a>.
      </p>
      <StaticImage
            src="../images/about-camion.jpg"
            alt="Aankoop eigen camion"
            placeholder="blurred"
          />
    </div>
  </Layout>
)

export default ContactPage
