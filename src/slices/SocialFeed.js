import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { PrismicRichText,PrismicLink } from '@prismicio/react'
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram, FaArrowRight} from 'react-icons/fa'
import Moment from 'react-moment'
import Socials from '../components/Socials'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useWindowWidth } from '@react-hook/window-size/throttled'
import useInstagramData from "../utils/useInstagramData"
import useMediumData from "../utils/useMediumData"

export const SocialFeed = ({ slice }) => {
  const instaNodes = useInstagramData() || [];
  const mediumNodes = useMediumData() || [];
  const socials = Socials().data;

  function getImageUrl(str) {
    const result = str.match(new RegExp("src=\"" + "(.*?)" + "\" "));
    const resultFound = result[1]
    let url;
    try {
      url = new URL(resultFound)
    } catch (_){
      return null;
    }
    return url.href;
  }

  function trim(social){
    var foo = social[0];
    return foo == "@" || foo == "/" ? social.slice(1) : social;
  }

  const total_slides = instaNodes.length || 0;
  const width = useWindowWidth();

  const slide_width = Math.min(width, 385);
  const slide_height = 577;
  
  const mediums = [...mediumNodes];
  const slides = [...instaNodes];
  const l_margin = Math.max(((width - 1440) / 2), 0);
  const [sliderWidth, setSliderWidth] = React.useState();
  React.useEffect(() => {
    setSliderWidth(Math.min(Math.floor( (width - l_margin) / slide_width ), total_slides));
  }, [width])
  
  return (
    <section className="SocialFeed">
      <div className="Container">
        <h4>{slice.primary.subheader}</h4>
        <div className="instagram-feed">
          <h2>{slice.primary.header}</h2>
          <PrismicRichText field={slice.primary.medium_header?.richText}/>
          <CarouselProvider
            naturalSlideWidth={slide_width + 20}
            naturalSlideHeight={slide_height}
            totalSlides={mediums.length}
            visibleSlides={sliderWidth}
            infinite={true}
            step={1}
            isIntrinsicHeight={true}
          >
            <ButtonNext className="btn-next" ><FaArrowRight aria-label="Next Button for Social Carousel" /></ButtonNext>
            <Slider aria-label="Instagram Slider" classNameTray="slider-tray" classNameTrayWrap="slider-tray-wrap">
              {mediums.map((item,index) => {
                return (
                <Slide index={index} key={`carousel: ${index}`} tabIndex={-1} classNameHidden="hidden-slide">
                  <div className="card">
                    <PrismicLink className="image-box" href={item.link} id={`child-${index}`} tabIndex={0} >
                      <Image alt="" src={getImageUrl(item.content?.encoded)}/>
                    </PrismicLink>
                    <div className="copy">
                      {/* <p><strong>{item.likes} likes</strong></p> */}
                      <p className="caption">{item.title}</p>
                      <Moment fromNow className="date" parse="">{item.isoDate}</Moment>
                    </div>
                  </div>
                </Slide>
              )})}
            </Slider>
            
          </CarouselProvider>

          <PrismicRichText field={slice.primary.instagram_header?.richText}/>
          <CarouselProvider
            naturalSlideWidth={slide_width + 20}
            naturalSlideHeight={slide_height}
            totalSlides={slides.length}
            visibleSlides={sliderWidth}
            infinite={true}
            step={1}
            isIntrinsicHeight={true}
          >
            <ButtonNext className="btn-next" ><FaArrowRight aria-label="Next Button for Social Carousel" /></ButtonNext>
            <Slider aria-label="Instagram Slider" classNameTray="slider-tray" classNameTrayWrap="slider-tray-wrap">
              {slides.map((item,index) => (
                <Slide index={index} key={`carousel: ${index}`} tabIndex={-1} classNameHidden="hidden-slide">
                  <div className="card">
                    <PrismicLink className="image-box" href={item.permalink} id={`child-${index}`} tabIndex={0} >
                      <Image alt="{item.caption}" src={item.localFile?.url}/>
                    </PrismicLink>
                    <div className="copy">
                      {/* <p><strong>{item.likes} likes</strong></p> */}
                      <p className="caption">{item.caption}</p>
                      <Moment fromNow unix className="date">{item.timestamp}</Moment>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            
          </CarouselProvider>
        </div>
        <div className="social">
          <h3>{slice.primary.social_header}</h3>
          <div className="social-links">
            <a aria-label="LinkedIn" href={`https://ca.linkedin.com/company/${trim(socials.linked_in)}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedin/><p>{socials.linked_in}</p>
            </a>
            <a aria-label="Twitter" href={`https://twitter.com/${trim(socials.twitter)}`} target="_blank" rel="noopener noreferrer">
              <FaTwitter/><p>{socials.twitter}</p>
            </a>
            <a aria-label="Facebook" href={`https://www.facebook.com/${trim(socials.facebook)}`} target="_blank" rel="noopener noreferrer">
              <FaFacebookF/><p>{socials.facebook}</p>
            </a>
            <a aria-label="Instagram" href={`https://www.instagram.com/${trim(socials.instagram)}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram/><p>{socials.instagram}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodySocialFeed on PrismicHomepageDataBodySocialFeed {
    id
    primary {
      subheader
      header
      social_header
      medium_header {
        richText
      }
      instagram_header {
        richText
      }
    }
  }
`
