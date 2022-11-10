import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const TextImage = ({ slice }) => {
  const text = (
    <div className="text-wrap">
      <div className="copy">
        <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
      </div>
    </div>
  )
  const image = (
    <div className="image-wrap">
      <GatsbyImage
        image={slice.primary.featured_image?.gatsbyImageData}
        alt={slice.primary.featured_image?.alt || ""}
        className="image"
      />
    </div>
  )
  return (
    <section className="TextImage">
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
  fragment HomepageDataBodyTextImage on PrismicHomepageDataBodyTextImage {
    id
    primary {
      image_side
      featured_image {
        gatsbyImageData
        alt 
      }
      copy_richtext {
        richText
      }
    }
  }
  fragment PageDataBodyTextImage on PrismicPageDataBodyTextImage {
    id
    primary {
      image_side
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
