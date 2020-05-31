import { reader } from "fp-ts";
import { DomEnvironment } from "./util";

export interface Prepend {
  (node: Node): <P extends ParentNode & Node>(
    ancestor: P
  ) => reader.Reader<DomEnvironment, P>;
}
