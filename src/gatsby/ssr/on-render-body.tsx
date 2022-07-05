import type { GatsbySSR } from "gatsby"

import { gatsbySSRPreventDarkModeFuOCScript as preventDarkModeFuOCScript } from "@/gatsby/ssr/prevent-dark-mode-fuoc-script"

const gatsbySSROnRenderBody: GatsbySSR["onRenderBody"] = (args) => {
  const { setHeadComponents } = args

  setHeadComponents([
    <script
      key="preventDarkModeFuOCScript"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: preventDarkModeFuOCScript }}
    />,
  ])
}

export { gatsbySSROnRenderBody }
