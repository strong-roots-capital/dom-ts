import { reader } from "fp-ts";
import { DomEnvironment } from "./util";

export interface Append {
  (node: Node): <P extends ParentNode & Node>(
    ancestor: P
  ) => reader.Reader<DomEnvironment, P>;
}
