import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const QuoteCarousel = ({ slice }) => {
  return (
    <section className="QuoteCarousel">
      <div className="Container">
        {slice.items.map((item, index) => (
          <div className="quote-box" key={index}>
            <PrismicRichText
              field={slice.primary.quote_carousel_title?.richText}
            />
            <p className="quote-content">{item.quote_carousel_quote}</p>
            <div className="author-box">
              <div className="author">
                <p>{item.quote_carousel_author}</p>
                <p>{item.quote_carousel_occupation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const query = graphql`
  fragment FlexPageDataBodyQuoteCarousel on PrismicFlexPageDataBodyQuoteCarousel {
    id
    primary {
      quote_carousel_title {
        richText
      }
    }
    items {
      quote_carousel_quote
      quote_carousel_author
      quote_carousel_occupation
    }
  }
`
