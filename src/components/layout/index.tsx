import type * as React from "react"
import { Fragment } from "react"

import Link from "@/components/link"
import useSiteSlogan from "@/hooks/use-site-slogan"

type LayoutProps = {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props
  const slogan = useSiteSlogan()

  return (
    <Fragment>
      <header>
        <nav>
          <menu>
            <li>
              <Link to="/">Home</Link>
            </li>
          </menu>
        </nav>
      </header>
      <main>{children}</main>
      <footer>{slogan}</footer>
    </Fragment>
  )
}

export type { LayoutProps }
export default Layout
