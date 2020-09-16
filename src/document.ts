import { option as O, readonlyArray as ROA } from "fp-ts";
import { ReaderIO } from "fp-ts-contrib/ReaderIO";
import { pipe } from "fp-ts/function";
import { AllElementMeta, MatchTagName } from "./maps";
import { fromIterable } from "./util";

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

export function querySelectorAll<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<Document, ReadonlyArray<MatchTagName<K>["_element"]>>;

export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<Document, ReadonlyArray<A>>;

export function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<Document, ReadonlyArray<A>> {
  return (document) => () =>
    pipe(document.querySelectorAll<A>(selector), fromIterable, ROA.fromArray);
}
