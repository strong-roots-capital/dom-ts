/**
 * @since 8.1.0
 */
import { either as E, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import { AllElementMeta, MatchElementTagName } from "./meta-element"

export {
  /**
   * @category Constructors
   * @since 8.1.0
   */
  appendChild,
  /**
   * @category Constructors
   * @since 8.1.0
   */
  contains,
  /**
   * @category Constructors
   * @since 8.1.0
   */
  ownerDocument,
  /**
   * @category Constructors
   * @since 8.1.0
   */
  unsafeAppendChild,
} from "./node"

export {
  /**
   * @category Constructors
   * @since 8.1.0
   */
  querySelector,
  /**
   * @category Constructors
   * @since 8.1.0
   */
  querySelectorAll,
} from "./parent-node"

/**
 * @category Constructors
 * @since 0.0.0
 */
export function getElementById(
  elementId: string
): RIO.ReaderIO<Document, O.Option<HTMLElement>> {
  return (document) => () =>
    pipe(document.getElementById(elementId), O.fromNullable)
}

/**
 * @category Constructors
 * @since 0.0.0
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

/**
 * @category Constructors
 * @since 0.0.0
 */
export function createElement<K extends AllElementMeta["_tagName"]>(
  tagName: K
): RIO.ReaderIO<
  Document,
  E.Either<HTMLUnknownElement, MatchElementTagName<K>["_element"]>
>

/**
 * @category Constructors
 * @since 0.0.0
 */
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
