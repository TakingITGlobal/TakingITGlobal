import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'


export const BottomMenu = ({ menu }) => {
  return (
    <footer>
      <div className="flex-wrap">
        <div className="menu-col">
          <h3>{menu.youth_resources_label}</h3>
          {menu.youth_resources.map((item,index) => (
            <PrismicLink href={item.link_label} key={`yr: ${index}`}>
              {item.link_label}
            </PrismicLink>
          ))}
        </div>
        <div className="menu-col">
          <h3>{menu.teacher_resources_label}</h3>
          {menu.teacher_resources.map((item,index) => (
            <PrismicLink href={item.link_label} key={`yr: ${index}`}>
              {item.link_label}
            </PrismicLink>
          ))}
        </div>
        <div className="menu-col">
          <h3>{menu.program_areas_label}</h3>
          {menu.program_areas.map((item,index) => (
            <PrismicLink href={item.link_label} key={`yr: ${index}`}>
              {item.link_label}
            </PrismicLink>
          ))}
        </div>
        <div className="menu-col">

        </div>
        <div className="menu-col">

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
