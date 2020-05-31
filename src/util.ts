import { eq } from "fp-ts";

export const eqObjectIs: eq.Eq<Object> = eq.fromEquals(Object.is);

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
