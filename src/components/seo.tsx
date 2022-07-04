import type * as React from "react"
import { memo } from "react"
import { Helmet } from "react-helmet"

import useSiteAuthor from "@/hooks/use-site-author"
import useSiteDescription from "@/hooks/use-site-description"
import useSiteName from "@/hooks/use-site-name"

type SeoProps = {
  title?: string
  description?: string
  lang?: string
  meta?: React.ComponentPropsWithoutRef<"meta">[]
  htmlAttributes?: Omit<React.ComponentPropsWithoutRef<"html">, "lang">
}

function SeoComponent(props: SeoProps) {
  const siteAuthor = useSiteAuthor()
  const siteDescription = useSiteDescription()
  const siteName = useSiteName()
  const {
    title = siteName,
    description = siteDescription,
    lang = `en`,
    meta = [],
    htmlAttributes = {},
  } = props

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Helmet>
      <html lang={lang} {...htmlAttributes} />
      <title>{title.includes(siteName) ? title : `${title} | ${siteName}`}</title>
      {description && <meta name="description" content={description} />}

      {/* Open Graph (Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}

      {/* Twitter card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {siteAuthor && <meta name="twitter:creator" content={siteAuthor} />}
      {description && <meta name="twitter:description" content={description} />}

      {/* Custom meta elements */}
      {meta.map((metaProps) => (
        <meta {...metaProps} />
      ))}
    </Helmet>
  )
}

const Seo = memo(SeoComponent)

export { type SeoProps }
export default Seo
