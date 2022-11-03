import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Gallery = ({ slice }) => {
  return (
    <section className="Gallery">
      <div className="Container">
        <div className="header-copy w-11">
          <PrismicRichText field={slice.primary.header_richtext?.richText}/>
        </div>
        <div className="gallery-grid">
          {slice.items.map((item,index) => (
            <div className={`grid-item gw-${item.image_width}`} key={`gallery: ${index}`}>
              {item.item_image?.gatsbyImageData &&
                <GatsbyImage
                  image={item.item_image?.gatsbyImageData}
                  alt={item.item_image?.alt || ""}
                  className="grid-image"
                />
              }
              <div className="grid-tag" >
                {item.item_tag}
              </div>
            </div>
          ))}
        </div>
        <div className="center-align max-content">
          <PrismicLink href={slice.primary.button_link?.url} className="btn-a">
            {slice.primary.button_label}
          </PrismicLink>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyGallery on PrismicHomepageDataBodyGallery {
    id
    primary {
      header_richtext {
        richText
      }
      button_label 
      button_link {
        url
      }
    }
    items {
      item_image {
        gatsbyImageData
        alt
      }
      item_tag
      image_width
    }
  }
`
