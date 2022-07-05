type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

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
type ThemeFontFamilyVariable = "--body-font-family" | "--heading-font-family"

type ThemeFontWeightVariable = "--body-font-weight" | "--heading-font-weight"

type ThemeFontVariable = ThemeFontFamilyVariable | ThemeFontWeightVariable

type ThemeFonts = Record<ThemeFontFamilyVariable, string> & Record<ThemeFontWeightVariable, number>

type ThemeSizeVariable =
  | "--header-outer-height"
  | "--header-inner-height"
  | "--gutter-size"
  | "--max-content-width"

type ThemeHeadingSizeVariable =
  | "--h1-font-size"
  | "--h2-font-size"
  | "--h3-font-size"
  | "--h4-font-size"
  | "--h5-font-size"
  | "--h6-font-size"

type ThemeSizes = Record<
  ThemeSizeVariable,
  { size: number; unit: "px" | "rem" | "ch" | "em" | "%" }
>

interface ThemeConstants {
  BASE_FONT_SIZE_PX: number
  HEADING_SIZE_RATIO: number
  /**
   * Touch target size (in px) should be at least 44.
   */
  TOUCH_TARGET_SIZE_PX: number
  /**
   * For optimal readability the maximum sentence length (in ch) should be around 60-75, min. 50 and max. 85.
   */
  MAX_SENTENCE_LENGTH_CH: number
}

type ThemeCssVariable =
  | ThemeColorVariable
  | ThemeFontVariable
  | ThemeHeadingSizeVariable
  | ThemeSizeVariable

export type {
  HeadingElement,
  HslColor,
  ThemeColorName,
  ThemeColors,
  ThemeColorVariable,
  ThemeConstants,
  ThemeCssVariable,
  ThemeFonts,
  ThemeFontVariable,
  ThemeHeadingSizeVariable,
  ThemeSizes,
  ThemeSizeVariable,
}
