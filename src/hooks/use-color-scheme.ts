import { useCallback, useEffect, useState } from "react"

import useLocalStorage from "@/hooks/use-local-storage"

const COLOR_SCHEME_LOCAL_STORAGE_KEY = `cultured-jam.color-scheme-preference`
const COLOR_SCHEME_CLASS_NAME = `color-scheme--dark`
const COLOR_SCHEME_MQ = `(prefers-color-scheme: dark)`

type ColorScheme = `light` | `dark`
type ColorSchemePreference = ColorScheme | `system`
type SetColorSchemePreference = (preference: ColorSchemePreference) => void

function useColorScheme(): [[ColorScheme, ColorSchemePreference], SetColorSchemePreference] {
  const [preference, setPreference] = useLocalStorage<ColorSchemePreference>(
    COLOR_SCHEME_LOCAL_STORAGE_KEY,
    `system`
  )

  const [scheme, setScheme] = useState<ColorScheme>(() =>
    !!document?.documentElement &&
    document.documentElement.classList.contains(COLOR_SCHEME_CLASS_NAME)
      ? `dark`
      : `light`
  )

  const updateSchemeFromMql = useCallback((isDark: boolean): void => {
    setScheme(isDark ? `dark` : `light`)
  }, [])

  const mqlListener = useCallback(
    (event: MediaQueryListEvent): void => {
      updateSchemeFromMql(event.matches)
    },
    [updateSchemeFromMql]
  )

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let cleanUp = () => {}

    if (preference !== `dark` && preference !== `light`) {
      const mql = window.matchMedia(COLOR_SCHEME_MQ)

      updateSchemeFromMql(mql.matches)

      mql.addEventListener(`change`, mqlListener)

      cleanUp = () => mql.removeEventListener(`change`, mqlListener)
    } else {
      setScheme(preference)
    }

    return cleanUp
  }, [preference, updateSchemeFromMql, mqlListener])

  useEffect(() => {
    if (undefined !== document?.documentElement) {
      if (scheme === `dark`) {
        document.documentElement.classList.add(COLOR_SCHEME_CLASS_NAME)
      } else {
        document.documentElement.classList.remove(COLOR_SCHEME_CLASS_NAME)
      }
    }
  }, [scheme])

  const setColorSchemePreference: SetColorSchemePreference = useCallback(
    (schemePreference: ColorSchemePreference) => {
      setPreference(schemePreference)
    },
    [setPreference]
  )
  return [[scheme, preference], setColorSchemePreference]
}

export type { ColorScheme, ColorSchemePreference }
export { COLOR_SCHEME_CLASS_NAME, COLOR_SCHEME_LOCAL_STORAGE_KEY, COLOR_SCHEME_MQ }
export default useColorScheme
