import themeConstants from "./theme-constants"

const { BASE_FONT_SIZE_PX, HEADING_SIZE_RATIO, MAX_SENTENCE_LENGTH_CH, TOUCH_TARGET_SIZE_PX } =
  themeConstants

describe(`theme-constants.ts`, () => {
  it(`exports the 'BASE_FONT_SIZE_PX' constant as a number`, () => {
    expect(typeof BASE_FONT_SIZE_PX).toBe(`number`)
  })
  it(`exports the 'HEADING_SIZE_RATIO' constant as a number`, () => {
    expect(typeof HEADING_SIZE_RATIO).toBe(`number`)
  })
  it(`exports the 'MAX_SENTENCE_LENGTH_CH' constant as a number`, () => {
    expect(typeof MAX_SENTENCE_LENGTH_CH).toBe(`number`)
  })
  it(`'MAX_SENTENCE_LENGTH_CH' is at least 50`, () => {
    expect(typeof MAX_SENTENCE_LENGTH_CH).toBeGreaterThanOrEqual(50)
  })
  it(`'MAX_SENTENCE_LENGTH_CH' is at most 85`, () => {
    expect(typeof MAX_SENTENCE_LENGTH_CH).toBeLessThanOrEqual(85)
  })
  it(`exports the 'TOUCH_TARGET_SIZE__PX' constant as number`, () => {
    expect(typeof TOUCH_TARGET_SIZE_PX).toBe(`number`)
  })
  it(`'TOUCH_TARGET_SIZE__PX' is at least 44`, () => {
    expect(TOUCH_TARGET_SIZE_PX).toBeGreaterThanOrEqual(44)
  })
})
