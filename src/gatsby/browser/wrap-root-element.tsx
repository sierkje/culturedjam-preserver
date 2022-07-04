import type { GatsbyBrowser } from "gatsby"

import RootElement from "@/gatsby/shared/root-element"

const gatsbyBrowserWrapRootElement: GatsbyBrowser["wrapRootElement"] = ({ element }) => (
  <RootElement>{element}</RootElement>
)

export { gatsbyBrowserWrapRootElement }
