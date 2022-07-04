import type { IPluginRefObject } from "gatsby"

interface TransformerSharpConfig extends IPluginRefObject {
  resolve: `gatsby-transformer-sharp`
  /**
   * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/#configuration-options
   */
  options?: {
    /**
     * Default: true
     */
    checkSupportedExtensions?: boolean
  }
}

type GatsbyTransformerSharp = (
  options?: TransformerSharpConfig["options"]
) => TransformerSharpConfig

const gatsbyTransformerSharp: GatsbyTransformerSharp = (options) => ({
  resolve: `gatsby-transformer-sharp`,
  options,
})

export { gatsbyTransformerSharp }
