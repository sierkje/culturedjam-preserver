import { Fragment } from "react"

import ColorVariables from "@/components/theme/color-variables"
import FontVariables from "@/components/theme/font-variables"
import SizeVariables from "@/components/theme/size-variables"

function Theme() {
  return (
    <Fragment>
      <ColorVariables />
      <FontVariables />
      <SizeVariables />
    </Fragment>
  )
}

export default Theme
