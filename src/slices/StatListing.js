import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

export const StatListing = ({ slice }) => {
  const isHorizontal = slice.primary.horizontal
  return (
    <section className={isHorizontal ? 'horizontalStatListing' : 'StatListing'}>
      <div className="bg-blob" />
      <div className="Container">
        <div className="flex-wrap">
          <div className="text-wrap">
            <PrismicRichText field={slice.primary.copy_richtext?.richText} />
          </div>
          <div className="list-wrap">
            {slice.items.map((item, index) => (
              <div className="stat" key={`stat:${index}`}>
                <span className="impact">{item.stat}</span>
                <p>{item.stat_description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyStatListing on PrismicPageDataBodyStatListing {
    id
    primary {
      copy_richtext {
        richText
      }
    }
    items {
      stat
      stat_description
    }
  }
  fragment FlexPageDataBodyStatListing on PrismicFlexPageDataBodyStatListing {
    id
    primary {
      horizontal
      copy_richtext {
        richText
      }
    }
    items {
      stat
      stat_description
    }
  }
`
