import { AllHTMLElementMeta } from "./meta-html-element"
import { AllSVGElementMeta } from "./meta-svg-element"

export type MetaElement<R extends string, E extends Element, A extends ElementEventMap> = {
  _tagName: R
  _element: E
  _eventMap: A
}

export type AllElementMeta = AllHTMLElementMeta | AllSVGElementMeta

export type MatchElementTagName<R extends string> = AllElementMeta extends infer T
  ? T extends MetaElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MatchElementElement<E extends Element> = AllElementMeta extends infer T
  ? T extends MetaElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MatchElementEventMap<A extends ElementEventMap> = AllElementMeta extends infer T
  ? T extends MetaElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never
