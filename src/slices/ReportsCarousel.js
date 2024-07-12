import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { FaArrowRight } from 'react-icons/fa'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { useWindowWidth } from '@react-hook/window-size'
import { Card } from '../components/Card'

export const ReportsCarousel = ({ slice }) => {
  //   const total_slides = slice.items.length

  //   const width = useWindowWidth()
  //   const slide_width = Math.min(446, width)
  //   const l_margin = Math.max((width - 1440) / 2, 0)
  //   const slider_width = Math.min(
  //     Math.floor((width - l_margin) / slide_width),
  //     total_slides,
  //   )
  return (
    <section>
      <p>testttttttttt</p>
      <Card />
    </section>
  )
}

export const query = graphql`
  fragment FlexPageDataBodyReportsCarousel on PrismicFlexPageDataBodyReportsCarousel {
    id
    primary {
      report_carousel_cta_text {
        richText
      }
    }
    items {
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
