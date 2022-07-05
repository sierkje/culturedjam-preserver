import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"
import type * as React from "react"

import MaxWidthContainer from "@/components/max-width-container"
import cssVar from "@/helpers/css-var"

const paddingTop = calc(cssVar(`--gutter-size`)).add(cssVar(`--header-outer-height`)).toString()

const styles = css`
  padding-top: ${paddingTop};
  outline-offset: ${cssVar(`--gutter-size`)};
`

type LayoutMainContentProps = { id: string; children: React.ReactNode }

function LayoutMainContent(props: LayoutMainContentProps) {
  const { id, children } = props

  return (
    <MaxWidthContainer tabIndex={-1} id={id} as="main" css={styles}>
      {children}
    </MaxWidthContainer>
  )
}

export default LayoutMainContent
