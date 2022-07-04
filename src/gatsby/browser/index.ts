import type { GatsbyBrowser } from "gatsby"

import { gatsbyBrowserWrapPageElement } from "./wrap-page-element"
import { gatsbyBrowserWrapRootElement } from "./wrap-root-element"

const gatsbyBrowser: GatsbyBrowser = {
  wrapPageElement: gatsbyBrowserWrapPageElement,
  wrapRootElement: gatsbyBrowserWrapRootElement,
}

export { gatsbyBrowser }
