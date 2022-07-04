import type * as React from "react"
import { Fragment } from "react"

import Theme from "@/components/theme"

function GatsbySharedRootElement(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Fragment>
      <Theme />
      {children}
    </Fragment>
  )
}

export default GatsbySharedRootElement
