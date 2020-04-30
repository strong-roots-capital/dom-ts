import { IO } from "fp-ts/lib/IO";
import {
  HTMLElementEventMapAll,
  RecordHTMLElementMap,
} from "../maps/html-element";

export type Listener<T, E> = (this: T, event: E) => any;

export type AddEventListener = <
  P extends keyof (HTMLElementEventMapAll & RecordHTMLElementMap),
  O extends AddEventListenerOptions,
  K extends keyof E,
  E extends HTMLElementEventMapAll[P]
>(
  type: K,
  options: O
) => <T extends EventTarget = RecordHTMLElementMap[P]>(
  listener: Listener<T, E[K]>
) => <U extends T>(a: U) => IO<U>;
