import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"

import cssVar from "../../helpers/css-var"
import MaxWidthContainer from "../max-width-container"

import Slogan from "@/components/layout/footer-slogan"

const gutterSize = cssVar(`--gutter-size`)
const outerWrapperMarginTop = calc(gutterSize).multiply(4).toString()
const outerWrapperMarginX = calc(gutterSize).negate().toString()
const outerWrapperMarginBottom = `auto`
const outerWrapperPaddingTop = calc(gutterSize).multiply(2).toString()

const outerWrapperCss = css`
  border-top: 4px dotted ${cssVar(`--highlight-color`)};
  margin: ${outerWrapperMarginTop} ${outerWrapperMarginX} ${outerWrapperMarginBottom};
  padding: ${outerWrapperPaddingTop} ${gutterSize} ${gutterSize};
`

function LayoutFooter() {
  return (
    <footer css={outerWrapperCss}>
      <MaxWidthContainer>
        <Slogan />
      </MaxWidthContainer>
    </footer>
  )
}

export default LayoutFooter
