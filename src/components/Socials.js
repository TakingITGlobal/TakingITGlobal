import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

const Socials = () => {
  const staticData = useStaticQuery(graphql`
    query {
      prismicSocialLinks {
        _previewable
        data {
          facebook
          instagram
          linked_in
          twitter
          youtube
        }
      }
    }
  `)

  const { data, isPreview} = useMergePrismicPreviewData(staticData);
  return data.prismicSocialLinks
}

export default Socials