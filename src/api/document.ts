/**
 * @summary
 * the `Document` interface has been implemented according the
 * [Document via MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document).
 */
import { either as E, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import * as meta from "../meta"

export { appendChild, contains, ownerDocument, unsafeAppendChild } from "./node"
export { querySelector, querySelectorAll } from "./parent-node"

/**
 * @summary
 * Returns a reference to the first object with the specified value of the ID or NAME attribute
 * from within a `Document`.
 *
 * @param elementId String that specifies the ID value. Case-insensitive.
 *
 * @description
 * [Available at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
 *
 * @since 0.0.0?
 */
export function getElementById(elementId: string): RIO.ReaderIO<Document, O.Option<HTMLElement>> {
  return (document) => () => pipe(document.getElementById(elementId), O.fromNullable)
}

export function createElement<
  K extends meta.AllElementMeta["_tagName"],
  L extends meta.AllElementMeta["_tagName"]
>(
  tagName: K,
  options: { is: L }
): RIO.ReaderIO<
  Document,
  E.Either<HTMLUnknownElement, meta.MatchTagName<K>["_element"] & meta.MatchTagName<L>["_element"]>
>

export function createElement<K extends meta.AllElementMeta["_tagName"]>(
  tagName: K
): RIO.ReaderIO<Document, E.Either<HTMLUnknownElement, meta.MatchTagName<K>["_element"]>>

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
