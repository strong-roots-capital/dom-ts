import { reader, array } from "fp-ts";
import { eqObjectIs } from "./util";

/**
 * @summary
 * Asserts if the node is a descendant of the given ancestor.
 */
export const isDescendant = <T extends Node = never>(
  node: T
): reader.Reader<Node, boolean> => (ancestor: Node) => ancestor.contains(node);

export const isChild = <T extends Node = never>(
  node: T
): reader.Reader<Node, boolean> => (parent) =>
  array.elem(eqObjectIs)(node, Array.from(parent.childNodes));
