import {useEffect, useState} from 'react';
import * as React from 'react'
import { Link, graphql } from 'gatsby';
import { PrismicLink, PrismicText, PrismicRichText } from '@prismicio/react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { linkResolver } from '../utils/linkResolver'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useWindowWidth } from '@react-hook/window-size/throttled'
import useCookie from 'react-use-cookie';

import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram,
  FaChevronDown,
  FaChevronRight,
  FaArrowLeft,
  FaUser
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
      <a aria-label="Linkedin" href={`https://ca.linkedin.com/company/${trim(socials.linked_in)}`} target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
      </a>
      <a aria-label="Twitter" href={`https://twitter.com/${trim(socials.twitter)}`} target="_blank" rel="noopener noreferrer">
        <FaTwitter/>
      </a>
      <a aria-label="Facebook" href={`https://www.facebook.com/${trim(socials.facebook)}`} target="_blank" rel="noopener noreferrer">
        <FaFacebookF/>
      </a>
      <a aria-label="Instagram" href={`https://www.instagram.com/${trim(socials.instagram.slice(1))}`} target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
      </a>
    </div>
  );
}

export const TopMenu = ({ menu, activeDocMeta }) => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const [subClick, setSubClick] = React.useState(0);
  const width = useWindowWidth({ fps: 60 });
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    setIsMobile(width <= 938);
  }, [width])

  const AdminMenu = ({ items }) => {

    const [userTypeToken] = useCookie('TIGheader');
    const [userNameToken] = useCookie('TIGusername');

    useEffect(() => {

    });

    return (
      <div className="admin-menu">
        {(() => {
          if (userTypeToken == 'login' ) {
            return (
              <div className="admin-container">
                <a href="#" className="hover">{userNameToken} <FaUser/></a>
                <ul className="dropdown">
                  {menu && menu.user_menu.map((item,index) => (
                    <li>
                      <PrismicLink href={item.link?.url} key={`yr: ${index}`}>
                        {item.link_name}
                      </PrismicLink>
                    </li>
                  ))}
                  <li><a href="https://my.tigweb.org/edit/settings/">Account Settings</a></li>
                  <li><a href="https://www.tigweb.org/members/login.html?logout=logout&pushpath=welcome.tigweb.org">Logout</a></li>
                </ul>
              </div>
            )
          } else if (userTypeToken == 'staff' ) {
            return (
              <div className="admin-container">
                <a href="#" className="hover">{userNameToken} <FaUser/></a>
                <ul className="dropdown"> 
                  {menu && menu.staff_menu.map((item,index) => (
                    <li>
                      <PrismicLink href={item.link?.url} key={`yr: ${index}`}>
                        {item.link_name}
                      </PrismicLink>
                    </li>
                  ))}
                  <li><a href="https://www.tigweb.org/members/login.html?logout=logout&pushpath=www.tigweb.org%2F">Logout</a></li>
                </ul>
              </div>
            )
          } else {
            return (
              <div className="login-container">
                <ul className="login-menu">
                  <li><a href="https://www.tigweb.org/signup">Join</a></li>
                  <li><a href="https://www.tigweb.org/members/login.html?pushpath=www.tigweb.org%2F">Log in</a></li>
                </ul>
                {!isMobile && <FaUser/>}
              </div>
            )
          }
        })()}
      </div>
    )
  }
  
  const DropItem = ({header, copy, items}) => {
    return (
      <div className="drop-item" tabindex="0">
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
                <span className="tag">{item.link_label}</span>
              </PrismicLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
  const MobileDropItem = ({header, copy, items, id}) => {
    return (
      <div className="drop-item" tabindex="0">
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
                <span className="tag">{item.link_label}</span>
              </PrismicLink>
            ))}
          </div>
        </div>
      </div>
    );
  }




  return (
    <header>

      <a className="skip_button" href="#main">   
        Skip to Content
      </a>

      {isMobile ? 

      (<div className="mobile">
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
              {menu.menu_links.map((item,index) => (
                <PrismicLink 
                  className="drop-header"
                  href={item.link?.url}
                  key={`link:${index}`}
                >
                  {item.link_label}
                </PrismicLink>
              ))}
              <AdminMenu />
            </div>
            <SocialLinks />
          </div>
        </div>
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
      </div>) : (
      <div className="desktop">
        <div className="banner">
          <SocialLinks />
          <AdminMenu />
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
            <div className="drop-header">
              <PrismicLink href={menu.about_link?.url}>
                  {menu.about_label}
              </PrismicLink>
            </div>
            <div className="drop-header">
              <PrismicLink href={menu.donate_button_link?.url}>
                {menu.donate_label}
              </PrismicLink>
            </div>  
          </div>
          
        </div>
      </div>)}
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
      menu_links {
        link {
          url
        }
        link_label
      }
      staff_menu {
        link_name
        link {
          url
        }
      }
      user_menu {
        link_name
        link {
          url
        }
      }
    }
  }
`
