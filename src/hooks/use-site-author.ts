import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query UseSiteAuthor {
    site(id: { eq: "Site" }) {
      siteMetadata {
        author
      }
    }
  }
`
function useSiteAuthor(): string {
  const data = useStaticQuery<Queries.UseSiteAuthorQuery>(query)
  const author = data.site?.siteMetadata?.author
  const siteAuthor = author || `@culturedjam`

  return siteAuthor
}

export default useSiteAuthor
