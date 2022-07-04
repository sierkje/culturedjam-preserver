import type * as React from "react"
import { useEffect, useLayoutEffect as useReactLayoutEffect, useRef } from "react"

function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void
): void
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(eventName: K, handler: (event: HTMLElementEventMap[K]) => void, element: React.RefObject<T>): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  eventName: KW | KH,
  handler: (event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event) => void,
  element?: React.RefObject<T>
) {
  // Ensure that useLayoutEffect doesn't break on server.
  const useLayoutEffect = typeof window !== `undefined` ? useReactLayoutEffect : useEffect

  // Create a ref that stores handler.
  const savedHandler = useRef(handler)

  useLayoutEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let cleanUp = () => {}

    // Define the listening target
    const target: T | Window = element?.current || window

    if (typeof target !== `undefined` && typeof target.addEventListener !== `undefined`) {
      // Create event listener that calls handler function stored in ref
      const eventListener: typeof handler = (event) => savedHandler.current(event)

      target.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      cleanUp = () => {
        target.removeEventListener(eventName, eventListener)
      }
    }

    return cleanUp
  }, [eventName, element])
}

export default useEventListener
