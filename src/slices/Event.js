import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Event = ({ slice }) => {
  return (
    <section className="Event">
      <div className="Container">
        <div className="flex-wrap">
          <div className="copy">
            <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
          </div>
          <div className="image-wrap">
            <div className="image">
              <GatsbyImage
                image={slice.primary.image?.gatsbyImageData}
                alt={slice.primary.image?.alt || ""}
              />
              <div className="tag">
                <p>{slice.primary.image_tag}</p>
              </div>
            </div>
            <h5 className="lite">{slice.primary.date}</h5>
            <h4>{slice.primary.event_name}</h4>
            <PrismicLink className="btn-arrow" href={slice.primary.link?.url}>
              {slice.primary.link_label}
            </PrismicLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyEvent on PrismicHomepageDataBodyEvent {
    id
    primary {
      copy_richtext {
        richText
      }
      image {
        gatsbyImageData
        alt 
      }
      image_tag
      date(formatString:"MMMM Do, YYYY" )
      event_name 
      link_label
      link {
        url
      }
    }
  }
`
