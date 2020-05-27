/**
 * @summary
 * `QuerySelector`'s can check ask an element if it contains an element and return it.
 *
 * It is asked with a `selector`, which is from CSS realm.
 *
 * They'll search for all HTMLElements and SVGElements.
 *
 * You'll want to add custom elements eventually.
 * We'll need a single API to add all the stuff to.
 *
 * Well I guess this is a non exhaustive list:
 * - event-name-to-event-attr
 *   - eventname (setter)
 *   - oneventname (listener)
 * - tag-name
 * - element
 */

import { either } from "fp-ts";
import { IOEither } from "fp-ts/lib/IOEither";
import { pipe } from "fp-ts/lib/pipeable";
import { HTMLElementMetaUnion } from "./types/html-element-meta";
import { CreateElementMeta } from "./types/maps";
import { SVGElementMetaUnion } from "./types/svg-element-meta";
import { Reader } from "fp-ts/lib/Reader";
import { ReaderEither } from "fp-ts/lib/ReaderEither";

export type QueryMeta = HTMLElementMetaUnion | SVGElementMetaUnion;

export interface QuerySelectorTag {
  <S extends Q["tag"] = never, Q extends QueryMeta = QueryMeta>(selector: S): <
    U extends Element,
    E extends Element = Q extends CreateElementMeta<S, infer T, any> ? T : never
  >(
    parentNode: U
  ) => IOEither<null, E>;
}

export interface QuerySelectorNotTag {
  <T extends Element = never, Q extends QueryMeta = QueryMeta>(
    selector: string
  ): <
    U extends Element,
    E extends Element = Q extends CreateElementMeta<any, T, any>
      ? Q["element"]
      : never
  >(
    parentNode: U
  ) => IOEither<null, E>;
}

export interface QuerySelector extends QuerySelectorTag, QuerySelectorNotTag {}

export const querySelector: QuerySelector = <
  T extends Element = never,
  Q = QueryMeta
>(
  selector: string
) => <
  U extends Element,
  E extends Element = Q extends CreateElementMeta<any, T, any>
    ? Q["element"]
    : never
>(
  parentNode: U
): IOEither<null, E> => () =>
  pipe(parentNode.querySelector<E>(selector), either.fromNullable(null));

export interface Deps {
  root: ParentNode & Node;
}

export const querySelectorReader = <T extends Element = never, Q = QueryMeta>(
  selector: string
) => <
  U extends Element,
  E extends Element = Q extends CreateElementMeta<any, T, any>
    ? Q["element"]
    : never
>(
  parentNode: U
): IOEither<null, E> => () =>
  pipe(parentNode.querySelector<E>(selector), either.fromNullable(null));
