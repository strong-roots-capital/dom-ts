import { either, ioEither } from "fp-ts";
import { IOEither } from "fp-ts/lib/IOEither";
import { pipe } from "fp-ts/lib/pipeable";

export interface QuerySelectorHTML {
  <K extends keyof HTMLElementTagNameMap>(selectors: K): <T extends ParentNode>(
    node: T
  ) => IOEither<null, HTMLElementTagNameMap[K]>;
}

export interface QuerySelectorSVG {
  <K extends keyof SVGElementTagNameMap>(selectors: K): <T extends ParentNode>(
    node: T
  ) => IOEither<null, SVGElementTagNameMap[K]>;
}
export interface QuerySelectorElement {
  <E extends Element = Element>(selectors: string): <T extends ParentNode>(
    node: T
  ) => IOEither<null, E>;
}

export interface QuerySelector
  extends QuerySelectorElement,
    QuerySelectorSVG,
    QuerySelectorHTML {}

export const querySelector: QuerySelector = <
  K extends string,
  E extends Element
>(
  selectors: K
) => <T extends ParentNode>(node: T): IOEither<null, E> =>
  pipe(
    node.querySelector<E>(selectors),
    either.fromNullable(null),
    ioEither.fromEither
  );
