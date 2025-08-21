import { useStaticQuery, graphql } from "gatsby"

const useInstagramData = () => {
  const data = useStaticQuery(graphql`
    query {
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