import type { GatsbyNode } from "gatsby"

// import { gatsbyNodeCreatePages } from "./create-pages"
import { gatsbyNodeOnCreateBabelConfig } from "./on-create-babel-config"
import { gatsbyNodeOnCreateNode } from "./on-create-node"
import { gatsbyNodeOnCreateWebpackConfig } from "./on-create-webpack-config"

const gatsbyNode: GatsbyNode = {
  // createPages: gatsbyNodeCreatePages,
  onCreateBabelConfig: gatsbyNodeOnCreateBabelConfig,
  onCreateNode: gatsbyNodeOnCreateNode,
  onCreateWebpackConfig: gatsbyNodeOnCreateWebpackConfig,
}

export { gatsbyNode }
