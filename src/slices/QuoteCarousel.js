import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export const QuoteCarousel = ({ slice }) => {
  const total_slides = slice.items.length

  return (
    <section className="QuoteCarousel">
      <div className="Container">
        <CarouselProvider
          naturalSlideWidth={3}
          naturalSlideHeight={1}
          totalSlides={total_slides}
          visibleSlides={1}
        >
          <Slider>
            {slice.items.map((item, index) => (
              <Slide
                index={index}
                key={`carousel: ${index}`}
                tabIndex={-1}
                classNameHidden="hidden-slide"
              >
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
              </Slide>
            ))}
          </Slider>
          <div className="button-group">
            <ButtonBack className="button-back">
              <FaArrowLeft />
            </ButtonBack>
            <DotGroup className="dot-group" />
            <ButtonNext className="button-next">
              <FaArrowRight />
            </ButtonNext>
          </div>
        </CarouselProvider>
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
