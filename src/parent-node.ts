/**
 * @since 8.1.0
 */
import { option as O, readonlyArray as ROA } from "fp-ts"
import { ReaderIO } from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import { AllElementMeta, MatchElementTagName } from "./meta-element"
import { fromIterable } from "./util"

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<ParentNode, O.Option<MatchElementTagName<K>["_element"]>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>> {
  return (parentNode) => () =>
    pipe(parentNode.querySelector<A>(selector), O.fromNullable)
}

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<ParentNode, ReadonlyArray<MatchElementTagName<K>["_element"]>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>>

/**
 * @category Constructors
 * @since 8.1.0
 */
export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>> {
  return (parentNode) => () =>
    pipe(parentNode.querySelectorAll<A>(selector), fromIterable, ROA.fromArray)
}
