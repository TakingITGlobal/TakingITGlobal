import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { PrismicLink, PrismicText } from '@prismicio/react'
import { StaticImage } from 'gatsby-plugin-image'

import { LanguageSwitcher } from './LanguageSwitcher'

export const TopMenu = ({ topMenu, activeDocMeta }) => {
  return (
    <header>
      <LanguageSwitcher activeDocMeta={activeDocMeta} />
    </header>
  )
}

export const query = graphql`
  fragment TopMenuFragment on PrismicTopMenu {
    _previewable
    type
    lang
  }
`
