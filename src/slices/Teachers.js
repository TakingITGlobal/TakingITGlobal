import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Teachers = ({ slice }) => {
  return (
    <section className="Teachers">
      <div className="Container">
        <div className='flex-wrap'>
          <div className="image-wrap">
            <GatsbyImage
              image={slice.primary.featured_image?.gatsbyImageData}
              alt={slice.primary.featured_image?.alt || ""}
              className="image"
            />
          </div>
          <div className="copy-wrap">
            <div className="richtext-wrap">
              <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyTeachers on PrismicHomepageDataBodyTeachers {
    id
    primary {
      featured_image {
        gatsbyImageData
        alt 
      }
      copy_richtext {
        richText
      }
    }
  }
`
