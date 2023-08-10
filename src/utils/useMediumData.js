import { useStaticQuery, graphql } from "gatsby"

const useMediumData = () => {
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

  return data.allFeedTakingItGlobal.nodes
}

export default useMediumData