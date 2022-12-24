import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { linkResolver } from '../utils/linkResolver'
import { LanguageSwitcher } from './LanguageSwitcher'
import useWindowDimensions from './useWindowDimensions'
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram,
  FaChevronDown,
  FaChevronRight,
  FaArrowLeft
  } from 'react-icons/fa'

import Socials from './Socials'

import { useCookies } from 'react-cookie';

export const TopMenu = ({ menu, activeDocMeta }) => {

  const [cookies, setCookie] = useCookies(['SESSION']);

  const currentLang = activeDocMeta.lang.slice(0,2);
  const mobileWidth = 960;
  const {winHeight, winWidth} = useWindowDimensions();
  const height = winHeight || 10000;
  const width = winWidth || 1440;
  const isMobile = width > mobileWidth? false : true;
  
  const [shown, setShown] = React.useState(null);
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  const socials = Socials().data;
  function trim(social){
    var foo = social[0];
    return foo == "@" || foo == "/" ? social.slice(1) : social;
  }

  const youth = {header: menu.youth_resources_label, copy: menu.youth_rt, items: menu.youth_resources}
  const teacher = {header: menu.teacher_resources_label, copy: menu.teacher_rt, items: menu.teacher_resources}
  const programs = {header: menu.program_areas_label, copy: menu.program_rt, items: menu.program_areas}

  const homeLogo = (
    <PrismicLink href={`/${currentLang}`}>
      <GatsbyImage
        image={menu.logo?.gatsbyImageData}
        alt={menu.logo?.alt || ""}
      />
    </PrismicLink>
  );  
  const socialLinks = (
    <div className="social-links">
      <a href={`https://ca.linkedin.com/company/${trim(socials.linked_in)}`} target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
      </a>
      <a href={`https://twitter.com/${trim(socials.twitter)}`} target="_blank" rel="noopener noreferrer">
        <FaTwitter/>
      </a>
      <a href={`https://www.facebook.com${trim(socials.facebook)}`} target="_blank" rel="noopener noreferrer">
        <FaFacebookF/>
      </a>
      <a href={`https://www.instagram.com/${trim(socials.instagram.slice(1))}`} target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
      </a>
    </div>
  );
  const mobileItem = ({header, copy, items=null}) => (
    <div className="menuItem" >
      <p><b>{header}<FaChevronDown/></b></p>
    </div>
  );
  const desktopItem = ({header, copy=null, items=null}) => (
    <div className="menuItem">
      <div className="dropLabel" >
        <p><b>{header}<FaChevronDown/></b></p>
      </div>
      <div className="dropWrap">
        <div className="content">
          <div className="copy">
            {copy && (<PrismicRichText field={copy.richText}/>)}
          </div>
          {items? items.map((item,index) => (
            <PrismicLink
              href={item.link?.url}
              key={`dropItem: ${index}`}
            >
              <GatsbyImage
                image={item.img?.gatsbyImageData}
                alt=""
              />
              <p className="tag">{item.img?.alt}</p>
            </PrismicLink>
          )) : null}
        </div>
      </div>

    </div>
  ); 
  
  return (
    <header>
      <div className="banner">
        {isMobile?
          (
            <>
              {homeLogo}
              <div className={click ? "nav-icon close" : "nav-icon"} onClick={handleClick} tabIndex="0">
                <span className="ham bar-1"/>
                <span className="ham bar-2"/>
                <span className="ham bar-3"/>
              </div>
            </>
          )
         : socialLinks
        }
        <p>{cookies.SESSION}</p>
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
      </div>
      {isMobile ? 
        (
          <div className="mobileMenu">
            {mobileItem(youth)}
            {mobileItem(teacher)}
            {mobileItem(programs)}
            {socialLinks}
          </div>
        ) :
        (
          <div className="desktopMenu">
            {homeLogo}
            <div className="menuLinks">
              {desktopItem(youth)}
              {desktopItem(teacher)}
              {desktopItem(programs)}
            </div>
          </div>
        )
      }
    </header>
  )
}

export const query = graphql`
  fragment TopMenuFragment on PrismicMenu {
    _previewable
    type
    lang
    data {
      logo {
        gatsbyImageData(width: 271, imgixParams: {q: 100})
        alt
      }
      youth_resources_label
      youth_rt {
        richText
      }
      youth_resources {
        img {
          gatsbyImageData
          alt 
        }
        link {
          url 
        }
        img_tag 
      }
      teacher_resources_label
      teacher_rt {
        richText
      }
      teacher_resources {
        img {
          gatsbyImageData
          alt 
        }
        link {
          url 
        }
        img_tag 
      }
      program_areas_label
      program_rt {
        richText
      }
      program_areas {
        img {
          gatsbyImageData
          alt 
        }
        link {
          url 
        }
        img_tag 
      }
      about_label
      about_link {
        url 
      }
      donate_label
      donate_button_link {
        url 
      }
    }
  }
`
