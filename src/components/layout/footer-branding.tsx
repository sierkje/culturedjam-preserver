import { css } from "@emotion/react"

import JarOfCulturedJam from "@/components/jar-of-cultured-jam"
import useSiteSlogan from "@/hooks/use-site-slogan"
import themeConstants from "@/theme-constants"

const { BASE_FONT_SIZE_PX } = themeConstants

const wrapperCss = css`
  display: grid;
  column-gap: 0.25rem;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  width: 100%;
`

const logoCss = css`
  align-items: center;
  display: flex;
  height: 100%;
  justify-items: left;
  margin: 0 -1rem;
`

const sloganCss = css`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  line-height: 1.25;
  height: 100%;
  text-align: right;

  @media (min-width: 650px) {
    font-size: 2rem;
  }
`

function LayoutFooterBranding() {
  const slogan = useSiteSlogan()

  return (
    <p css={wrapperCss}>
      <span css={logoCss}>
        <JarOfCulturedJam isEmpty size={BASE_FONT_SIZE_PX * 8} />
      </span>
      <span css={sloganCss}>{slogan}</span>
    </p>
  )
}

export default LayoutFooterBranding
