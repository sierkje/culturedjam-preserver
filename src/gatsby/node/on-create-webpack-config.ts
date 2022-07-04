/* eslint-disable import/no-extraneous-dependencies */

import type { GatsbyNode } from "gatsby"
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin"

const gatsbyNodeOnCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  })
}

export { gatsbyNodeOnCreateWebpackConfig }
