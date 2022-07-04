import type { GatsbyConfig } from "gatsby"

const gatsbyConfigSiteMetadata: GatsbyConfig["siteMetadata"] = {
  title: `Cultured Jam`,
  description: `Cultured Jam was here, no marmalade for you.`,
  author: `@culturedjam`,
  slogan: `Cultured Jam was here, no marmalade for you.`,
  siteUrl:
    process.env.NODE_ENV === `development`
      ? `http://localhost:3000`
      : `https://culturedjam.gatsbyjs.io/`,
}

export { gatsbyConfigSiteMetadata }
