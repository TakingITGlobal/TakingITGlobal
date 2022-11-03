import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Support = ({ slice }) => {
  return (
    <section className="Support">
      <div className="Container">
        <div className="flex-wrap w-24">
          <div className="copy-wrap w-8">
            <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
          </div>
          <div className="image-wrap w-11">
            <GatsbyImage
              image={slice.primary.image?.gatsbyImageData}
              alt={slice.primary.image?.alt || ""}
            />

          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodySupport on PrismicHomepageDataBodySupport {
    id
    primary {
      copy_richtext {
        richText
      }
      image {
        gatsbyImageData
        alt 
      }
    }
  }
`
