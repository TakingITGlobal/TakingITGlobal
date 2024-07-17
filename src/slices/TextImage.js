import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PrismicRichText } from '@prismicio/react'

export const TextImage = ({ slice }) => {
  const text = (
    <div className="text-wrap">
      {/* {slice.primary.text_image_title && (
        <div className="title">{slice.primary.text_image_title}</div>
      )} */}
      <div className="copy">
        <PrismicRichText field={slice.primary.copy_richtext?.richText} />
      </div>
    </div>
  )
  const image = (
    <div className="image-wrap">
      <GatsbyImage
        image={slice.primary.featured_image?.gatsbyImageData}
        alt={slice.primary.featured_image?.alt || ''}
        className="image"
      />
    </div>
  )
  return (
    <section className="TextImage">
      <div className="Container">
        <div className={slice.primary.image_side ? 'flex-wrap' : 'flex-wrap'}>
          {slice.primary.image_side ? (
            <>
              {text}
              {image}
            </>
          ) : (
            <>
              {image}
              {text}
            </>
          )}
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
  fragment FlexPageDataBodyTextImage on PrismicFlexPageDataBodyTextImage {
    id
    primary {
      text_image_title {
        richText
      }
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
