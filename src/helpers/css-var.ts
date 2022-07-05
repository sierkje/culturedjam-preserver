import type { ThemeCssVariable } from "@/types/theme"

function cssVar(name: ThemeCssVariable) {
  return `var(${name})`
}

export default cssVar
