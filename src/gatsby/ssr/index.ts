import type { GatsbySSR } from "gatsby"

// import { gatsbySSROnRenderBody } from "@/gatsby/ssr/on-render-body"
import { gatsbySSRWrapPageElement } from "@/gatsby/ssr/wrap-page-element"
import { gatsbySSRWrapRootElement } from "@/gatsby/ssr/wrap-root-element"

const gatsbySSR: GatsbySSR = {
  // onRenderBody: gatsbySSROnRenderBody,
  wrapPageElement: gatsbySSRWrapPageElement,
  wrapRootElement: gatsbySSRWrapRootElement,
}

export { gatsbySSR }
