import { io as IO, option as O } from "fp-ts"
import * as RIO from "fp-ts-contrib/ReaderIO"
import { constVoid, flow, identity, pipe } from "fp-ts/function"

export function contains(child: Node): RIO.ReaderIO<Node, boolean> {
  return (node) => () => node.contains(child)
}

export const ownerDocument: RIO.ReaderIO<Node, O.Option<Document>> = (
  node
) => () => pipe(node.ownerDocument, O.fromNullable)

export function getRootNode(
  options?: Required<GetRootNodeOptions>
): RIO.ReaderIO<Node, Node> {
  return (node) => () => node.getRootNode(options)
}

/**
 * @internal
 */
function childExistsInNodeDOM(
  newChild: Node
): RIO.ReaderIO<Node, O.Option<void>> {
  return pipe(
    getRootNode({ composed: false }),
    RIO.chain((node) => RIO.fromIOK(contains(newChild))(node)),
    RIO.map(flow(O.fromPredicate(identity), O.map(constVoid)))
  )
}

export function appendChild(
  newChild: Node
): RIO.ReaderIO<Node, O.Option<void>> {
  return pipe(
    childExistsInNodeDOM(newChild),
    RIO.map(O.fromPredicate(O.isNone)),
    RIO.chain(O.traverse(RIO.Applicative)(() => unsafeAppendChild(newChild)))
  )
}

export function unsafeAppendChild(newChild: Node): RIO.ReaderIO<Node, void> {
  return (node) => pipe(() => node.appendChild(newChild), IO.map(constVoid))
}
