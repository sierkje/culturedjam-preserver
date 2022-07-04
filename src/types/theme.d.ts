type HslColor = readonly [number, number, number]

type ThemeColorName =
  | "ALMOST_BLACK"
  | "DARKEST_GREY"
  | "DARK_GREY"
  | "MEDIUM_GREY"
  | "LIGHT_GREY"
  | "LIGHTEST_GREY"
  | "ALMOST_WHITE"
  | "ORANGE_MARMALADE"
  | "PINEAPPLE_JAM"
  | "BLUEBERRY_JAM"

type ThemeColorVariable =
  | "--body-text-color"
  | "--body-bg-color"
  | "--body-link-color-normal"
  | "--body-link-color-active"
  | "--body-link-color-underline"
  | "--header-text-color"
  | "--header-bg-color"
  | "--header-link-color-normal"
  | "--header-link-color-active"
  | "--header-link-color-underline"
  | "--highlight-color"
  | "--highlight-color-secondary"
  | "--heading-color"

interface ThemeColors {
  names: Record<ThemeColorName, HslColor>
  variables: Record<ThemeColorVariable, { light: ThemeColorName; dark: ThemeColorName }>
}

interface ThemeConstants {
  BASE_FONT_SIZE_PX: number
  HEADING_SIZE_RATIO: number
  TOUCH_TARGET_SIZE_PX: 44
}

export type { HslColor, ThemeColorName, ThemeColors, ThemeColorVariable, ThemeConstants }
