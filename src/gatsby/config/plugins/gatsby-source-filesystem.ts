import type { IPluginRefObject } from "gatsby"
import type { FileSystemOptions } from "gatsby-source-filesystem"

import fromRoot from "../../../helpers/from-root"

interface SourceFilesystemConfig extends IPluginRefObject {
  resolve: `gatsby-source-filesystem`
  /**
   * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/#configuration-options
   */
  options?: FileSystemOptions & IPluginRefObject["options"]
}

type GatsbySourceFilesystem = (options: FileSystemOptions) => SourceFilesystemConfig

const gatsbySourceFilesystem: GatsbySourceFilesystem = (options) => ({
  resolve: `gatsby-source-filesystem`,
  options: { ...options, path: fromRoot(options.path) },
})

export { gatsbySourceFilesystem }
