import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Acknowledgements = ({ slice }) => {
  return (
    <section className="Acknowledgements">
      <div className="Container">
        <div className="flex-wrap">
          <div className=" copy-wrap w-12">
            <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
          </div>
          <div className="app-col">
            <GatsbyImage
              image={slice.primary.image?.gatsbyImageData}
              alt={slice.primary.image?.alt || ""}
            />
            <div className="app">
              <div className="qr">
                <GatsbyImage
                  image={slice.primary.qr_code?.gatsbyImageData}
                  alt={slice.primary.qr_code?.alt || ""}
                />
              </div>
              <div className="app_images">
                <StaticImage
                  src="../images/app-apple.png"
                  alt=""
                />
                <StaticImage
                  src="../images/app-google.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyAcknowledgements on PrismicHomepageDataBodyAcknowledgements {
    id
    primary {
      copy_richtext {
        richText 
      }
      image {
        gatsbyImageData
        alt
      }
      qr_code {
        gatsbyImageData
        alt
      }
    }
  }
`
