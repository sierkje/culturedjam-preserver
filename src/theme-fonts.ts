// Import webfonts here. For example:
// import "@fontsource/kanit/800.css"
import "@fontsource/kanit/800.css"
import "@fontsource/jura"
import "@fontsource/major-mono-display/400.css"

import type { ThemeFonts } from "@/types/theme"

const themeFonts: ThemeFonts = {
  "--body-font-family": `"Jura", sans-serif`,
  "--body-font-weight": 400,
  "--fancy-font-family": `"Major Mono Display", monospace`,
  "--fancy-font-weight": 400,
  "--heading-font-family": `"Kanit", sans-serif`,
  "--heading-font-weight": 800,
}

export default themeFonts
