import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"

import Branding from "@/components/layout/header-branding"
import Menu from "@/components/layout/header-menu"
import Widgets from "@/components/layout/header-widgets"
import MaxWidthContainer from "@/components/max-width-container"
import cssVar from "@/helpers/css-var"

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
  background-color: ${cssVar(`--header-color-secondary`)};
  color: ${cssVar(`--header-color-primary`)};
  left: 0;
  margin: ${headerMarginTop} ${headerMarginX} 0;
  position: sticky;
  right: 0;
  top: 0;
  height: ${cssVar(`--header-outer-height`)};
  padding: ${headerPaddingY} ${cssVar(`--gutter-size`)};
  z-index: +1;

  a {
    color: ${cssVar(`--header-link-color-primary`)};
    font-weight: 900;
    text-decoration: none;
  }

  a:active,
  a:hover {
    color: ${cssVar(`--header-link-color-secondary`)};
    text-decoration-color: ${cssVar(`--highlight-color-primary`)};
  }
`
const innerWrapperCss = css`
  height: ${cssVar(`--header-inner-height`)};
  display: grid;
  grid-template-columns: min-content 1fr max-content;
  grid-template-rows: 1fr;
`

const brandingCss = css`
  font-size: 1rem;
  line-height: 1;
  margin: 0;
  padding: 0;
`

function LayoutHeader() {
  return (
    <header role="banner" css={outerWrapperCss}>
      <MaxWidthContainer as="nav" css={innerWrapperCss}>
        <div css={brandingCss}>
          <Branding />
        </div>
        <div>
          <Menu />
        </div>
        <div>
          <Widgets />
        </div>
      </MaxWidthContainer>
    </header>
  )
}

export default LayoutHeader
