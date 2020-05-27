import { QueryMeta } from ".";
import { CreateElementMeta } from "./types/maps";
import { IOEither } from "fp-ts/lib/IOEither";
import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";
import { pipe } from "fp-ts/lib/pipeable";
import { array, either } from "fp-ts";

export interface QuerySelectorAllTag {
  <S extends Q["tag"] = never, Q extends QueryMeta = QueryMeta>(selector: S): <
    U extends Element,
    E extends Element = Q extends CreateElementMeta<S, infer T, any> ? T : never
  >(
    parentNode: U
  ) => IOEither<null, NonEmptyArray<E>>;
}

export interface QuerySelectorAllNotTag {
  <T extends Element = never, Q extends QueryMeta = QueryMeta>(
    selector: string
  ): <
    U extends Element,
    E extends Element = Q extends CreateElementMeta<any, T, any>
      ? Q["element"]
      : never
  >(
    parentNode: U
  ) => IOEither<null, NonEmptyArray<E>>;
}
export interface QuerySelectorAll
  extends QuerySelectorAllTag,
    QuerySelectorAllNotTag {}

export const querySelectorAll: QuerySelectorAll = (selectors: string) => <
  U extends Element,
  E extends Element
>(
  parentNode: U
) => () =>
  pipe(
    parentNode.querySelectorAll<E>(selectors),
    (a) => Array.from(a),
    either.fromPredicate(array.isNonEmpty, () => null)
  );
