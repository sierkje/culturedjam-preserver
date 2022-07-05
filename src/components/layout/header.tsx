import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"

import cssVar from "../../helpers/css-var"
import MaxWidthContainer from "../max-width-container"

import Menu from "@/components/layout/header-menu"
import Widgets from "@/components/layout/header-widgets"

const headerMarginTop = calc(cssVar(`--gutter-size`))
  .add(cssVar(`--header-outer-height`))
  .negate()
  .toString()
const headerMarginX = calc(cssVar(`--gutter-size`)).negate().toString()
const headerPaddingY = calc(cssVar(`--header-outer-height`))
  .subtract(cssVar(`--header-inner-height`))
  .divide(2)
  .toString()

const outerWrapperCss = css`
  background-color: ${cssVar(`--header-bg-color`)};
  color: ${cssVar(`--header-text-color`)};
  left: 0;
  margin: ${headerMarginTop} ${headerMarginX} 0;
  position: sticky;
  right: 0;
  top: 0;
  height: ${cssVar(`--header-outer-height`)};
  padding: ${headerPaddingY} ${cssVar(`--gutter-size`)};
  z-index: +1;

  a {
    color: ${cssVar(`--header-link-color-normal`)};
    font-weight: 900;
    text-decoration: none;
  }

  a:active,
  a:hover {
    color: ${cssVar(`--header-link-color-active`)};
    text-decoration-color: ${cssVar(`--header-link-color-underline`)};
  }
`
const innerWrapperCss = css`
  height: ${cssVar(`--header-inner-height`)};
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: 1fr;
`

function LayoutHeader() {
  return (
    <header css={outerWrapperCss}>
      <MaxWidthContainer css={innerWrapperCss}>
        <nav>
          <Menu />
        </nav>
        <div>
          <Widgets />
        </div>
      </MaxWidthContainer>
    </header>
  )
}

export default LayoutHeader
