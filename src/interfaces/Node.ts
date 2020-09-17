import { io as IO, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { constVoid, flow, pipe } from "fp-ts/function"

export function contains(child: Node): RIO.ReaderIO<Node, boolean> {
  return (node) => () => node.contains(child)
}

export const ownerDocument: RIO.ReaderIO<Node, O.Option<Document>> = (node) => () =>
  pipe(node.ownerDocument, O.fromNullable)

export function childExistsInNodeDocument(newChild: Node): RIO.ReaderIO<Node, O.Option<void>> {
  return pipe(
    ownerDocument,
    RIO.chain(O.traverse(RIO.Applicative)(flow(contains(newChild), RIO.fromIO))),
    RIO.map(O.map(constVoid))
  )
}

export function appendChild(newChild: Node): RIO.ReaderIO<Node, O.Option<void>> {
  return pipe(
    childExistsInNodeDocument(newChild),
    // reverse
    RIO.map(O.fromPredicate(O.isNone)),
    RIO.chain(O.traverse(RIO.Applicative)(() => unsafeAppendChild(newChild)))
  )
}

export function unsafeAppendChild(newChild: Node): RIO.ReaderIO<Node, void> {
  return (node) => pipe(() => node.appendChild(newChild), IO.map(constVoid))
}
