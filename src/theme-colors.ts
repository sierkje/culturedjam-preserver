import type { ThemeColors } from "@/types/theme"

const names: ThemeColors["names"] = {
  ALMOST_BLACK: [0, 0, 0],
  DARKEST_GREY: [0, 0, 0.95],
  DARK_GREY: [0, 0, 0.85],
  MEDIUM_GREY: [0, 0, 0],
  LIGHT_GREY: [0, 0, 0],
  LIGHTEST_GREY: [0, 0, 0],
  ALMOST_WHITE: [0, 0, 0],
  BLUEBERRY_JAM: [0, 0, 0],
  ORANGE_MARMALADE: [0, 0, 0],
  PINEAPPLE_JAM: [0, 0, 0],
}

const variables: ThemeColors["variables"] = {
  "--body-text-color": { light: `DARK_GREY`, dark: `LIGHT_GREY` },
  "--body-bg-color": { light: `LIGHT_GREY`, dark: `DARK_GREY` },
  "--body-link-color-normal": { light: `BLUEBERRY_JAM`, dark: `PINEAPPLE_JAM` },
  "--body-link-color-active": { light: `ORANGE_MARMALADE`, dark: `ORANGE_MARMALADE` },
  "--body-link-color-underline": { light: `ORANGE_MARMALADE`, dark: `ORANGE_MARMALADE` },

  "--header-text-color": { light: `MEDIUM_GREY`, dark: `MEDIUM_GREY` },
  "--header-bg-color": { light: `LIGHTEST_GREY`, dark: `DARKEST_GREY` },
  "--header-link-color-normal": { light: `DARK_GREY`, dark: `LIGHT_GREY` },
  "--header-link-color-active": { light: `ALMOST_BLACK`, dark: `ALMOST_WHITE` },
  "--header-link-color-underline": { light: `ORANGE_MARMALADE`, dark: `ORANGE_MARMALADE` },

  "--heading-color": { light: `DARKEST_GREY`, dark: `LIGHTEST_GREY` },

  "--highlight-color": { light: `ORANGE_MARMALADE`, dark: `ORANGE_MARMALADE` },
  "--highlight-color-secondary": { light: `ALMOST_WHITE`, dark: `ALMOST_WHITE` },
}

const themeColors: ThemeColors = { names, variables }

export default themeColors
