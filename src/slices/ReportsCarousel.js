import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { Card } from '../components/Card'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import '../stylesheets/slices/_reports_carousel.scss'

export const ReportsCarousel = ({ slice }) => {
  const totalSlides = slice.items.length

  return (
    <section className="reportsCarousel">
      <CarouselProvider
        totalSlides={totalSlides}
        visibleSlides={3}
        infinite={true}
        step={1}
        isIntrinsicHeight={true}
      >
        <div className="header">
          <PrismicRichText
            field={slice.primary.report_carousel_title?.richText}
          />
          <div className="buttons">
            <ButtonBack className="btn-back">
              <HiArrowLeft size={40.5} />
            </ButtonBack>
            <ButtonNext className="btn-next">
              <HiArrowRight size={40.5} />
            </ButtonNext>
          </div>
        </div>
        <div className="slider">
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
        </div>
      </CarouselProvider>
      <PrismicRichText
        field={slice.primary.report_carousel_cta_text?.richText}
      />
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
