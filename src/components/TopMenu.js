import {useEffect, useState} from 'react';
import * as React from 'react'
import { Link, graphql } from 'gatsby';
import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { linkResolver } from '../utils/linkResolver'
import { LanguageSwitcher } from './LanguageSwitcher'
import useWindowDimensions from './useWindowDimensions'
import useCookie from 'react-use-cookie';

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


const SocialLinks = ({}) => {
  const socials = Socials().data;
  function trim(social){
    var foo = social[0];
    return foo == "@" || foo == "/" ? social.slice(1) : social;
  }
  return (
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
}



export const TopMenu = ({ menu, activeDocMeta }) => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const [subClick, setSubClick] = React.useState(0);
  const width = useWindowDimensions();
  const isMobile = width < 960;


  const DropItem = ({header, copy, items}) => {
    return (
      <div className="drop-item">
        <div className="drop-label">
          <span className="drop-header">{header} <FaChevronDown/></span>
        </div>
        <div className="drop-box">
          
          <div className="drop-links">
            <div className="copy">
              <h3>{header}</h3>
              {copy && (<PrismicRichText field={copy.richText}/>)}
            </div>
            {items && items.map((item,index) => (
              <PrismicLink
                href={item.link?.url}
                key={`dropItem: ${index}`}
                className="drop-image-wrap"
              >
                <GatsbyImage
                  image={item.img?.gatsbyImageData}
                  className="drop-image"
                  alt=""
                />
                <span className="tag">{item.img?.alt}</span>
              </PrismicLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
  const MobileDropItem = ({header, copy, items, id}) => {
    return (
      <div className="drop-item">
        <div className="drop-label" onClick={() => setSubClick(id)}>
          <span className="drop-header">{header} <FaChevronRight/></span>
        </div>
        <div className={subClick === id ? "drop-box" : "hidden"}>
          <div className="copy">
            <h3>{header}</h3>
            {copy && (<PrismicRichText field={copy.richText}/>)}
          </div>
          <div className="drop-links">
            
            {items && items.map((item,index) => (
              <PrismicLink
                href={item.link?.url}
                key={`dropItem: ${index}`}
                className="drop-image-wrap"
              >
                <GatsbyImage
                  image={item.img?.gatsbyImageData}
                  className="drop-image"
                  alt=""
                />
                <span className="tag">{item.img?.alt}</span>
              </PrismicLink>
            ))}
          </div>
        </div>
      </div>
    );
  }


  const [userToken] = useCookie('TIGUser');


  useEffect(() => {
    if (userToken > 0) {
      console.log('User' + TIGUser);
    }
  });

  function getCookie(TIGUser) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[TIGUser];

    console.log(cookie);
  }


  return (
    <header>
      {isMobile ? 

      (<>
        <div className="banner">
          <PrismicLink
            href={`/${activeDocMeta.lang.slice(0,2)}`}
            className="logo-wrap"
          >
            <GatsbyImage
              image={menu.logo?.gatsbyImageData}
              alt={menu.logo?.alt || ""}
              className="logo"
            />
          </PrismicLink>
          <div className={click ? "nav-icon close" : "nav-icon"} onClick={handleClick} tabIndex="0">
            <span className="ham bar-1"/>
            <span className="ham bar-2"/>
            <span className="ham bar-3"/>
          </div>
          <div className="menu">
            <span 
              className={subClick != 0 ? "back-btn" : "back-btn  hidden"}
              onClick={() => setSubClick(0)}
            >
              <FaArrowLeft/>
            </span>
            <div className="menu-links">
              <MobileDropItem 
                header={menu.youth_resources_label}
                copy={menu.youth_rt}
                items={menu.youth_resources}
                id={1}
              />
              <MobileDropItem 
                header={menu.teacher_resources_label}
                copy={menu.teacher_rt}
                items={menu.teacher_resources}
                id={2}
              />
              <MobileDropItem 
                header={menu.program_areas_label}
                copy={menu.program_rt}
                items={menu.program_areas}
                id={3}
              />
            </div>
            <SocialLinks />
          </div>
        </div>
      </>)
      :(
        <>
        <div className="banner">
          <SocialLinks />
          <LanguageSwitcher activeDocMeta={activeDocMeta} />
        </div>
        <div className="Nav">
          <PrismicLink
            href={`/${activeDocMeta.lang.slice(0,2)}`}
            className="logo-wrap"
          >
            <GatsbyImage
              image={menu.logo?.gatsbyImageData}
              alt={menu.logo?.alt || ""}
              className="logo"
            />
          </PrismicLink>
          <div className={click ? "nav-icon close" : "nav-icon"} onClick={handleClick} tabIndex="0">
            <span className="ham bar-1"/>
            <span className="ham bar-2"/>
            <span className="ham bar-3"/>
          </div>
          <div className="menu-links">
            <DropItem 
              header={menu.youth_resources_label}
              copy={menu.youth_rt}
              items={menu.youth_resources}
            />
            <DropItem 
              header={menu.teacher_resources_label}
              copy={menu.teacher_rt}
              items={menu.teacher_resources}
            />
            <DropItem 
              header={menu.program_areas_label}
              copy={menu.program_rt}
              items={menu.program_areas}
            />
          </div>
          
        </div>
        </>
      )}
    </header>
  );
}

export const query = graphql`
  fragment TopMenuFragment on PrismicMenu {
    _previewable
    type
    lang
    data {
      logo {
        gatsbyImageData( imgixParams: {q: 100})
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