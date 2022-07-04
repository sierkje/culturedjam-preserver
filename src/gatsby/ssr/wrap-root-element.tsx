import type { GatsbySSR } from "gatsby"

import RootElement from "@/gatsby/shared/root-element"

const gatsbySSRWrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => (
  <RootElement>{element}</RootElement>
)

export { gatsbySSRWrapRootElement }
