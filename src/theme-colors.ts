import type { ThemeColors } from "@/types/theme"

const names: ThemeColors["names"] = {
  ALMOST_BLACK: [0, 0, 0.15],
  DARKEST_GREY: [0, 0, 0.25],
  DARK_GREY: [0, 0, 0.35],
  MEDIUM_GREY: [0, 0, 0.55],
  LIGHT_GREY: [0, 0, 0.75],
  LIGHTEST_GREY: [0, 0, 0.85],
  ALMOST_WHITE: [0, 0, 0.95],
  BLUEBERRY_JAM: [250, 1, 0.4],
  ORANGE_MARMALADE: [25, 1, 0.45],
  PINEAPPLE_JAM: [40, 1, 0.5],
}

const variables: ThemeColors["variables"] = {
  "--body-color-primary": { light: `ALMOST_BLACK`, dark: `ALMOST_WHITE` },
  "--body-color-secondary": { light: `ALMOST_WHITE`, dark: `ALMOST_BLACK` },
  "--body-link-color-primary": { light: `BLUEBERRY_JAM`, dark: `PINEAPPLE_JAM` },
  "--body-link-color-secondary": { light: `ORANGE_MARMALADE`, dark: `ORANGE_MARMALADE` },

  "--footer-color": { light: `MEDIUM_GREY`, dark: `MEDIUM_GREY` },

  "--header-color-primary": { light: `MEDIUM_GREY`, dark: `MEDIUM_GREY` },
  "--header-color-secondary": { light: `LIGHTEST_GREY`, dark: `DARKEST_GREY` },
  "--header-link-color-primary": { light: `DARK_GREY`, dark: `LIGHT_GREY` },
  "--header-link-color-secondary": { light: `ALMOST_BLACK`, dark: `ALMOST_WHITE` },

  "--heading-color": { light: `DARK_GREY`, dark: `LIGHT_GREY` },

  "--highlight-color-primary": { light: `ORANGE_MARMALADE`, dark: `ORANGE_MARMALADE` },
  "--highlight-color-secondary": { light: `ALMOST_WHITE`, dark: `ALMOST_WHITE` },
}

const themeColors: ThemeColors = { names, variables }

export default themeColors
