import { either, ioEither } from "fp-ts";
import { IOEither } from "fp-ts/lib/IOEither";
import { pipe } from "fp-ts/lib/pipeable";

export interface QuerySelectorHTML {
  <K extends keyof HTMLElementTagNameMap>(selectors: K): (
    node: ParentNode
  ) => IOEither<null, HTMLElementTagNameMap[K]>;
}

export interface QuerySelectorSVG {
  <K extends keyof SVGElementTagNameMap>(selectors: K): (
    node: ParentNode
  ) => IOEither<null, SVGElementTagNameMap[K]>;
}
export interface QuerySelectorElement {
  <E extends Element = Element>(selectors: string): (
    node: ParentNode
  ) => IOEither<null, E>;
}

export interface QuerySelector
  extends QuerySelectorHTML,
    QuerySelectorSVG,
    QuerySelectorElement {}

export const querySelector: QuerySelector = <E extends Element>(
  selectors: string
) => (node: ParentNode): IOEither<null, E> =>
  pipe(
    node.querySelector<E>(selectors),
    either.fromNullable(null),
    ioEither.fromEither
  );
