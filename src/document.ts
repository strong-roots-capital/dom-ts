/**
 * @summary
 * the `Document` interface has been implemented according the
 * [Document via MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document).
 */
import { either as E, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import { AllElementMeta, MatchElementTagName } from "./meta-element"

export { appendChild, contains, ownerDocument, unsafeAppendChild } from "./node"
export { querySelector, querySelectorAll } from "./parent-node"

/**
 * @summary
 * Retrieve an `Element` that contains the specified ID.
 *
 * @param elementId A case-insensitive string that specifies the ID.
 *
 * @since 0.0.0?
 *
 * @description
 * [Adapted from MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
 *
 * The Document method `getElementById()` returns an `Element` object representing the element
 * whose id property matches the specified string.
 *
 * Since element IDs are required to be unique if specified, they're a useful way to get access
 * to a specific element quickly.
 *
 * If you need to get access to an element which doesn't have an ID, you can use `querySelector()`
 * to find the element using any selector.
 */
export function getElementById(elementId: string): RIO.ReaderIO<Document, O.Option<HTMLElement>> {
  return (document) => () => pipe(document.getElementById(elementId), O.fromNullable)
}

/**
 * @summary
 * Create an element by the provided `tagName`.
 * Returns `Left<HTMLUnknown>` if the tag does not exist.
 *
 * In an HTML document, the document.createElement() method creates the
 * HTML element specified by tagName, or an HTMLUnknownElement if
 * tagName isn't recognized.
 *
 * @param tagName
 * @param options
 *
 * @internal
 * The user could still input the wrong one in.
 */
export function createElement<
  K extends AllElementMeta["_tagName"],
  L extends AllElementMeta["_tagName"]
>(
  tagName: K,
  options: { is: L }
): RIO.ReaderIO<
  Document,
  E.Either<
    HTMLUnknownElement,
    MatchElementTagName<K>["_element"] & MatchElementTagName<L>["_element"]
  >
>

export function createElement<K extends AllElementMeta["_tagName"]>(
  tagName: K
): RIO.ReaderIO<Document, E.Either<HTMLUnknownElement, MatchElementTagName<K>["_element"]>>

export function createElement(
  tagName: string,
  options?: { is: string }
): RIO.ReaderIO<Document, E.Either<HTMLUnknownElement, HTMLElement>> {
  return (document) => () =>
    pipe(
      document.createElement(tagName, options),
      E.fromPredicate(
        (element) => !(element instanceof HTMLUnknownElement),
        (element) => element
      )
    )
}
