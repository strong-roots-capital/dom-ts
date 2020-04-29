import { IO } from "fp-ts/lib/IO";
import { EventMap } from "./maps/event-map";
// event listeners orders

// passive,
// once

// event handler names
// event handler map
export interface AddEventListenerInternal<
  F extends keyof EventMap,
  T = EventMap[F]["object"],
  M = EventMap[F]["eventMap"]
> {
  <K extends keyof M>(
    type: K,
    listener: <U>(this: T, event: M[K]) => U,
    options?: boolean | AddEventListenerOptions
  ): (a: T) => IO<T>;
}

export interface AddEventListenerAny {
  <T extends EventTarget>(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): (a: T) => IO<T>;
}

export interface addEventListenerWindow
  extends AddEventListenerInternal<"Window"> {}

export interface AddEventListener
  extends addEventListenerWindow,
    AddEventListenerAny {}
// keep in mind that functions are based on instances

export const addEventListener: AddEventListener = (
  type: string,
  listener: any
) => <T extends EventTarget>(a: T) => () => {
  a.addEventListener(type, listener);
  return a;
};
