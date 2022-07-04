import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query UseSiteSlogan {
    site(id: { eq: "Site" }) {
      siteMetadata {
        slogan
      }
    }
  }
`

function useSiteSlogan(): string | null {
  const data = useStaticQuery<Queries.UseSiteSloganQuery>(query)
  const slogan = data.site?.siteMetadata?.slogan
  const siteSlogan = slogan || null

  return siteSlogan
}

export default useSiteSlogan
