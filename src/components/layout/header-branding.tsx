import { css } from "@emotion/react"
import { Fragment } from "react"

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
    <Fragment>
      <Link to="/" css={linkCss}>
        <JarOfCulturedJam size={BASE_FONT_SIZE_PX * 4} />
      </Link>
      <VisuallyHidden as="h1">{siteName}</VisuallyHidden>
    </Fragment>
  )
}

export default LayoutHeaderBranding
