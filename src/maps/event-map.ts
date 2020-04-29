export interface TypedInternal<T, M extends Record<string, any>> {
  object: T;
  eventMap: M;
}

export interface TypedHandler<
  H extends Record<string, any>,
  M extends Record<string, any>
> {
  eventHandlers: H;
  eventHandlerEventMap: M;
}

export type TypedMap<T, E, H extends TypedHandler<any, any>> = TypedInternal<
  T,
  E
> &
  H;

// handlers

export interface WindowHandlers
  extends TypedHandler<WindowEventHandlers, WindowEventHandlersEventMap> {}

export interface DocumentAndElementHandlers
  extends TypedHandler<
    DocumentAndElementEventHandlers,
    DocumentAndElementEventHandlersEventMap
  > {}

// helper

export type TypedHTMLElement<
  T extends HTMLElement,
  M extends Record<string, any> = HTMLElementEventMap,
  H extends TypedHandler<any, any> = DocumentAndElementHandlers
> = TypedInternal<T, M> & H;

// event maps

/**
 * @todo Add all HTMLElements.
 */
export interface HTMLEventMap {
  HTMLElement: TypedHTMLElement<HTMLElement>;
  HTMLBodyElement: TypedHTMLElement<
    HTMLBodyElement,
    HTMLBodyElementEventMap,
    WindowHandlers
  >;
  HTMLHeadElement: TypedHTMLElement<HTMLHeadElement>;
  HTMLUListElement: TypedHTMLElement<HTMLUListElement>;
}

/**
 * @todo Add other DOM related objects.
 */
export interface EventMap extends HTMLEventMap {
  Window: TypedMap<Window, WindowEventMap, WindowHandlers>;
  Document: TypedMap<Document, DocumentEventMap, DocumentAndElementHandlers>;
  Element: TypedMap<Element, ElementEventMap, DocumentAndElementHandlers>;
}
