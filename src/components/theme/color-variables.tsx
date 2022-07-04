import { Global } from "@emotion/react"

import themeColorToHsla from "@/helpers/theme-color-to-hsla"
import { COLOR_SCHEME_CLASS_NAME } from "@/hooks/use-color-scheme"
import themeColors from "@/theme-colors"
import type { ThemeColorVariable } from "@/types/theme"

const { variables } = themeColors

function getColors(mode: `light` | `dark`) {
  return Object.entries(variables).reduce(
    (prev, [variable, color]) => ({
      ...prev,
      [variable]: themeColorToHsla(color[mode]),
    }),
    {} as Record<ThemeColorVariable, string>
  )
}

const colorVariableCss: Record<
  ":root" | `:root.${typeof COLOR_SCHEME_CLASS_NAME}`,
  Record<ThemeColorVariable, string>
> = {
  ":root": getColors(`light`),
  [`:root.${COLOR_SCHEME_CLASS_NAME}` as const]: getColors(`dark`),
}

function ThemeColorVariables() {
  return <Global styles={colorVariableCss} />
}
export default ThemeColorVariables
