import { array, either, option, readerEither } from "fp-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { flow } from "fp-ts/lib/function";
import { isDescendant } from "./contains";
import { DomEnvironment } from "./util";

/**
 * @todo have a better message with details about the message
 */
export class CannotInsertError extends Error {
  constructor(ancestor: Node, descendant: Node) {
    const message = `Node "${descendant}" is already a descendant of "${ancestor}". This must be removed before we can insert a node. `;
    super(message);
  }
}

export interface InsertAt {
  (index: number, newChild: Node): <P extends ParentNode & Node>(
    parent: P
  ) => readerEither.ReaderEither<
    DomEnvironment,
    // already in dom, so can't add it in.
    CannotInsertError,
    // index is out of insertable bounds
    option.Option<P>
  >;
}

const isInsertableBounds = (index: number, xs: any[]) =>
  index >= 0 && index <= xs.length;

const isLastInsertableBound = (index: number, xs: any[]) => index === xs.length;

/**
 * @summary
 * Insert a child into an element into the DOM.
 *
 * @description
 * Returns `Left<CannotInsertError>` if `newChild` already exists in `root`.
 *
 * Returns `Right<None>` if `index` is out of bounds.
 */
export const insertAt: InsertAt = (index, newChild) => (parent) => ({
  root,
}) => {
  const children = Array.from(parent.children);
  const error = () => new CannotInsertError(parent, newChild);
  const getRefChild = (oElement: option.Option<Element>) =>
    pipe(
      oElement,
      option.fromPredicate(() => isLastInsertableBound(index, children)),
      option.fold(
        () => option.some(null),
        (a) => a as option.Option<Element | null>
      )
    );

  return pipe(
    children,
    // index is out of insertable bounds
    option.fromPredicate((elements) => isInsertableBounds(index, elements)),
    option.chain((elements) =>
      pipe(
        array.lookup(index, elements),
        option.map(
          either.fromPredicate((element) => isDescendant(element, root), error)
        )
      )
    ),
    option.option.sequence(either.either),
    either.map(
      flow(
        getRefChild,
        option.map((refChild) => parent.insertBefore(newChild, refChild)),
        option.map(() => parent)
      )
    )
  );
};
