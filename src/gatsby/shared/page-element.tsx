import type * as React from "react"
import { Fragment } from "react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"

function GatsbySharedPageElement(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Fragment>
      <Seo />
      <Layout>{children}</Layout>
    </Fragment>
  )
}

export default GatsbySharedPageElement
