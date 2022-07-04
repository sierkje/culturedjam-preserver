import type { IPluginRefObject } from "gatsby"

interface PluginEmotionConfig extends IPluginRefObject {
  resolve: `gatsby-plugin-emotion`
  /**
   * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/#options
   * @see https://emotion.sh/docs/@emotion/babel-plugin#options
   */
  options?: {
    /**
     * Default: true
     */
    sourceMap?: boolean
    /**
     * Default: "dev-only"
     */
    autoLabel?: "dev-only" | "always" | "never"
    /**
     * Default: "[local]"
     */
    labelFormat?: string
    /**
     * Default: true
     */
    cssPropOptimization?: boolean
  }
}

type GatsbyPluginEmotion = (options?: PluginEmotionConfig["options"]) => PluginEmotionConfig

const gatsbyPluginEmotion: GatsbyPluginEmotion = (options) => ({
  resolve: `gatsby-plugin-emotion`,
  options, // : { labelFormat: `[filename]--[local]` },
})

export { gatsbyPluginEmotion }
