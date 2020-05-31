import { QueryMeta } from ".";
import { CreateElementMeta } from "./types/maps";
import { pipe } from "fp-ts/lib/pipeable";
import { either, readerEither, option } from "fp-ts";

export interface QuerySelectorAllTag {
  <S extends Q["tag"] = never, Q extends QueryMeta = QueryMeta>(
    selector: S
  ): readerEither.ReaderEither<
    ParentNode,
    SyntaxError,
    Array<Q extends CreateElementMeta<S, infer T, any> ? T : never>
  >;
}

export interface QuerySelectorAllNoTag {
  <T extends Element = never, Q extends QueryMeta = QueryMeta>(
    selector: string
  ): readerEither.ReaderEither<
    ParentNode,
    SyntaxError,
    Array<Q extends CreateElementMeta<any, T, any> ? Q["element"] : never>
  >;
}

export interface QuerySelectorAll
  extends QuerySelectorAllTag,
    QuerySelectorAllNoTag {}

export const querySelectorAll: QuerySelectorAll = (selector: string) => (
  parent: ParentNode
) =>
  either.tryCatch(
    () =>
      pipe(
        parent.querySelectorAll(selector),
        option.fromNullable,
        option.map((a) => Array.from(a)),
        option.getOrElse(() => [] as Element[])
      ),
    (a) => a as SyntaxError
  );
