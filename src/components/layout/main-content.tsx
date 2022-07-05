import type * as React from "react"

type LayoutMainContentProps = { children: React.ReactNode }

function LayoutMainContent(props: LayoutMainContentProps) {
  const { children } = props

  return <div>{children}</div>
}

export default LayoutMainContent
