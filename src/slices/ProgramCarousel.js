import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import { FaArrowRight } from 'react-icons/fa'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import useWindowDimensions  from "../components/useWindowDimensions"
import useInstagramData from "../components/useInstagramData"

export const ProgramCarousel = ({ slice }) => {
  const total_slides = slice.items.length;
  const slide_width = 385;
  const slide_height = 577;
  const {height, width} = useWindowDimensions();

  const l_margin = Math.max(((width - 1440) / 2), 0);
  const slider_width = Math.min(Math.floor( (width - l_margin) / slide_width ), total_slides);
  return (
    <section className="ProgramCarousel">
      <div className="Container">
        <div className="copy-wrap">
          <PrismicRichText field={slice.primary.copy_richtext?.richText}/>
        </div>
        <div className="carousel">
          <CarouselProvider
            naturalSlideWidth={slide_width + 20}
            naturalSlideHeight={slide_height}
            totalSlides={total_slides}
            visibleSlides={slider_width}
            infinite={true}
            step={1}
            isIntrinsicHeight={true}
          >
            <ButtonNext className="btn-next" ><FaArrowRight aria-label="right arrow" /></ButtonNext>
            <Slider classNameTray="slider-tray" classNameTrayWrap="slider-tray-wrap">
              {slice.items.map((item,index) => (
                <Slide index={index} key={`carousel: ${index}`} tabIndex={-1} classNameHidden="hidden-slide">
                  <div className="card">
                    <PrismicLink className="image-box" href={item.card_link?.url} id={`child-${index}`} tabIndex={0} >
                      <GatsbyImage
                        image={item.card_image?.gatsbyImageData}
                        alt={item.card_image?.alt || ""}
                      />
                    </PrismicLink>
                    <div className="copy">
                      <h3>{item.card_title}</h3>
                      <p><b>{item.card_subtitle}</b></p>
                      <p>{item.card_description}</p>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>   
          </CarouselProvider>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment PageDataBodyProgramCarousel on PrismicPageDataBodyProgramCarousel {
    id
    primary {
      copy_richtext {
        richText 
      }
      closed_label
      view_all_label
      view_all_link {
        url
      }
    }
    items {
      availability
      card_image {
        gatsbyImageData
        alt
        url 
      }
      card_title
      card_subtitle
      card_description
      card_link_label
      card_link {
        url 
      }
    }
  }
`
