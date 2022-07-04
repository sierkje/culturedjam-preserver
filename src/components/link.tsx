import type { GatsbyLinkProps } from "gatsby"
import { Link as GatsbyLink } from "gatsby"

// This should not be necessary but something is broken:
// "JSX element class does not support attributes because it does not have a 'props' property.ts(2607)"
const InternalLink = GatsbyLink as unknown as (props: GatsbyLinkProps<unknown>) => JSX.Element

type LinkProps<TState = unknown> = GatsbyLinkProps<TState>

function Link<TState = unknown>(props: LinkProps<TState>) {
  const { children, to, activeClassName, partiallyActive, ...other } = props

  const isInternal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  return isInternal ? (
    <InternalLink
      to={to}
      activeClassName={activeClassName}
      partiallyActive={partiallyActive}
      {...other}
    >
      {children}
    </InternalLink>
  ) : (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export type { LinkProps }
export default Link
