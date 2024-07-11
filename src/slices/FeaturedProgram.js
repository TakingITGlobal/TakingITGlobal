import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'

export const FeaturedProgram = ({ slice }) => {
  const text = (
    <div className="text-wrap">
      <div className="copy">
        <h4>{slice.primary.subtitle}</h4>
        <PrismicRichText field={slice.primary.description?.richText}/>
          {slice.items.map((item,index) => (
            <div className="accordian" key={`accordion:${index}`}>
              <h3>{item.accordion_title}</h3>
              <PrismicRichText field={item.accordion_content?.richText}/>
            </div>
          ))}
           <PrismicLink
              className="btn-c"
              href={slice.primary.section_link?.url}
            >
              {slice.primary.section_link_label}
            </PrismicLink>
      </div>
    </div>
  )
  const image = (
    <>        
      <h2>{slice.primary.section_title.text}</h2>
      {/* <div className="image-wrap">
        <GatsbyImage
          image={slice.primary.image?.gatsbyImageData}
          alt={slice.primary.image?.alt || ""}
          className="image"
        />
      </div> */}
    </>
  )
  console.log(slice.items[0])
  return (
    <section className="FeaturedProgram">
      <div className="Container">
        <div className={slice.primary.image_side ? 'flex-wrap' : 'flex-wrap'}>
          {slice.primary.image_side? 
            <>{text}{image}</> : 
            <>{image}{text}</>
          }
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyFeaturedProgram on PrismicPageDataBodyFeaturedProgram {
    id
    primary {
      image_side
      section_title {
        text
      }
      description {
        richText
      }
      subtitle
      image {
        gatsbyImageData
        alt 
      }
      section_link {
        url
      }
      section_link_label
    }
    items {
      accordion_title
      accordion_content {
        richText
      }
    }
  }
`
