import themeConstants from "@/theme-constants"
import type { ThemeSizes } from "@/types/theme"

const { MAX_SENTENCE_LENGTH_CH, TOUCH_TARGET_SIZE_PX } = themeConstants

const gutterSizePx = 15

const headerInnerHeightPx = TOUCH_TARGET_SIZE_PX + gutterSizePx
const headerOuterHeightPx = headerInnerHeightPx + gutterSizePx

const themeSizes: ThemeSizes = {
  "--gutter-size": { size: gutterSizePx, unit: `px` },
  "--header-inner-height": { size: headerInnerHeightPx, unit: `px` },
  "--header-outer-height": { size: headerOuterHeightPx, unit: `px` },
  "--max-content-width": { size: MAX_SENTENCE_LENGTH_CH, unit: `ch` },
}

export default themeSizes
