import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { Card } from '../components/Card'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { useWindowWidth } from '@react-hook/window-size'

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

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
    <section className="reportsCarousel">
      <CarouselProvider
        naturalSlideWidth={slide_width}
        totalSlides={total_slides}
        visibleSlides={slider_width}
        infinite={true}
        step={1}
        isIntrinsicHeight={true}
      >
        <div className="header">
          <PrismicRichText
            field={slice.primary.report_carousel_title?.richText}
          />
          <div
            className={
              total_slides === slider_width ? 'buttonsFaded' : 'buttons'
            }
          >
            <ButtonBack className="btn-back">
              <HiArrowLeft size={40.5} />
            </ButtonBack>
            <ButtonNext className="btn-next">
              <HiArrowRight size={40.5} />
            </ButtonNext>
          </div>
        </div>
        <div className="slider">
          <Slider>
            {slice.items.map((item, index) => (
              <Slide index={index} key={`carousel-${index}`} tabIndex={-1}>
                <Card
                  title={item.report_card_title}
                  image={item.report_card_image}
                  tagText={item.report_card_tag_text}
                  description={item.report_card_description}
                  linkText={item.report_card_link_text}
                  linkUrl={item.report_card_link}
                  auditLinkText={item.report_card_audit_link_text?.richText}
                  auditLinkUrl={item.report_card_audit_link?.url}
                />
              </Slide>
            ))}
          </Slider>
        </div>
      </CarouselProvider>

      <div className="seeOtherBtn">
        <PrismicLink href={slice.primary.report_carousel_cta_link?.url}>
          <PrismicRichText
            field={slice.primary.report_carousel_cta_text?.richText}
          />
        </PrismicLink>
      </div>
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
      report_carousel_cta_link {
        url
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
      report_card_link {
        url
      }
      report_card_audit_link_text {
        richText
      }
      report_card_audit_link {
        url
      }
    }
  }
`
