import { css } from "@emotion/react"

import JarOfCulturedJam from "@/components/jar-of-cultured-jam"
import Link from "@/components/link"
import VisuallyHidden from "@/components/visually-hidden"
import useSiteName from "@/hooks/use-site-name"
import themeConstants from "@/theme-constants"

const { BASE_FONT_SIZE_PX } = themeConstants

const linkCss = css`
  display: block;
  margin: 0 -0.5rem 0 -0.5rem;
`

function LayoutHeaderBranding() {
  const siteName = useSiteName()

  return (
    <Link to="/" css={linkCss}>
      <JarOfCulturedJam size={BASE_FONT_SIZE_PX * 4} aria-hidden />
      <VisuallyHidden as="h1">{siteName}</VisuallyHidden>
    </Link>
  )
}

export default LayoutHeaderBranding
