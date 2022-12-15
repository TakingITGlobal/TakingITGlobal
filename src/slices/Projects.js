import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import { FaArrowRight } from "react-icons/fa"

export const Projects = ({ slice }) => {
  const image = (
    <div className="image">
      <div className="image-wrap">
        <div className={`impact-bubble ${slice.primary.image_side ? "right" : "left"}`}>
          <div className="impact-copy">
            <PrismicRichText field={slice.primary.impact_richtext?.richText}/>
          </div>
        </div>
        {slice.primary.image?.gatsbyImageData &&
          <GatsbyImage
            image={slice.primary.image?.gatsbyImageData}
            alt={slice.primary.image?.alt || ""}
          />
        }
      </div>
    </div>
  )
  const text = (
    <div className="copy-wrap">
      <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
      {slice.items.map((item,index) => (
        <div className="card" key={`programs: ${index}`}>
          <div className="card-copy">
            {item.item_image?.gatsbyImageData &&
              <GatsbyImage
                image={item.item_image?.gatsbyImageData}
                alt={item.item_image?.alt || ""}
              />
            }
            <h5>{item.item_header}</h5>
            <p>{item.item_copy}</p>
            <PrismicLink className="btn-arrow" href={item.item_link?.url}>
              {item.item_link_label}
            </PrismicLink>
          </div>
        </div>
      ))}
      <div className="btn-b">
        <PrismicLink href={slice.primary.button_link?.url}>
          {slice.primary.button_label}
        </PrismicLink>
      </div>
    </div>
  )
  const styles = {
    backgroundColor: `${slice.primary.background_colour}`,
    backgroundImage: `url(${slice.primary.background_image?.url})`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`
  }
  return (
    <section className="Projects" style={styles}>
      <div className="Container">
        <div className={slice.primary.image_side ?  "flex-wrap right" :  "flex-wrap left"}>
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
  fragment HomepageDataBodyProjects on PrismicHomepageDataBodyProjects {
    id
    primary {
      image_side
      background_colour
      background_image {
        url
      }
      impact_richtext {
        richText
      }
      image {
        gatsbyImageData
        alt 
      }
      copy_richtext {
        richText
      }
      button_link {
        url 
      }
      button_label
    }
    items {
      item_image {
        gatsbyImageData
        alt 
      }
      item_header
      item_copy
      item_link {
        url
      }
      item_link_label
    }
  }
`
