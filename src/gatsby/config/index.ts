import type { GatsbyConfig } from "gatsby"

import { gatsbyConfigGraphqlTypegen } from "./graphql-typegen"
import { gatsbyConfigPlugins } from "./plugins"
import { gatsbyConfigSiteMetadata } from "./site-metadata"

const gatsbyConfig: GatsbyConfig = {
  graphqlTypegen: gatsbyConfigGraphqlTypegen,
  plugins: gatsbyConfigPlugins,
  siteMetadata: gatsbyConfigSiteMetadata,
}

export { gatsbyConfig }
