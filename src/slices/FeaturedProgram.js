import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const FeaturedProgram = ({ slice }) => {
  const text = (
    <div className="text-wrap">
      <div className="copy">
        <h4>{slice.primary.subtitle}</h4>
        <PrismicRichText field={slice.primary.description?.richText}/>
      </div>
    </div>
  )
  const image = (
    <>        
      {slice.primary.section_title}
      <div className="image-wrap">
        <GatsbyImage
          image={slice.primary.image?.gatsbyImageData}
          alt={slice.primary.image?.alt || ""}
          className="image"
        />
      </div>
    </>
  )
  return (
    <section className="FeaturedProgram">
      <div className="Container">
        <div className={slice.primary.image_side ? 'flex-wrap' : 'flex-wrap'}>
          {slice.primary.image_side? 
            <>{text}{image}</> : 
            <>{image}{text}</>
          }
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFeaturedProgram on PrismicPageDataBodyFeaturedProgram {
    id
    primary {
      image_side
      section_title {
        text
      }
      subtitle
      description {
        richtText
      }
      image {
        gatsbyImageData
        alt 
      }
    }
    items {
      accordion_title
      accordion_content {
        richText
      }
    }
  }
`
