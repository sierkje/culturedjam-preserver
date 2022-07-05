import { css, Global } from "@emotion/react"

import cssVar from "@/helpers/css-var"
import themeConstants from "@/theme-constants"
import type { HeadingElement } from "@/types/theme"

const { BASE_FONT_SIZE_PX, BASE_LINE_HEIGHT_PX } = themeConstants

function headingStyles(hx: HeadingElement) {
  return `
    color: ${cssVar(`--heading-color`)};
    font-family: ${cssVar(`--heading-font-family`)};
    font-size: ${cssVar(`--${hx}-font-size`)};
    font-weight: ${cssVar(`--heading-font-weight`)};
  `
}

const styles = css`
  * {
    box-sizing: border-box;
  }

  html {
    border: 0;
    font-size: ${(BASE_FONT_SIZE_PX / 16) * 100}%;
    line-height: ${BASE_LINE_HEIGHT_PX / BASE_FONT_SIZE_PX};
    margin: 0;
    overflow-y: auto;
    padding: 0;
    vertical-align: baseline;
  }

  body {
    background-color: ${cssVar(`--body-color-secondary`)};
    color: ${cssVar(`--body-color-primary`)};
    font-family: ${cssVar(`--body-font-family`)};
    font-size: 1rem;
    font-weight: ${cssVar(`--body-font-weight`)};
    padding: 0 ${cssVar(`--gutter-size`)};
  }

  a {
    color: ${cssVar(`--body-link-color-primary`)};
    font-weight: bold;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 0.125em;
    text-underline-offset: 0.2em;
    transition: all 0.2s ease-out;
  }

  a:active,
  a:hover {
    color: ${cssVar(`--body-link-color-secondary`)};
    text-decoration: underline;
  }

  button {
    align-content: center;
    background-color: ${cssVar(`--body-color-secondary`)};
    border: 1px solid ${cssVar(`--body-color-primary`)};
    border-radius: 4px;
    color: ${cssVar(`--body-color-primary`)};
    display: flex;
    font-family: ${cssVar(`--body-font-family`)};
    font-size: 1rem;
    font-weight: ${cssVar(`--body-font-weight`)};
    justify-content: center;
    line-height: 2rem;
  }

  h1 {
    ${headingStyles(`h1`)}
  }

  h2 {
    ${headingStyles(`h2`)}
  }

  h3 {
    ${headingStyles(`h3`)}
  }

  h4 {
    ${headingStyles(`h4`)}
  }

  h5 {
    ${headingStyles(`h5`)}
  }

  h6 {
    ${headingStyles(`h6`)}
  }
`

function ThemeElementStyles() {
  return <Global styles={styles} />
}

export default ThemeElementStyles
