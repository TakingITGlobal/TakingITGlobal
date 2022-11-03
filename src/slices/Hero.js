import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import BgBlob from '../images/blob-hero.svg'
export const Hero = ({ slice }) => {
  return (
    <section className="Hero">
      <div className="Container">
        <div className="mosaic-grid">
          <div className="grid-item">
            {slice.primary.featured_image?.gatsbyImageData && 
              <GatsbyImage
                image={slice.primary.featured_image?.gatsbyImageData}
                alt={slice.primary.featured_image?.alt || ""}
                className="grid-image top_1"
              />
            }
          </div>
          <div className="grid-item grid-text">
            <div className="text">
              <PrismicRichText 
                field={slice.primary.hero_richtext?.richText}
              />
            </div>
          </div>
          <div className="grid-item r-align">
            {slice.primary.subimage_1?.gatsbyImageData && 
              <GatsbyImage
                image={slice.primary.subimage_1?.gatsbyImageData}
                alt={slice.primary.subimage_1?.alt || ""}
                className="grid-image sub_1"
              />
            }
          </div>
          <div className="grid-item">
            {slice.primary.subimage_2?.gatsbyImageData && 
              <GatsbyImage
                image={slice.primary.subimage_2?.gatsbyImageData}
                alt={slice.primary.subimage_2?.alt || ""}
                className="grid-image sub_2"
              />
            }
          </div>
        </div>     
      </div>
      <div className="bg-shape blob-hero">
        <img src={BgBlob}/>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyHero on PrismicHomepageDataBodyHero {
    id
    primary {
      hero_richtext {
        richText 
      }
      featured_image {
        gatsbyImageData
        alt
      }
      subimage_1 {
        gatsbyImageData
        alt
      }
      subimage_2 {
        gatsbyImageData
        alt
      }
    }
  }
`
