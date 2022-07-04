import type * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react"
import warning from "tiny-warning"

import useEventListener from "@/hooks/use-event-listener"

declare global {
  interface WindowEventMap {
    "local-storage": CustomEvent
  }
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  // eslint-disable-next-line no-undef-init
  let parsedJSON: T | undefined = undefined

  try {
    parsedJSON = value === `undefined` ? undefined : JSON.parse(value ?? ``)
  } catch {
    warning(true, `parsing error on ${value}`)
  }

  return parsedJSON
}

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === `undefined`) {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (parseJSON(item) as T) : initialValue
    } catch {
      warning(true, `Error reading localStorage key “${key}”.`)

      return initialValue
    }
  }, [initialValue, key])

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue)

  const setValueRef = useRef<React.Dispatch<React.SetStateAction<T>>>()

  setValueRef.current = (value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === `undefined`) {
      warning(
        true,
        `Tried setting localStorage key “${key}” even though environment is not a client.`
      )
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue))

      // Save state
      setStoredValue(newValue)

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event(`local-storage`))
    } catch {
      warning(true, `Error reading localStorage key “${key}”.`)
    }
  }

  // read the stored value after hydrating
  const [initialReadValue] = useState(() => readValue)

  useEffect(() => {
    setStoredValue(initialReadValue())
  }, [initialReadValue])

  const handleStorageChange = useCallback(() => {
    setStoredValue(readValue())
  }, [readValue])

  // this only works for other documents, not the current one
  useEventListener(`storage`, handleStorageChange)

  // this is a custom event, triggered in writeValueToLocalStorage
  useEventListener(`local-storage`, handleStorageChange)

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
    (value) => setValueRef.current?.(value),
    []
  )

  return [storedValue, setValue]
}

export default useLocalStorage
