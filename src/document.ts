import { option as O } from "fp-ts";
import { ReaderIO } from "fp-ts-contrib/ReaderIO";
import { pipe } from "fp-ts/lib/function";
import { AllElementMeta, MatchTagName } from "./maps";

export function querySelector<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<Document, O.Option<MatchTagName<K>["_element"]>>;

export function querySelector<A extends Element>(
  selector: string
): ReaderIO<Document, O.Option<A>>;

export function querySelector<A extends Element>(
  selector: string
): ReaderIO<Document, O.Option<A>> {
  return (document) => () =>
    pipe(document.querySelector<A>(selector), O.fromNullable);
}
