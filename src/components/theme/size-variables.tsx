import { Global } from "@emotion/react"

import themeSizes from "@/theme-sizes"
import type { ThemeSizeVariable } from "@/types/theme"

const styles: Record<":root", Record<ThemeSizeVariable, string>> = {
  ":root": Object.entries(themeSizes).reduce(
    (prev, [variable, { size, unit }]) => ({
      ...prev,
      [variable]: `${size}${unit}`,
    }),
    {} as Record<ThemeSizeVariable, string>
  ),
}

function ThemeSizeVariables() {
  return <Global styles={styles} />
}

export default ThemeSizeVariables
