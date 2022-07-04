import type { IPluginRefObject } from "gatsby"

interface TransformerJSONConfig extends IPluginRefObject {
  resolve: `gatsby-transformer-json`
  /**
   * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-json
   */
  options?: {
    typeName?: string
  }
}

type GatsbyTransformerJson = (options?: TransformerJSONConfig["options"]) => TransformerJSONConfig

const gatsbyTransformerJson: GatsbyTransformerJson = (options) => ({
  resolve: `gatsby-transformer-json`,
  options,
})

export { gatsbyTransformerJson }
