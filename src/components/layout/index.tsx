import type * as React from "react"
import { Fragment } from "react"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import MainContent from "@/components/layout/main-content"

type LayoutProps = {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <Fragment>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Fragment>
  )
}

export type { LayoutProps }
export default Layout
