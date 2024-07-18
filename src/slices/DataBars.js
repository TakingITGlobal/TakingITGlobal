import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const DataBars = ({ slice }) => {
  return (
    <section className="DataBars">
      <h1>Foo - Data Bars</h1>
      {slice.id}
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyDataBars on PrismicPageDataBodyDataBars {
    id
  }
`
