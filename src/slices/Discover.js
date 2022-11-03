import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Discover = ({ slice }) => {
  return (
    <section className="Discover">
      <div className="Container">
        <div className="center-align">
          <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
        </div>
        <div className="card-row">
          {slice.items.map((item,index) => (
            <div className="card" key={`discover-card:${index}`}>
              <h3>{item.card_header}</h3>
              <PrismicLink
                className="btn-c"
                href={item.button_link?.url}
              >
                {item.button_label}
              </PrismicLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyDiscover on PrismicHomepageDataBodyDiscover {
    id
    primary {
      copy_richtext {
        richText 
      }
    }
    items {
      card_header
      button_label
      button_link {
        url
      }
    }
  }
`
