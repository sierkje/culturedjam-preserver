import { gatsbyTransformerJson } from "./gatsby-transformer-json"

const gatsbyLocalPostFileSystemOptions = {
  name: `Post`,
  path: `content/posts`,
}

const gatsbyLocalPost = () =>
  gatsbyTransformerJson({
    typeName: `Post`,
  })

export { gatsbyLocalPost, gatsbyLocalPostFileSystemOptions }
