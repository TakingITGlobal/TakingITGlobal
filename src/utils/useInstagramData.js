import { useStaticQuery, graphql } from "gatsby"

const useInstagramData = () => {
  const data = useStaticQuery(graphql`
    query {
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
    }
  `)

  return data
}

export default useInstagramData