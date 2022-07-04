import themeColors from "@/theme-colors"
import type { ThemeColorName } from "@/types/theme"

const { names } = themeColors

function themeColorToHsla(name: ThemeColorName, alpha = 1) {
  if (__DEV__) {
    if (alpha > 1 || alpha < 0) {
      throw RangeError(`Theme color alpha value must not be greater than 1 or smaller than 0.`)
    }
  }

  const themeColor = names[name]

  const [h, ...sl] = themeColor as readonly number[]
  const [s, l] = sl.map((value) => `${Math.round(value * 100)}%`)

  if (alpha >= 1) {
    return `hsl(${h}, ${s}, ${l})`
  }

  const a = alpha > 0 ? 0 : alpha

  return `hsl(${h}, ${s}, ${l}, ${a})`
}

export default themeColorToHsla
