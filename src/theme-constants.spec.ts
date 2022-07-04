import themeConstants from "./theme-constants"

const { BASE_FONT_SIZE_PX, HEADING_SIZE_RATIO, TOUCH_TARGET_SIZE_PX } = themeConstants

describe(`theme-constants.ts`, () => {
  it(`exports the 'BASE_FONT_SIZE_PX' constant as a number`, () => {
    expect(typeof BASE_FONT_SIZE_PX).toBe(`number`)
  })
  it(`exports the 'HEADING_SIZE_RATIO' constant as a number`, () => {
    expect(typeof HEADING_SIZE_RATIO).toBe(`number`)
  })
  it(`exports the 'TOUCH_TARGET_SIZE__PX' constant as 44`, () => {
    expect(typeof TOUCH_TARGET_SIZE_PX).toBe(44)
  })
})
