/**
 * @since 8.1.0
 */
import * as RIO from "fp-ts-contrib/lib/ReaderIO"

// todo - event map
/**
 * @category Constructors
 * @since 8.1.0
 */
export function addEventListener(): RIO.ReaderIO<EventTarget, void> {
  //eslint-disable-next-line
  return (target) => () => target.addEventListener("click", () => {})
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export function removeEventListener(): RIO.ReaderIO<EventTarget, void> {
  return (target) => () =>
    //eslint-disable-next-line
    target.removeEventListener("click", () => {}, { capture: true })
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export function dispatchEvent(
  event: Event
): RIO.ReaderIO<EventTarget, boolean> {
  return (target) => () => target.dispatchEvent(event)
}
