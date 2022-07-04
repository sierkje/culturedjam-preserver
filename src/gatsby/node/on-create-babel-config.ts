import type { GatsbyNode } from "gatsby"

const gatsbyNodeOnCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({ stage, actions }) => {
  actions.setBabelPlugin({ name: `babel-plugin-dev-expression`, options: {} })

  if (stage === `develop`) {
    actions.setBabelPlugin({
      name: `babel-plugin-typescript-to-proptypes`,
      options: {},
    })
  }
}

export { gatsbyNodeOnCreateBabelConfig }
