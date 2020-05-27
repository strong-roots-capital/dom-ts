//@ts-ignore
import * as jsdom from "global-jsdom";
import { contains } from "../src/contains";

let cleanup: Function;
beforeEach(() => (cleanup = jsdom()));
afterEach(() => cleanup());

describe("contains", () => {
  test("false", () => {
    const node = document.createElement("ul");
    const other = document.createElement("li");

    const result = contains(other)(node);
    expect(result).toBeFalsy();
  });

  test("true", () => {
    const node = document.createElement("ul");
    const other = document.createElement("li");

    node.appendChild(other);

    const result = contains(other)(node);
    expect(result).toBeTruthy();
  });
});
