import { AllHTMLElementMeta } from "./html";
import { AllSVGElementMeta } from "./svg";

export type CreateElementMeta<
  R extends string,
  E extends Element,
  A extends ElementEventMap
> = {
  _tagName: R;
  _element: E;
  _eventMap: A;
};

export type AllElementMetaInternal = AllHTMLElementMeta | AllSVGElementMeta;

// Users can use module augmentation to append additional types,
// but they should interesect their types with `AllElementMetaInternal`
export type AllElementMeta = AllElementMetaInternal;

// todo - allow users to

export type MatchTagName<R extends string> = AllElementMeta extends infer T
  ? T extends CreateElementMeta<R, infer E, infer A>
    ? CreateElementMeta<R, E, A>
    : never
  : never;

export type MatchElement<E extends HTMLElement> = AllElementMeta extends infer T
  ? T extends CreateElementMeta<infer R, E, infer A>
    ? CreateElementMeta<R, E, A>
    : never
  : never;

export type MatchEventMap<
  A extends HTMLElementEventMap
> = AllElementMeta extends infer T
  ? T extends CreateElementMeta<infer R, infer E, A>
    ? CreateElementMeta<R, E, A>
    : never
  : never;
