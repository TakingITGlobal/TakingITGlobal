import * as React from 'react'
import { graphql } from 'gatsby'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

export const ReportsCarousel = ({ slice }) => {
  return (
    <div>
      <p>test</p>
    </div>
  )
}

export const query = graphql`
  fragment AboutPageDataBodyReportsCarousel on PrismicAboutPageDataBodyReportsCarousel {
    id
    primary {
      report_carousel_title
      report_carousel_cta_text {
        richText
      }
    }
    items {
      availability
      report_card_image {
        gatsbyImageData
        alt
        url
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
