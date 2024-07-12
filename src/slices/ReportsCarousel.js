import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { Card } from '../components/Card'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useWindowWidth } from '@react-hook/window-size'

export const ReportsCarousel = ({ slice }) => {
  const total_slides = slice.items.length
  const width = useWindowWidth()
  const slide_width = Math.min(446, width)
  const l_margin = Math.max((width - 1440) / 2, 0)
  const slider_width = Math.min(
    Math.floor((width - l_margin) / slide_width),
    total_slides,
  )

  return (
    <section>
      <CarouselProvider
        naturalSlideWidth={slide_width + 20}
        totalSlides={total_slides}
        visibleSlides={slider_width}
        infinite={true}
        step={1}
        isIntrinsicHeight={true}
      >
        <div className="copy-wrap">
          <PrismicRichText
            field={slice.primary.report_carousel_title?.richText}
          />
          <ButtonBack className="btn-back">Back</ButtonBack>
          <ButtonNext className="btn-next">Next</ButtonNext>
        </div>
        <Slider
          classNameTray="slider-tray"
          classNameTrayWrap="slider-tray-wrap"
        >
          {slice.items.map((item, index) => (
            <Slide
              index={index}
              key={`carousel-${index}`}
              tabIndex={-1}
              classNameHidden="hidden-slide"
            >
              <Card
                title={item.report_card_title}
                image={item.report_card_image}
                tagText={item.report_card_tag_text}
                description={item.report_card_description}
                linkText={item.report_card_link_text}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </section>
  )
}

export const query = graphql`
  fragment FlexPageDataBodyReportsCarousel on PrismicFlexPageDataBodyReportsCarousel {
    id
    primary {
      report_carousel_title {
        richText
      }
      report_carousel_cta_text {
        richText
      }
    }
    items {
      report_card_image {
        gatsbyImageData
        alt
      }
      report_card_tag_text {
        richText
      }
      report_card_title {
        richText
      }
      report_card_description {
        richText
      }
      report_card_link_text {
        richText
      }
    }
  }
`
