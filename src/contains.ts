/**
 * Use these to retrieve information about the dom.
 *
 * These are non-blocking operations by nature and are not a side effect,
 * which is why they won't be wrapped in an `IO` or `IOEither`.
 */

import { pipe } from "fp-ts/lib/pipeable";
import { Deps } from "./query-selector";
import { Reader } from "fp-ts/lib/Reader";

/**
 * @summary
 * Asserts if the node is a descendant of the given ancestor.
 */
export const contains = <T extends Node = never>(node: T) => <
  U extends Node = never
>(
  ancestor: U
) => ancestor.contains(node);

/**
 * @summary
 * Asserts if `node` is a descedant of the `ancestor`'s root.
 *
 * @description
 * Useful when your not sure what the root node might be.
 *
 * For example web components use the shadow dom,
 * which returns `ShadowRoot` instead of `Document`.
 */
export const containsInRoot = <A extends Node = never>(
  node: A
): Reader<Deps, boolean> => ({ root }) => pipe(root, contains(node));
