import type * as React from "react"

import MaxWidthContainer from "@/components/max-width-container"

type LayoutMainContentProps = { children: React.ReactNode }

function LayoutMainContent(props: LayoutMainContentProps) {
  const { children } = props

  return <MaxWidthContainer>{children}</MaxWidthContainer>
}

export default LayoutMainContent
