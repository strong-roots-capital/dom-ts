import { MetaAllHTMLElement } from "./html-element"
import { MetaAllSVGElement } from "./svg-element"

export type CreateMetaElement<R extends string, E extends Element, A extends ElementEventMap> = {
  _tagName: R
  _element: E
  _eventMap: A
}

export type MetaAllHTMLSVGElement = MetaAllHTMLElement | MetaAllSVGElement

// Users can use module augmentation to append additional types,
// but they should interesect their types with `AllElementMetaInternal`
export type MetaAllElement = MetaAllHTMLSVGElement

export type MatchTagName<R extends string> = MetaAllElement extends infer T
  ? T extends CreateMetaElement<R, infer E, infer A>
    ? CreateMetaElement<R, E, A>
    : never
  : never

export type MatchElement<E extends HTMLElement> = MetaAllElement extends infer T
  ? T extends CreateMetaElement<infer R, E, infer A>
    ? CreateMetaElement<R, E, A>
    : never
  : never

export type MatchEventMap<A extends HTMLElementEventMap> = MetaAllElement extends infer T
  ? T extends CreateMetaElement<infer R, infer E, A>
    ? CreateMetaElement<R, E, A>
    : never
  : never
