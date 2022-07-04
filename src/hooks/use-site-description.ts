import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query UseSiteDescription {
    site(id: { eq: "Site" }) {
      siteMetadata {
        description
      }
    }
  }
`

function useSiteDescription() {
  const data = useStaticQuery<Queries.UseSiteDescriptionQuery>(query)
  const siteDescription = data.site?.siteMetadata?.description

  return siteDescription || null
}

export default useSiteDescription
