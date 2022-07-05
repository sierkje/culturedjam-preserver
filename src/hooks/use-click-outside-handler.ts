import type * as React from "react"

import useEventListener from "@/hooks/use-event-listener"

function useClickOutsideHandler<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent) => void,
  mouseEvent: "mousedown" | "mouseup" = `mousedown`
): void {
  useEventListener(mouseEvent, (event) => {
    const element = ref?.current

    // Do nothing if clicking ref's element or descendent elements
    if (!element || element.contains(event.target as Node)) {
      return
    }

    handler(event)
  })
}

export default useClickOutsideHandler
