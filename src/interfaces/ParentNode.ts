import { option as O, readonlyArray as ROA } from "fp-ts"
import { ReaderIO } from "fp-ts-contrib/ReaderIO"
import { pipe } from "fp-ts/function"
import { AllElementMeta, MatchTagName } from "../meta"
import { fromIterable } from "../util"

export function querySelector<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<ParentNode, O.Option<MatchTagName<K>["_element"]>>

export function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>>

export function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>> {
  return (parentNode) => () => pipe(parentNode.querySelector<A>(selector), O.fromNullable)
}

export function querySelectorAll<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<ParentNode, ReadonlyArray<MatchTagName<K>["_element"]>>

export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>>

export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>> {
  return (parentNode) => () =>
    pipe(parentNode.querySelectorAll<A>(selector), fromIterable, ROA.fromArray)
}
