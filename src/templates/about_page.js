import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import { Layout } from '../components/Layout'
import { components } from '../slices'

const AboutPageTemplate = ({ data }) => {
  if (!data) return null

  const about_pageContent = data.prismicPage || {}
  const about_page = about_pageContent.data || {}
  const menu = data.prismicMenu || {}

  const { lang, type, url } = about_pageContent || {}
  const alternateLanguages = about_pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout menu={menu.data} activeDocMeta={activeDoc}>
      <SliceZone slices={about_page.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query about_pageQuery($id: String, $lang: String) {
    prismicAboutPage(id: { eq: $id }, lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      id
      data {
        body {
          ... on PrismicSliceType {
            id
            slice_type
            slice_label
          }
          ...AboutPageDataBodyReportsCarousel
        }
      }
    }
    prismicMenu(lang: { eq: $lang }) {
      ...TopMenuFragment
      ...BottomMenuFragment
    }
  }
`

export default withPrismicPreview(AboutPageTemplate)
