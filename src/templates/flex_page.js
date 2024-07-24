import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import { Layout } from '../components/Layout'
import { components } from '../slices'

const FlexPageTemplate = ({ data }) => {
  if (!data) return null

  const flex_pageContent = data.prismicFlexPage || {}
  const flex_page = flex_pageContent.data || {}
  const menu = data.prismicMenu || {}

  const { lang, type, url } = flex_pageContent || {}
  const alternateLanguages = flex_pageContent.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout menu={menu.data} activeDocMeta={activeDoc}>
      <SliceZone slices={flex_page.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query flex_pageQuery($id: String, $lang: String) {
    prismicFlexPage(id: { eq: $id }, lang: { eq: $lang }) {
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
          ...FlexPageDataBodyReportsCarousel
          ...FlexPageDataBodyTextImage
          ...FlexPageDataBodyTextCards
          ...FlexPageDataBodyQuote
          ...FlexPageDataBodyStatListing
          ...FlexPageDataBodyFeatureSlider
          ...FlexPageDataBodyTextCallout
        }
      }
    }
    prismicMenu(lang: { eq: $lang }) {
      ...TopMenuFragment
      ...BottomMenuFragment
    }
  }
`

export default withPrismicPreview(FlexPageTemplate)
