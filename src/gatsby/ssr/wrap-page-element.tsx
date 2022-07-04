import type { GatsbySSR } from "gatsby"

import PageElement from "@/gatsby/shared/page-element"

const gatsbySSRWrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => (
  <PageElement>{element}</PageElement>
)

export { gatsbySSRWrapPageElement }
