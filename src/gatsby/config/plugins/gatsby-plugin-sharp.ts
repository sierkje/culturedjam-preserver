import type { IPluginRefObject } from "gatsby"

interface PluginSharpConfig extends IPluginRefObject {
  resolve: `gatsby-plugin-sharp`
  /**
   * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/#options
   */
  options?: {
    defaults?: {
      /**
       * Default: ["auto", "webp"]
       */
      formats?: ("auto" | "png" | "jpg" | "webp" | "avif")[]
      /**
       * Default: "dominantColor"
       */
      placeholder?: "tracedSVG" | "dominantColor" | "blurred" | "none"
      /**
       * Default: 50
       */
      quality?: number
      /**
       * Default: [750, 1080, 1366, 1920]
       */
      breakpoints?: number[]
      /**
       * Default: "transparent"
       */
      backgroundColor?: string
      /**
       * Default: {}
       */
      tracedSVGOptions?: object
      /**
       * Default: {}
       */
      blurredOptions?: object
      /**
       * Default: {}
       */
      jpgOptions?: object
      /**
       * Default: {}
       */
      pngOptions?: object
      /**
       * Default: {}
       */
      webpOptions?: object
      /**
       * Default: {}
       */
      avifOptions?: object
    }
    /**
     * Default: true
     */
    failOnError?: boolean
  }
}

type GatsbyPluginSharp = (options?: PluginSharpConfig["options"]) => PluginSharpConfig

const gatsbyPluginSharp: GatsbyPluginSharp = (options) => ({
  resolve: `gatsby-plugin-sharp`,
  options,
})

export { gatsbyPluginSharp }
