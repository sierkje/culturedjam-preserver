import { Global } from "@emotion/react"

import themeConstants from "@/theme-constants"
import themeSizes from "@/theme-sizes"
import type { HeadingElement, ThemeHeadingSizeVariable, ThemeSizeVariable } from "@/types/theme"

const { HEADING_SIZE_RATIO } = themeConstants

const headingSizeRem: Record<HeadingElement, number> = {
  h1: HEADING_SIZE_RATIO ** 3,
  h2: HEADING_SIZE_RATIO ** 2,
  h3: HEADING_SIZE_RATIO,
  h4: 1,
  h5: HEADING_SIZE_RATIO ** -1,
  h6: HEADING_SIZE_RATIO ** -2,
}

function headingSize(hx: HeadingElement) {
  return `${headingSizeRem[hx]}rem`
}

const headingSizeVariables: Record<ThemeHeadingSizeVariable, string> = {
  "--h1-font-size": headingSize(`h1`),
  "--h2-font-size": headingSize(`h2`),
  "--h3-font-size": headingSize(`h3`),
  "--h4-font-size": headingSize(`h4`),
  "--h5-font-size": headingSize(`h5`),
  "--h6-font-size": headingSize(`h6`),
}

const sizeVariables: Record<ThemeSizeVariable, string> = Object.entries(themeSizes).reduce(
  (prev, [variable, { size, unit }]) => ({
    ...prev,
    [variable]: `${size}${unit}`,
  }),
  {} as Record<ThemeSizeVariable, string>
)

const styles: Record<":root", Record<ThemeHeadingSizeVariable | ThemeSizeVariable, string>> = {
  ":root": { ...headingSizeVariables, ...sizeVariables },
}

function ThemeSizeVariables() {
  return <Global styles={styles} />
}

export default ThemeSizeVariables
