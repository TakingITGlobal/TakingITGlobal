import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const FeatureGrid = ({ slice }) => {
  return (
    <section className="FeatureGrid">
      <div className="Container">
        <div className="center-wrap">
          <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
        </div>
        <div className="grid">
          <div className="card featured-card">
            <div className="card-copy">
              <div className="image-wrap">
                <span className="featured-label">{slice.primary.featured_label}</span>
                <GatsbyImage
                  image={slice.items[0].card_image?.gatsbyImageData}
                  alt={slice.items[0].card_image?.alt || ""}
                  className="image"
                />
              </div>
              <div className="text">
                <h3>{slice.items[0].card_title}</h3>
                <p>{slice.items[0].card_description}</p>
                <PrismicLink href={slice.items[0].card_link?.url} className="btn-arrow">
                  {slice.items[0].card_link_label}
                </PrismicLink>
              </div>
            </div>
          </div>
          {slice.items.slice(1).map((item,index) => (
            <div className="card nonfeatured-card" key={`card:${index}`}>
              <div className="card-copy">
                <div className="image-wrap">
                  <GatsbyImage
                    image={item.card_image?.gatsbyImageData}
                    alt={item.card_image?.alt || ""}
                    className="image"
                  />
                </div>
                <div className="text">
                  <h3>{item.card_title}</h3>
                  <p>{item.card_description}</p>
                  <PrismicLink href={item.card_link?.url}  className="btn-arrow">
                    {item.card_link_label}
                  </PrismicLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-wrap">
          <PrismicLink href={slice.primary.view_all_link?.url}  className="btn-a">
            {slice.primary.view_all_label}
          </PrismicLink>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFeatureGrid on PrismicPageDataBodyFeatureGrid {
    id
    primary {
      copy_richtext {
        richText 
      }
      featured_label
      view_all_label
      view_all_link {
        url
      }
    }
    items {
      card_image {
        gatsbyImageData
        alt 
      }
      card_title
      card_description
      card_link_label
      card_link {
        url 
      }
    }
  }
`
