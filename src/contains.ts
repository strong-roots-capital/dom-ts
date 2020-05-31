import { array } from "fp-ts";
import { eqObjectIs } from "./util";

/**
 * @summary
 * Asserts if the node is a descendant of the given ancestor.
 */
export const isDescendant = <T extends Node = never>(node: T, ancestor: Node) =>
  ancestor.contains(node);

export const isChild = <T extends Node = never>(node: T, parent: Node) =>
  array.elem(eqObjectIs)(node, Array.from(parent.childNodes));
