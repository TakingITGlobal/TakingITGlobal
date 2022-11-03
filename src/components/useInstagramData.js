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
    }
  `)

  return data.allInstaNode.nodes
}

export default useInstagramData