import type { GatsbyConfig } from "gatsby"

import {
  gatsbyLocalPhotoAlbum,
  gatsbyLocalPhotoAlbumFileSystemOptions,
} from "./gatsby-local-photo-album"
import { gatsbyLocalPost, gatsbyLocalPostFileSystemOptions } from "./gatsby-local-post"
import { gatsbyPluginEmotion } from "./gatsby-plugin-emotion"
import { gatsbyPluginImage } from "./gatsby-plugin-image"
import { gatsbyPluginReactHelmet } from "./gatsby-plugin-react-helmet"
import { gatsbyPluginSharp } from "./gatsby-plugin-sharp"
import { gatsbySourceFilesystem } from "./gatsby-source-filesystem"
import { gatsbyTransformerSharp } from "./gatsby-transformer-sharp"

const gatsbyConfigPlugins: GatsbyConfig["plugins"] = [
  gatsbyPluginEmotion({
    labelFormat: `[filename]--[local]`,
  }),
  gatsbyPluginImage(),
  gatsbyPluginReactHelmet(),
  gatsbyPluginSharp({
    defaults: { formats: [`auto`, `webp`, `avif`], quality: 70 },
  }),
  gatsbySourceFilesystem(gatsbyLocalPhotoAlbumFileSystemOptions),
  gatsbyLocalPhotoAlbum(),
  gatsbySourceFilesystem(gatsbyLocalPostFileSystemOptions),
  gatsbyLocalPost(),
  gatsbyTransformerSharp(),
]

export { gatsbyConfigPlugins }
