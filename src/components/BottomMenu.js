import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram,
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
      <a href={`https://www.facebook.com/${trim(socials.facebook)}`} target="_blank" rel="noopener noreferrer">
        <FaFacebookF/>
      </a>
      <a href={`https://www.instagram.com/${trim(socials.instagram.slice(1))}`} target="_blank" rel="noopener noreferrer">
        <FaInstagram/>
      </a>
    </div>
  );
}

export const BottomMenu = ({ menu,activeDocMeta }) => {
  return (
    <footer>
      <div className="Container">
        <div className="flex-wrap">
          <div className="menu-col">
            <span className="col-header">{menu.youth_resources_label}</span>
            {menu.youth_resources.map((item,index) => (
              <PrismicLink href={item.link?.url} key={`yr: ${index}`}>
                {item.link_label}
              </PrismicLink>
            ))}
          </div>
          <div className="menu-col">
            <span className="col-header">{menu.teacher_resources_label}</span>
            {menu.teacher_resources.map((item,index) => (
              <PrismicLink href={item.link?.url} key={`yr: ${index}`}>
                {item.link_label}
              </PrismicLink>
            ))}
          </div>
          <div className="menu-col">
            <span className="col-header">{menu.program_areas_label}</span>
            {menu.program_areas.map((item,index) => (
              <PrismicLink href={item.link?.url} key={`yr: ${index}`}>
                {item.link_label}
              </PrismicLink>
            ))}
          </div>
          <div className="menu-col">
            <span className="col-header">TakingITGlobal</span>
            <PrismicLink href={menu.about_link?.url}>
                {menu.about_label}
            </PrismicLink>
            <PrismicLink href={menu.donate_link?.url}>
              {menu.donate_label}
            </PrismicLink>
          </div>
          <div className="menu-col">
            <span className="col-header">Follow us</span>
            <SocialLinks/>
          </div>
        </div>
        <div className="copyright">
          <PrismicLink href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" className="cc-link">
            <StaticImage
              src="../images/cc.png"
              alt="Creative Commons License"
              className="cc"
              width={100}
            />
          </PrismicLink>
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
        </div>
      </div>
    </footer>
  )
}

export const query = graphql`
  fragment BottomMenuFragment on PrismicMenu {
    _previewable
    type
    lang
    data {
      youth_resources_label
      youth_resources {
        img {
          gatsbyImageData
          alt 
        }
        link {
          url 
        }
        link_label
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
        link_label
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
        link_label
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
