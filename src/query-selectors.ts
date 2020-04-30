import { either, ioEither, io } from "fp-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { IOEither } from "fp-ts/lib/IOEither";
import { IO } from "fp-ts/lib/IO";

interface QuerySelectorHTML {
  <K extends keyof HTMLElementTagNameMap>(selectors: K): (
    node: ParentNode
  ) => IOEither<null, HTMLElementTagNameMap[K]>;
}

interface QuerySelectorSVG {
  <K extends keyof SVGElementTagNameMap>(selectors: K): (
    node: ParentNode
  ) => IOEither<null, SVGElementTagNameMap[K]>;
}

interface QuerySelectorElement {
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

interface QuerySelectorAllHTML {
  <K extends keyof HTMLElementTagNameMap>(selectors: K): (
    node: ParentNode
  ) => IO<Array<HTMLElementTagNameMap[K]>>;
}

interface QuerySelectorAllSVG {
  <K extends keyof SVGElementTagNameMap>(selectors: K): <T extends ParentNode>(
    node: T
  ) => IO<Array<SVGElementTagNameMap[K]>>;
}

interface QuerySelectorAllElement {
  <E extends Element = Element>(selectors: string): <T extends ParentNode>(
    node: T
  ) => IO<Array<E>>;
}

export interface QuerySelectorAll
  extends QuerySelectorAllHTML,
    QuerySelectorAllSVG,
    QuerySelectorAllElement {}

export const querySelectorAll: QuerySelectorAll = <E extends Element = Element>(
  selectors: string
) => <T extends ParentNode>(node: T) =>
  pipe(
    () => node.querySelectorAll<E>(selectors),
    io.map((a) => Array.from(a))
  );
