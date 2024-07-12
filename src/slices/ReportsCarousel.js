import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'
import { Card } from '../components/Card'

export const ReportsCarousel = ({ slice }) => {
  return (
    <section>
      <PrismicRichText field={slice.items.report_card_title?.richText} />
      {slice.items.map((item, index) => (
        <Card
          key={index}
          title={item.report_card_title}
          image={item.report_card_image}
          tagText={item.report_card_tag_text}
          description={item.report_card_description}
          linkText={item.report_card_link_text}
        />
      ))}
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
