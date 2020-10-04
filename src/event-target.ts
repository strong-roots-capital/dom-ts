import * as RIO from "fp-ts-contrib/lib/ReaderIO"

// todo - event map
export function addEventListener(): RIO.ReaderIO<EventTarget, void> {
  return (target) => () => target.addEventListener("click", () => {})
}

export function removeEventListener(): RIO.ReaderIO<EventTarget, void> {
  return (target) => () => target.removeEventListener("click", () => {}, { capture: true })
}

export function dispatchEvent(event: Event): RIO.ReaderIO<EventTarget, boolean> {
  return (target) => () => target.dispatchEvent(event)
}
