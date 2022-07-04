import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query UseSiteName {
    site(id: { eq: "Site" }) {
      siteMetadata {
        title
      }
    }
  }
`

function useSiteName(): string {
  const data = useStaticQuery<Queries.UseSiteNameQuery>(query)
  const title = data.site?.siteMetadata?.title
  const siteName = title || `Cultured Jam`

  return siteName
}

export default useSiteName
