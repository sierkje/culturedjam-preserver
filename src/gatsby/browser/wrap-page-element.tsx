import type { GatsbyBrowser } from "gatsby"

import PageElement from "@/gatsby/shared/page-element"

const gatsbyBrowserWrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => (
  <PageElement>{element}</PageElement>
)

export { gatsbyBrowserWrapPageElement }
