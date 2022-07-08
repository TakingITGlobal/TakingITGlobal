import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Template = ({ slice }) => {
  return (
    <section className="Template">
      <div className="Container">
        
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyTemplate on PrismicHomepageDataBodyTemplate {
    id
  }
`
