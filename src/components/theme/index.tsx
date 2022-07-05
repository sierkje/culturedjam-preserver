import { Fragment } from "react"

import ColorVariables from "@/components/theme/color-variables"
import ElementStyles from "@/components/theme/element-styles"
import FontVariables from "@/components/theme/font-variables"
import SizeVariables from "@/components/theme/size-variables"

function Theme() {
  return (
    <Fragment>
      <ColorVariables />
      <FontVariables />
      <SizeVariables />
      <ElementStyles />
    </Fragment>
  )
}

export default Theme
