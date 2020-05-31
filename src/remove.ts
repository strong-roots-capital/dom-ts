import { reader } from "fp-ts";
import { DomEnvironment } from "./util";

export interface Remove {
  <N extends Node>(node: N): reader.Reader<DomEnvironment, N>;
}
