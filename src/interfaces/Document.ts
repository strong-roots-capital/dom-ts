import { option as O, array as A, either as E } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import * as meta from "../meta"

export function getElementById(id: string): RIO.ReaderIO<Document, O.Option<HTMLElement>> {
  return (document) => () => pipe(document.getElementById(id), O.fromNullable)
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

const aaaaa = createElement("body", { is: "html" })(document)
