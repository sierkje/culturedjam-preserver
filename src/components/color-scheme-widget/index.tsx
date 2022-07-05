import { css } from "@emotion/react"
import { calc } from "@vanilla-extract/css-utils"
import type * as React from "react"
import { memo, Fragment, useCallback, useRef, useState } from "react"

import type { ColorSchemeWidgetIconProps } from "@/components/color-scheme-widget/icon"
import Icon from "@/components/color-scheme-widget/icon"
import cssVar from "@/helpers/css-var"
import useClickOutsideHandler from "@/hooks/use-click-outside-handler"
import type { ColorScheme, ColorSchemePreference } from "@/hooks/use-color-scheme"
import useColorScheme from "@/hooks/use-color-scheme"
import themeConstants from "@/theme-constants"

const { TOUCH_TARGET_SIZE_PX } = themeConstants

type SchemeIconProps = Omit<ColorSchemeWidgetIconProps, "as" | "scheme"> & { scheme: ColorScheme }

function SchemeIcon(props: SchemeIconProps) {
  const { scheme, ...otherProps } = props
  const iconType = scheme === `dark` ? `moon` : `sun`

  return <Icon as={iconType} {...otherProps} />
}

const toggleButtonCss = css`
  aspect-ratio: 1;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 50%;
  cursor: pointer;

  &[data-has-menu="true"] {
    cursor: default;
  }

  &:hover,
  &[data-has-menu="true"] {
    border-color: ${cssVar(`--highlight-color-primary`)};
  }
`

const preferenceMenuCss = (size: number) => css`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: ${calc(cssVar(`--gutter-size`))
    .add(`${size / 2}px`)
    .negate()
    .toString()};
  top: ${cssVar(`--header-inner-height`)};
`

const preferenceButtonCss = css`
  background-color: ${cssVar(`--body-color-primary`)};
  border: 2px solid ${cssVar(`--body-color-secondary`)};
  color: ${cssVar(`--body-color-secondary`)};
  cursor: pointer;
  justify-content: flex-end;
  padding: 0 ${cssVar(`--gutter-size`)} 0 ${calc(cssVar(`--gutter-size`)).multiply(2).toString()};
  width: 100%;

  &[data-is-current-color-scheme-preference="true"] {
    background-color: ${cssVar(`--highlight-color-secondary`)};
    border-color: ${cssVar(`--highlight-color-primary`)};
    color: ${cssVar(`--highlight-color-primary`)};
    text-transform: uppercase;
  }

  &:active,
  &:hover {
    background-color: ${cssVar(`--highlight-color-primary`)};
    border-color: ${cssVar(`--body-color-secondary`)};
    color: ${cssVar(`--highlight-color-secondary`)};
  }
`

type WidgetProps = Omit<React.ComponentPropsWithoutRef<"button">, "type" | "title"> & {
  size?: number
}

function Widget(props: WidgetProps) {
  const { size = TOUCH_TARGET_SIZE_PX, ...restProps } = props

  const [needsMenu, setNeedsMenu] = useState(false)

  const [[colorScheme, colorSchemePreference], setColorScheme] = useColorScheme()

  const toggleHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setNeedsMenu(!needsMenu)
  }

  const PreferenceMenuHandler: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      setNeedsMenu(false)
      setColorScheme(event.currentTarget.value as ColorSchemePreference)
    },
    [setColorScheme]
  )

  const preferencesContainerRef = useRef(null)

  useClickOutsideHandler(
    preferencesContainerRef,
    useCallback(() => {
      setNeedsMenu(false)
    }, [])
  )

  return (
    <Fragment>
      <button
        aria-hidden
        css={toggleButtonCss}
        type="button"
        data-has-menu={needsMenu}
        title="Change colors"
        onClick={toggleHandler}
        {...restProps}
      >
        <SchemeIcon scheme={colorScheme} color="currentColor" size={size - 4} />
      </button>

      <menu aria-hidden ref={preferencesContainerRef} css={preferenceMenuCss(size)}>
        {needsMenu &&
          Object.entries<string>({
            system: `Use OS theme`,
            dark: `Dark theme`,
            light: `Light theme`,
          }).map(([preference, label]) => (
            <li>
              <button
                type="button"
                css={preferenceButtonCss}
                data-is-current-color-scheme-preference={colorSchemePreference === preference}
                value={preference}
                onClick={PreferenceMenuHandler}
              >
                {label}
              </button>
            </li>
          ))}
      </menu>
    </Fragment>
  )
}

const ColorSchemeWidget = memo(Widget)

export { type WidgetProps as ColorSchemeWidgetProps }
export default ColorSchemeWidget
