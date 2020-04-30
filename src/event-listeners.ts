import { IO } from "fp-ts/lib/IO";
import {
  HTMLElementNameToEventMap,
  HTMLElementNameToObject,
} from "./associative-maps";

export type EventTagToEventMap = HTMLElementNameToEventMap;
export type EventTagToObject = HTMLElementNameToObject;
export type EventProperties = keyof (EventTagToEventMap & EventTagToObject);

/**
 * @summary
 * Custom Implementation of Event listener.
 */
export type EventListener<
  K,
  O extends AddEventListenerOptions,
  L extends (this: any, event: any) => void
> = {
  _tag: "EventListener";
  type: K;
  options: O;
  callback: L;
};

/**
 * @summary
 * Creates an DOM IO event listener.
 *
 * Only common keys from `M` & `N` will be available in `P`.
 */
export const createEventListener = <
  // tag name
  P extends EventProperties,
  // name of event
  K extends keyof E,
  L extends (this: T, event: E[K]) => void,
  // options for event listener
  O extends AddEventListenerOptions = AddEventListenerOptions,
  // element from name
  T extends EventTarget = EventTagToObject[P],
  // eventmap from event name
  E = EventTagToEventMap[P]
>(
  type: K,
  callback: L,
  options = { capture: false, once: false, passive: undefined } as O
): EventListener<K, O, L> => ({
  _tag: "EventListener",
  type,
  callback,
  options,
});

/**
 * @summary
 * Add an event listener to the DOM.
 *
 * If the eventListener already exists, returns a left.
 */
export const addEventListener = <
  // tag name
  P extends EventProperties,
  // name of event
  K extends Extract<keyof E, string>,
  L extends (this: T, event: E[K]) => void,
  // options for event listener
  O extends AddEventListenerOptions = AddEventListenerOptions,
  // element from name
  T extends EventTarget = EventTagToObject[P],
  // eventmap from event name
  E = EventTagToEventMap[P]
>(
  eventListener: EventListener<K, O, L>
) => <U extends T>(a: U): IO<U> => () => {
  const { type, options, callback } = eventListener;
  const args = [type, callback as any, options] as const;
  a.addEventListener(...args);
  return a;
};

export const removeEventListener = <
  // tag name
  P extends EventProperties,
  // name of event
  K extends Extract<keyof E, string>,
  L extends (this: T, event: E[K]) => void,
  // options for event listener
  O extends AddEventListenerOptions = AddEventListenerOptions,
  // element from name
  T extends EventTarget = EventTagToObject[P],
  // eventmap from event name
  E = EventTagToEventMap[P]
>(
  eventListener: EventListener<K, O, L>
) => <U extends T>(a: U): IO<U> => () => {
  const { type, options, callback } = eventListener;
  const args = [type, callback as any, options] as const;
  a.removeEventListener(...args);
  return a;
};

// dude why is there no standard for this? what an oversight...
// https://github.com/colxi/getEventListeners
// export const getEventListeners = () => () => {};
