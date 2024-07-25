import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import { FaChevronDown } from 'react-icons/fa'
  
export const FeaturedProgram = ({ slice }) => {
  function Accordion({id, children, title}) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const toggleAccordion = () => setIsExpanded(!isExpanded)

    return (
      <div className="accordion">
        <button
          id={`${id}-header`}
          aria-controls={`${id}-panel`}
          aria-expanded={isExpanded}
          onClick={toggleAccordion}
          className={isExpanded ? 'open' : ''}
        >  
          <span className="title">{title}</span> <FaChevronDown/>
        </button>
        <div
          className="accordion-panel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-header`}
          aria-hidden={!isExpanded}
        >
          {children}
        </div>
      </div>
    )
  }
  const text = (
    <div className="text-wrap">
      <div className="copy">
        <h4>{slice.primary.subtitle}</h4>
        <PrismicRichText field={slice.primary.description?.richText}/>
          {slice.items.map((item,index) => (
            <Accordion id={`accordion-${index}`} title={item.accordion_title} key={`accordion:${index}`}>
              <div className="accordion-content">
                <PrismicRichText field={item.accordion_content?.richText}/>
              </div>
            </Accordion>
          ))}
           <PrismicLink
              className="btn-primary"
              href={slice.primary.section_link?.url}
            >
              {slice.primary.section_link_label}
            </PrismicLink>
      </div>
    </div>
  )
  const image = (
    <>        
      <div className="image-wrap">
        <h2>{slice.primary.section_title.text}</h2>
        <GatsbyImage
          image={slice.primary.image?.gatsbyImageData}
          alt={slice.primary.image?.alt || ""}
          className="image"
        />
      </div>
    </>
  )
  return (
    <section className="FeaturedProgram">
      <div className="Container">
        <div className="flex-wrap">
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
