/**
 * Use these to retrieve information about the dom.
 *
 * These are non-blocking operations by nature and are not a side effect,
 * which is why they won't be wrapped in an `IO` or `IOEither`.
 */

import { pipe } from "fp-ts/lib/pipeable";

/**
 * @summary
 * Asserts if the node is a descendant of the given ancestor.
 */
export const contains = <T extends Node>(node: T) => <U extends Node>(
  ancestor: U
) => ancestor.contains(node);

/**
 * @summary
 * Asserts if `node` is in the root of the `ancestor`.
 *
 * @description
 * Useful when your not sure what the root node might be.
 *
 * For example web components use the shadow dom,
 * which returns `ShadowRoot` instead of `Document`.
 */
export const containsInRoot = <A extends Node>(node: A) => <E extends Node>(
  ancestor: E
) => pipe(ancestor.getRootNode(), contains(node));
