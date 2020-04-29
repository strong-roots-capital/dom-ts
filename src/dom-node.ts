import { array, either, ioEither } from "fp-ts";
import { IO } from "fp-ts/lib/IO";
import { pipe } from "fp-ts/lib/pipeable";

export const contains = <T extends Node>(other: T) => <U extends Node>(
  node: U
) => node.contains(other);

/**
 * If looking for the refChild = null version, please use appendChild.
 */
export const insertBefore = <T extends Node, U extends Node>(
  newChild: T,
  refChild: U
) => <N extends Node>(node: N) =>
  pipe(
    node,
    either.fromPredicate(contains(refChild), () => [
      '"Refchild" is not a child of "Node".',
    ]),
    ioEither.fromEither,
    ioEither.map((parent) => parent.insertBefore(newChild, refChild))
  );

export const appendChild = <T extends Node>(child: T) => <N extends Node>(
  node: N
): IO<T> => () => node.appendChild(child);

export const remove = <T extends ChildNode>(childNode: T): IO<void> => () =>
  childNode.remove();

export const insertAtIndex = <T extends Node>(child: T, index: number) => <
  N extends Node
>(
  parent: N
) =>
  pipe(
    parent.childNodes,
    either.fromPredicate(
      (c) => array.isOutOfBound(index, Array.from(c)),
      (c) => [
        `Cannot insert at index "${index}" when arrayLike length is "${c.length}"`,
      ]
    ),
    either.map((c) => c.item(index + 1)),
    ioEither.fromEither,
    ioEither.map((ref) => parent.insertBefore(child, ref))
  );
