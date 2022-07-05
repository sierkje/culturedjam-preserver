import { css } from "@emotion/react"
import type * as React from "react"

type ElType = React.ElementType

const styles = css`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

type VisuallyHiddenProps<El extends ElType = "div"> = {
  as?: El
  children: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<El>, "as" | "children">

function VisuallyHidden<El extends ElType = "div">(props: VisuallyHiddenProps<El>) {
  const { as: Component = `span`, children, ...otherProps } = props

  return (
    <Component css={styles} {...otherProps}>
      {children}
    </Component>
  )
}

export type { VisuallyHiddenProps }
export default VisuallyHidden
