import { Global } from "@emotion/react"

import themeFonts from "@/theme-fonts"
import type { ThemeFonts } from "@/types/theme"

const styles: Record<":root", ThemeFonts> = {
  ":root": themeFonts,
}

function ThemeFontVariables() {
  return <Global styles={styles} />
}

export default ThemeFontVariables
