import type { GatsbyNode } from "gatsby"

const gatsbyNodeOnCreateNode: GatsbyNode["onCreateNode"] = async (args) => {
  if (args.node.internal.type === `Post`) {
    const {
      actions: { createParentChildLink },
      getNodesByType,
      node: postNode,
    } = args
    const post = postNode as unknown as Queries.Post

    getNodesByType(`File`)
      .filter((file) => {
        const photo = file as unknown as Queries.File
        return photo.relativeDirectory === post.photoAlbum
      })
      .forEach((photoNode) => {
        createParentChildLink({ parent: postNode, child: photoNode })
      })
  }
}

export { gatsbyNodeOnCreateNode }
