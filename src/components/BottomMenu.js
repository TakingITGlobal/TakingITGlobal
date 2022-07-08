import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'


export const BottomMenu = ({ bottomMenu}) => {
  return (
    <footer>
    </footer>
  )
}

export const query = graphql`
  fragment BottomMenuFragment on PrismicBottomMenu {
    _previewable
    type
    lang
  }
`
