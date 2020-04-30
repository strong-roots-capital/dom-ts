import * as array from "fp-ts/lib/Array";
import * as either from "fp-ts/lib/Either";
import { flow } from "fp-ts/lib/function";
import { IO } from "fp-ts/lib/IO";
import * as ioEither from "fp-ts/lib/IOEither";
import { IOEither } from "fp-ts/lib/IOEither";
import * as option from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/pipeable";
import { contains, containsInRoot } from "./retrieval";

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
 * Inserts `node` as the first child of `parent`,
 * returning the parent if it doesn't exist already.
 */
export const prepend = <A extends Node>(node: A) => <E extends Node>(
  parent: E
): IOEither<E, A> =>
  pipe(
    parent,
    ioEither.fromPredicate(containsInRoot(node), () => node),
    ioEither.swap,
    ioEither.chain((a) => insert(a, 0)(parent))
  );

/**
 * @summary
 * Adds a child to the end of the parent's children.
 *
 * Returns an error if it already exists in the DOM.
 *
 * @todo get root of parent and check that
 */
export const append = <A extends Node>(node: A) => <E extends Node>(
  parent: E
) =>
  pipe(
    ioEither.rightIO(() => parent),
    ioEither.chain(
      flow(
        ioEither.fromPredicate(containsInRoot(node), () => node),
        ioEither.swap,
        ioEither.map((a) => parent.appendChild(a))
      )
    )
  );

/**
 * @summary
 * Removes a node from the DOM.
 *
 * Returns an error if it didn't exist in the first place.
 */
export const remove = <T extends ChildNode>(node: T): IO<void> => () =>
  node.remove();

/**
 * @summary
 * Returns true if the index could be inserted into the array.
 */
const isInsertableIndex = (index: number, values: Array<any>) =>
  index >= 0 && index <= values.length;

/**
 * @summary
 * Inserts a child at the given index.
 * If the index is out of the insertion range, parent is returned.
 */
export const insert = <A extends Node>(node: A, index: number) => <
  E extends Node
>(
  parent: E
): IOEither<E, A> =>
  pipe(
    Array.from(parent.childNodes),
    option.fromPredicate((c) => isInsertableIndex(index, c)),
    option.map(flow((a) => array.lookup(index + 1, a), option.toNullable)),
    ioEither.fromOption(() => parent),
    ioEither.map((ref) => parent.insertBefore(node, ref))
  );
