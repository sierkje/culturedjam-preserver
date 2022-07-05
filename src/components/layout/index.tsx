import { css } from "@emotion/react"
import type * as React from "react"
import { Fragment, useId } from "react"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import MainContent from "@/components/layout/main-content"
import Link from "@/components/link"
import cssVar from "@/helpers/css-var"

const skipNavLinkCss = css`
  background-color: ${cssVar(`--highlight-color-primary`)};
  color: ${cssVar(`--highlight-color-secondary`)};
  display: block;
  font-size: ${cssVar(`--h2-font-size`)};
  left: 0;
  padding: ${cssVar(`--gutter-size`)};
  position: fixed;
  text-align: center;
  text-decoration: underline;
  top: 0;
  transform: translateY(-100%);
  transition: transform 0.3s;
  width: 100vw;
  z-index: +2;

  &:active,
  &:hover {
    color: currentColor;
  }

  &:focus {
    transform: translateY(0%);
  }
`

type LayoutProps = {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  const { children } = props
  const mainContentId = useId()

  return (
    <Fragment>
      <Link to={`#${mainContentId}`} css={skipNavLinkCss}>
        Skip to main content
      </Link>
      <Header />
      <MainContent id={mainContentId}>{children}</MainContent>
      <Footer />
    </Fragment>
  )
}

export type { LayoutProps }
export default Layout
