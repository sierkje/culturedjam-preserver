import { Fragment } from "react"

import ColorVariables from "@/components/theme/color-variables"
import FontVariables from "@/components/theme/font-variables"

function Theme() {
  return (
    <Fragment>
      <ColorVariables />
      <FontVariables />
    </Fragment>
  )
}

export default Theme
