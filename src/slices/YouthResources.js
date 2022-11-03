import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const YouthResources = ({ slice }) => {
  return (
    <section className="YouthResources">
      <div className="Container">
        <div className="center-align">
          <PrismicRichText field={slice.primary.header_richtext?.richText}/>
        </div>
        <div className="card-grid">
          {slice.items.map((item,index) => (
            <div className="card" key={`youth: ${index}`}>
              <div className="card-image">
                {item.item_image?.gatsbyImageData &&
                  <GatsbyImage
                    image={item.item_image?.gatsbyImageData}
                    alt={item.item_image?.alt || ""}
                  />
                }
              </div>
              <div className="card-copy">
                <h3>{item.item_header}</h3>
                <p>{item.item_copy}</p>
                <PrismicLink className="btn-arrow" href={item.item_button_link?.url}>
                  {item.item_button_label}
                </PrismicLink>
              </div>
            </div>    
          ))}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyYouthResources on PrismicHomepageDataBodyYouthResources {
    id
    primary {
      header_richtext {
        richText
      }
    }
    items {
      item_image {
        gatsbyImageData
        alt 
      }
      item_header
      item_copy
      item_button_label
      item_button_link {
        url
      }
    }
  }
`
