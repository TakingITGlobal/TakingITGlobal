import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const Quote = ({ slice }) => {
  return (
    <section className="Quote">
      <div className="Container">
        <div className="quote-box">
          <PrismicRichText field={slice.primary.quote_title?.richText}/>
          <p className="quote-content">{slice.primary.quote}</p>
          <div className="author-box">
            <div className="author-icon">
              <GatsbyImage
                image={slice.primary.author_icon?.gatsbyImageData}
                alt={slice.primary.author_icon?.alt || ""}
                className="icon"
              />
            </div>
            <div className="author">
              <p>{slice.primary.author}</p>
              <p>{slice.primary.occupation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyQuote on PrismicPageDataBodyQuote {
    id
    primary {
      quote_title {
        richText
      }
      quote
      author
      occupation
      author_icon {
        gatsbyImageData
      }
    }
  }
`
