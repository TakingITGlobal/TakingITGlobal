import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import BgBlob from '../images/blob-hero.svg'

export const FeatureSlider = ({ slice }) => {
  return (
    <section
      className={
        slice.primary.alternate_layout
          ? 'AlternateFeatureSlider'
          : 'FeatureSlider'
      }
    >
      <div className="Container">
        <div className="flex-wrap">
          <div className="slider">
            <div className="copy-wrap">
              {slice.primary.alternate_layout && (
                <PrismicRichText field={slice.primary.copy_title?.richText} />
              )}
              <PrismicRichText field={slice.primary.copy_richtext?.richText} />
            </div>
          </div>
          <div className="card-grid">
            <div
              className={
                slice.primary.alternate_layout
                  ? 'card nonfeatured-card'
                  : 'card featured-card'
              }
            >
              <div className="card-copy">
                <div className="image-wrap">
                  <span className="featured-label">
                    {slice.primary.featured_label}
                  </span>
                  <GatsbyImage
                    image={slice.items[0].card_image?.gatsbyImageData}
                    alt={slice.items[0].card_image?.alt || ''}
                    className="image"
                  />
                </div>

                <h3>{slice.items[0].card_title}</h3>
                <p>{slice.items[0].card_description}</p>
                {!slice.primary.alternate_layout && (
                  <PrismicLink
                    href={slice.items[0].card_link?.url}
                    className="btn-arrow"
                  >
                    {slice.items[0].card_link_label}
                  </PrismicLink>
                )}
              </div>
            </div>
            {slice.items.slice(1).map((item, index) => (
              <div className="card nonfeatured-card" key={`card:${index}`}>
                <div className="card-copy">
                  <div className="image-wrap">
                    <GatsbyImage
                      image={item.card_image?.gatsbyImageData}
                      alt={item.card_image?.alt || ''}
                      className="image"
                    />
                  </div>
                  <h3>{item.card_title}</h3>
                  <p>{item.card_description}</p>
                  {!slice.primary.alternate_layout && (
                    <PrismicLink
                      href={item.card_link?.url}
                      className="btn-arrow"
                    >
                      {item.card_link_label}
                    </PrismicLink>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFeatureSlider on PrismicPageDataBodyFeatureSlider {
    id
    primary {
      copy_richtext {
        richText
      }
      featured_label
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
  fragment FlexPageDataBodyFeatureSlider on PrismicFlexPageDataBodyFeatureSlider {
    id
    primary {
      copy_richtext {
        richText
      }
      copy_title {
        richText
      }
      featured_label
      alternate_layout
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
