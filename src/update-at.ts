import { readerEither } from "fp-ts";
import { DomEnvironment } from "./util";

export interface UpdateAt {
  <N extends Node>(index: number, modifier: <U extends Node>(node: N) => U): <
    P extends ParentNode & Node
  >(
    parent: P
  ) => readerEither.ReaderEither<DomEnvironment, Error, P>;
}
