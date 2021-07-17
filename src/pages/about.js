import * as React from "react"

import Layout from "../layouts/index"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="Over ons - Yannis Demeester" />
    <div className="grid-container">
      <h1 className="border--after">Wie zijn wij?</h1>

      <h2 className="border--after">Yannis Demeester</h2>

      <p>
        Vanaf mijn 12 jaar volgde ik de opleiding "Tuinaanleg" in de
        Tuinbouwschool Horteco in Vilvoorde. Na 7 jaar opleiding wist ik het
        zeker: Dit het beroep voor mij...
      </p>
      <p>
        Mijn eerste jaren heb ik ervaring opgedaan in een bedrijf
        gespecialiseerd in de aanleg en het onderhoud van sportvelden. Samen met
        de ervaring groeiden ook de kriebels om een eigen bedrijf op te starten.
      </p>

      <h2 className="border--after">Demeester Tuinwerken</h2>

      <p>
        In 2015 heb ik de stap gezet om mijn eigen bedrijf te starten en mijn
        droom waar te maken.
      </p>

      <p>
        @TODO: Aanvullen met foto's van camionetten, Tekstje hierboven wat
        verder uitwerken, samenwerkingen wat beschrijven uitklaren "Wie zijn
        wij" vs "Wie ben ik".
      </p>
    </div>
  </Layout>
)

export default AboutPage
