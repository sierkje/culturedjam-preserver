import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"

import Link from "@/components/link"
import cssVar from "@/helpers/css-var"

const menuMarginY = calc(cssVar(`--header-outer-height`))
  .subtract(cssVar(`--header-inner-height`))
  .divide(2)
  .negate()
  .toString()

const linkLineHeight = `1em`

const linkPaddingBottom = `0.5em`
const linkBorderBottomSize = `2px`

const linkPaddingTop = calc(cssVar(`--header-outer-height`))
  .subtract(linkLineHeight)
  .subtract(linkPaddingBottom)
  .subtract(linkBorderBottomSize)
  .toString()

const linkPaddingX = calc(cssVar(`--gutter-size`)).divide(2).toString()

const menuCss = css`
  height: ${cssVar(`--header-outer-height`)};
  list-style: none;
  margin: ${menuMarginY} 0;
  padding: 0;
  display: flex;
  flex-direction: horizontal;
  justify-content: left;
  align-content: flex-end;
`

const menuItemCss = css`
  margin: 0;
  padding: 0;
`

const linkCss = css`
  border-bottom: 2px solid transparent;
  display: block;
  line-height: ${linkLineHeight};
  padding: ${linkPaddingTop} ${linkPaddingX} ${linkPaddingBottom};
  text-decoration: none;

  &:active,
  &:hover {
    border-bottom-color: ${cssVar(`--highlight-color-primary`)};
    text-decoration: none;
  }
`

function LayoutHeaderMenu() {
  return (
    <menu css={menuCss}>
      <li css={menuItemCss}>
        <Link to="/" css={linkCss}>
          Home
        </Link>
      </li>
      <li css={menuItemCss}>
        <Link to="/about" css={linkCss}>
          About
        </Link>
      </li>
    </menu>
  )
}

export default LayoutHeaderMenu
