import { array, either, option, readerEither } from "fp-ts";
import { pipe } from "fp-ts/lib/pipeable";
import { flow } from "fp-ts/lib/function";
import { isDescendant } from "./contains";
import { DomEnvironment, NodeExistsError } from "./util";

export interface InsertAt {
  (index: number, newChild: Node): <P extends ParentNode & Node>(
    parent: P
  ) => readerEither.ReaderEither<
    DomEnvironment,
    // already in dom, so can't add it in.
    NodeExistsError,
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
  const error = () => new NodeExistsError(parent, root);
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
