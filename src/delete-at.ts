import { reader, option } from "fp-ts";
import { DomEnvironment } from "./util";

export interface DeleteAt {
  (index: number): <P extends ParentNode & Node>(
    parent: P
  ) => reader.Reader<DomEnvironment, option.Option<P>>;
}

// export const deleteAt: DeleteAt = (index) => (parent) => ({ root }) => {};
