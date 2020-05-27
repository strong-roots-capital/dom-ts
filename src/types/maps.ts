import { EventNames } from "./event-names";

/**
 * @summary
 * A pair of `eventname` and `oneventname` strings.
 */
export type EventNameMap<N extends string, O extends string> = {
  /**
   * @summary
   * Name of the event.
   */
  eventname: N;
  /**
   * @summary
   * on-event handler name of the `eventname`.
   *
   * Usually be all lowercase and start with "on".
   */
  oneventname: O;
};

/**
 * @summary
 * The same as `EventNameMap`, which the addition of
 * the corresponding event.
 *
 * This is separated because the type of the `HTMLElement`
 * changes the type of `Event` for a minority of `Element`'s
 * such as Window.
 */
export type EventType<E, N extends string, O extends string> = {
  /**
   * @summary
   * The type of event this will produce.
   */
  event: E;
} & EventNameMap<N, O>;

export type EventMapToEventType<
  T extends Record<string, Event>,
  L extends EventNames = EventNames
> = {
  [P in keyof T]: P extends string
    ? P extends L["eventname"]
      ? EventType<T[P], P, L extends EventNameMap<P, infer U> ? U : never>
      : never
    : never;
}[keyof T];

/**
 * @summary
 * Creates metadata associated with an Element
 */
export type CreateElementMeta<
  N extends string,
  T extends Element,
  M extends Record<string, any> = HTMLElementEventMap
> = {
  /**
   * @summary
   * The tag name of the element.
   *
   * Default tags such as `<html>`, `<div>` and `<article>`.
   *
   * These could also be web component tags,
   * such as `<my-web-component>`, `<ng-componenent>`
   *
   */
  tag: N;
  element: T;
  /**
   * @summary
   * Contains all the events as a union of records.
   *
   * Useful because we now have a uniform way of working with types!
   */
  events: EventMapToEventType<M>;
};
