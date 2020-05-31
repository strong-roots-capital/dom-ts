import { either, option, readerEither } from "fp-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { HTMLElementMetaUnion } from "./types/html-element-meta";
import { CreateElementMeta } from "./types/maps";
import { SVGElementMetaUnion } from "./types/svg-element-meta";

export type QueryMeta = HTMLElementMetaUnion | SVGElementMetaUnion;

export interface QuerySelectorTag {
  <S extends Q["tag"] = never, Q extends QueryMeta = QueryMeta>(
    selector: S
  ): readerEither.ReaderEither<
    ParentNode,
    SyntaxError,
    option.Option<Q extends CreateElementMeta<S, infer T, any> ? T : never>
  >;
}

export interface QuerySelectorNoTag {
  <T extends Element = never, Q extends QueryMeta = QueryMeta>(
    selector: string
  ): readerEither.ReaderEither<
    ParentNode,
    SyntaxError,
    option.Option<
      Q extends CreateElementMeta<any, T, any> ? Q["element"] : never
    >
  >;
}

export interface QuerySelector extends QuerySelectorTag, QuerySelectorNoTag {}

export const querySelector: QuerySelector = (selector: string) => (
  parent: ParentNode
) =>
  either.tryCatch(
    () => pipe(parent.querySelector(selector), option.fromNullable),
    (a) => a as SyntaxError
  );
