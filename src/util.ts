import { eq } from "fp-ts";
import { HTMLElementMetaUnion, SVGElementMetaUnion } from "./types";

export const eqObjectIs: eq.Eq<Object> = eq.fromEquals(Object.is);

export type QueryMeta = HTMLElementMetaUnion | SVGElementMetaUnion;

export interface DomEnvironment {
  root: DocumentFragment;
}

export class NodeExistsError extends Error {
  constructor(public ancestorNode: Node, public rootNode: Node) {
    super();
    this.message =
      'The "descendant" is already a descendant of "root". To avoid this error, ' +
      'The "descendant" node must be removed from within the "root" node';
  }
}
