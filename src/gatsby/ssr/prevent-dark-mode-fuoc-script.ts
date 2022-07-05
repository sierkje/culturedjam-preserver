import {
  COLOR_SCHEME_CLASS_NAME,
  COLOR_SCHEME_LOCAL_STORAGE_KEY,
  COLOR_SCHEME_MQ,
} from "@/hooks/use-color-scheme"

const gatsbySSRPreventDarkModeFuOCScript = `
  ;(function preventDarkModeFoUC() {
    try {
      const mode = localStorage.getItem("${COLOR_SCHEME_LOCAL_STORAGE_KEY}")

      if (mode === 'light') {
        // mode === light && scheme === light
        return
      }

      if (mode !== 'dark') {
        if (!window.matchMedia("(${COLOR_SCHEME_MQ})").matches) {
          return
        }
      }

      document.documentElement.classList.add("${COLOR_SCHEME_CLASS_NAME}")
    } catch (e) {
      // Ignore errors.
    }
  })()
`

export { gatsbySSRPreventDarkModeFuOCScript }
