import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const TextCallout = ({ slice }) => {
  return (
    <section className="TextCallout">
      <div className="text">
        <PrismicRichText field={slice.primary.text_callout_title?.richText} />

        <PrismicRichText
          field={slice.primary.text_callout_description?.richText}
        />
      </div>
    </section>
  )
}

export const query = graphql`
  fragment FlexPageDataBodyTextCallout on PrismicFlexPageDataBodyTextCallout {
    id
    primary {
      text_callout_title {
        richText
      }
      text_callout_description {
        richText
      }
    }
  }
`
