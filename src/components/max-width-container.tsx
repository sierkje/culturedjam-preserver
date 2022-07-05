import { css } from "@emotion/react"
import type * as React from "react"

import cssVar from "@/helpers/css-var"

type ElType = React.ElementType

const styles = css`
  margin: 0 auto;
  max-width: ${cssVar(`--max-content-width`)};
  position: relative;
  width: 100%;
`

type MaxWidthContainerProps<El extends ElType = "div"> = {
  as?: El
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<El>, "as" | "children">

function MaxWidthContainer<El extends ElType = "div">(props: MaxWidthContainerProps<El>) {
  const { as: Component = `div`, children, ...otherProps } = props

  return (
    <Component css={styles} {...otherProps}>
      {children}
    </Component>
  )
}

export type { MaxWidthContainerProps }
export default MaxWidthContainer
