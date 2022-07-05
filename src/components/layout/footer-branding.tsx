import { css } from "@emotion/react"

import cssVar from "../../helpers/css-var"
import { COLOR_SCHEME_CLASS_NAME } from "../../hooks/use-color-scheme"

import JarOfCulturedJam from "@/components/jar-of-cultured-jam"
import useSiteSlogan from "@/hooks/use-site-slogan"
import themeConstants from "@/theme-constants"

const { BASE_FONT_SIZE_PX } = themeConstants

const wrapperCss = css`
  display: grid;
  column-gap: 0.25rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  opacity: 0.95;
  width: 100%;

  .${COLOR_SCHEME_CLASS_NAME} & {
    opacity: 0.5;
    filter: invert();
  }
`

const logoCss = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-items: left;
  margin: 0 -1rem;
  fill-opacity: 0.6;
  opacity: 0.5;
  stroke-opacity: 0.8;
`

const sloganCss = css`
  align-items: center;
  display: flex;
  font-family: ${cssVar(`--fancy-font-family`)};
  font-size: 1.25rem;
  font-weight: ${cssVar(`--fancy-font-weight`)};
  line-height: 1.25;
  height: 100%;
  text-align: right;
  text-transform: uppercase;

  @media (min-width: 450px) and (max-width: 649.99px) {
    font-size: 1.45rem;
  }

  @media (min-width: 650px) {
    font-size: 1.65rem;
  }
`

function LayoutFooterBranding() {
  const slogan = useSiteSlogan()

  return (
    <p css={wrapperCss} aria-hidden>
      <span css={logoCss}>
        <JarOfCulturedJam isEmpty size={BASE_FONT_SIZE_PX * 8} />
      </span>
      <span css={sloganCss}>{slogan}</span>
    </p>
  )
}

export default LayoutFooterBranding
