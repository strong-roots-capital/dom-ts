import { readerEither } from "fp-ts";
import { DomEnvironment } from "./util";

export interface SetChildren {
  <N extends Node>(newChildren: Array<N>): <P extends ParentNode & Node>(
    parent: P
  ) => readerEither.ReaderEither<DomEnvironment, Error, P>;
}
