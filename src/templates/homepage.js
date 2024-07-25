import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { SliceZone } from '@prismicio/react'

import { Layout } from '../components/Layout'
import { components } from '../slices'

const HomepageTemplate = ({ data }) => {
  if (!data) return null

  const homepage = data.prismicHomepage || {}
  const menu = data.prismicMenu || {}
  const instaNodes = data.allInstaNode
  const mediumNodes = data.allFeedTakingItGlobal
  const { lang, type, url } = homepage || {}
  const alternateLanguages = homepage.alternate_languages || []
  const activeDoc = {
    lang,
    type,
    url,
    alternateLanguages,
  }

  return (
    <Layout menu={menu.data} activeDocMeta={activeDoc}>
      <div className="Homepage">
        <SliceZone slices={homepage.data?.body} components={components} context={{medium: mediumNodes, insta: instaNodes}}/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query homepageQuery($lang: String) {
    prismicHomepage(lang: { eq: $lang }) {
      _previewable
      alternate_languages {
        uid
        type
        lang
      }
      lang
      url
      type
      data {
        body {
          ... on PrismicSliceType {
            id
            slice_type
            slice_label
          }
          ...HomepageDataBodyAcknowledgements
          ...HomepageDataBodyDiscover
          ...HomepageDataBodyEvent
          ...HomepageDataBodyGallery
          ...HomepageDataBodyHero
          ...HomepageDataBodyProjects
          ...HomepageDataBodySocialFeed
          ...HomepageDataBodySupport
          ...HomepageDataBodyTextImage
          ...HomepageDataBodyYouthResources
          ...HomepageDataBodyTeachers
        }
      }
    }
    prismicMenu(lang: { eq: $lang }) {
      ...TopMenuFragment
      ...BottomMenuFragment
    }
    allFeedTakingItGlobal(sort: {order: DESC, fields: isoDate}, limit: 8) {
      nodes {
        title
        link
        isoDate
        content {
          encoded
        }
      }
    }
    allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
      nodes {
        caption
        likes
        timestamp
        permalink
        localFile {
          url
        }
      }
    }
  }
`

export default withPrismicPreview(HomepageTemplate)
