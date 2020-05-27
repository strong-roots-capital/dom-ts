import { ioRef } from "fp-ts";
import { HTMLElementMetaUnion } from "./types/html-element-meta";
import { EventType } from "./types/maps";
import { SVGElementMetaUnion } from "./types/svg-element-meta";

export const listeners = ioRef.newIORef<Record<string, any>>({})();

type QueryMeta = HTMLElementMetaUnion | SVGElementMetaUnion;

export interface EventHandler<T extends Node, E extends Event> {
  _tag: "EventHandler";
  id: number;
  handler: (this: T, event: E) => void;
}

// look up event, finding
// two overloads, one for knowing the element but not event, other for knowing event but not element.

// Event should be within the list of events.
// Element should be within the list of elements.

export interface CreateEventHandler {
  <
    E extends Q["events"]["event"] = never,
    Q extends QueryMeta = QueryMeta,
    T extends Node = Q extends {
      element: infer U;
      events: EventType<E, any, any>;
    }
      ? U
      : never
  >(
    handler: (this: T, event: E) => void
  ): EventHandler<T, E>;
}

export const createEventHandler: CreateEventHandler = (handler) => ({
  _tag: "EventHandler",
  id: Math.random(),
  handler,
});

// instead of this, use a dependency via reader.
const a = createEventHandler(function (this, event) {
  event;
});

export interface AddEventListener {}
