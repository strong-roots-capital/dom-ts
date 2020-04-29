import { array, either, ioEither, option } from "fp-ts";
import { IO } from "fp-ts/lib/IO";
import { pipe } from "fp-ts/lib/pipeable";
import { flow } from "fp-ts/lib/function";

/**
 * @summary
 * Asserts if the node is a descendant of the given ancestor.
 */
export const contains = <T extends Node>(node: T) => <U extends Node>(
  ancestor: U
) => ancestor.contains(node);

/**
 * If looking for the refChild = null version, please use appendChild.
 * @todo refactor into null
 */
export const insertBefore = <T extends Node, U extends Node>(
  newChild: T,
  refChild: U
) => <N extends Node>(node: N) =>
  pipe(
    node,
    either.fromPredicate(contains(refChild), () => null),
    ioEither.fromEither,
    ioEither.map((parent) => parent.insertBefore(newChild, refChild))
  );

/**
 * @summary
 * Add a child to the end of the parent's children.
 */
export const appendChild = <T extends Node>(node: T) => <N extends Node>(
  parent: N
): IO<T> => () => parent.appendChild(node);

/**
 * @summary
 * Remove a child.
 */
export const remove = <T extends ChildNode>(node: T): IO<void> => () =>
  node.remove();

const isInsertableIndex = (index: number, values: any[]) =>
  index >= 0 && index <= values.length;

/**
 * @summary
 * Inserts a child at the given index.
 * If the index is out of the insertion range, null is returned.
 */
export const insertChildAtIndex = <T extends Node>(node: T, index: number) => <
  N extends Node
>(
  parent: N
) =>
  pipe(
    Array.from(parent.childNodes),
    option.fromPredicate((c) => isInsertableIndex(index, c)),
    option.map(flow((a) => array.lookup(index + 1, a), option.toNullable)),
    ioEither.fromOption(() => null),
    ioEither.map((ref) => parent.insertBefore(node, ref))
  );
