import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"

import Branding from "@/components/layout/footer-branding"
import MaxWidthContainer from "@/components/max-width-container"
import cssVar from "@/helpers/css-var"

const gutterSize = cssVar(`--gutter-size`)
const outerWrapperMarginTop = calc(gutterSize).multiply(4).toString()
const outerWrapperMarginX = calc(gutterSize).negate().toString()
const outerWrapperMarginBottom = `auto`
const outerWrapperPaddingTop = calc(gutterSize).multiply(2).toString()

const outerWrapperCss = css`
  color: ${cssVar(`--footer-color`)};
  border-top: 4px dotted ${cssVar(`--highlight-color-primary`)};
  margin: ${outerWrapperMarginTop} ${outerWrapperMarginX} ${outerWrapperMarginBottom};
  padding: ${outerWrapperPaddingTop} ${gutterSize} ${gutterSize};
`

function LayoutFooter() {
  return (
    <footer css={outerWrapperCss}>
      <MaxWidthContainer>
        <Branding />
      </MaxWidthContainer>
    </footer>
  )
}

export default LayoutFooter
