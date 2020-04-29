import { io } from "fp-ts";
import { IO } from "fp-ts/lib/IO";
import { pipe } from "fp-ts/lib/pipeable";

export interface QuerySelectorAllHTML {
  <K extends keyof HTMLElementTagNameMap>(selectors: K): <T extends ParentNode>(
    node: T
  ) => IO<Array<HTMLElementTagNameMap[K]>>;
}

export interface QuerySelectorAllSVG {
  <K extends keyof SVGElementTagNameMap>(selectors: K): <T extends ParentNode>(
    node: T
  ) => IO<Array<SVGElementTagNameMap[K]>>;
}
export interface QuerySelectorAllElement {
  <E extends Element = Element>(selectors: string): <T extends ParentNode>(
    node: T
  ) => IO<Array<E>>;
}

export interface QuerySelectorAll
  extends QuerySelectorAllElement,
    QuerySelectorAllSVG,
    QuerySelectorAllHTML {}

export const querySelectorAll: QuerySelectorAll = <E extends Element = Element>(
  selectors: string
) => <T extends ParentNode>(node: T) =>
  pipe(
    () => node.querySelectorAll<E>(selectors),
    io.map((a) => Array.from(a))
  );
