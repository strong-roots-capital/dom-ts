---
title: meta-element.ts
nav_order: 4
parent: Modules
---

## meta-element overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [AllElementMeta (type alias)](#allelementmeta-type-alias)
  - [MatchElementElement (type alias)](#matchelementelement-type-alias)
  - [MatchElementEventMap (type alias)](#matchelementeventmap-type-alias)
  - [MatchElementTagName (type alias)](#matchelementtagname-type-alias)
  - [MetaElement (type alias)](#metaelement-type-alias)

---

# Constructors

## AllElementMeta (type alias)

**Signature**

```ts
export type AllElementMeta = AllHTMLElementMeta | AllSVGElementMeta
```

Added in v8.1.0

## MatchElementElement (type alias)

**Signature**

```ts
export type MatchElementElement<
  E extends Element
> = AllElementMeta extends infer T
  ? T extends MetaElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MatchElementEventMap (type alias)

**Signature**

```ts
export type MatchElementEventMap<
  A extends ElementEventMap
> = AllElementMeta extends infer T
  ? T extends MetaElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MatchElementTagName (type alias)

**Signature**

```ts
export type MatchElementTagName<
  R extends string
> = AllElementMeta extends infer T
  ? T extends MetaElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MetaElement (type alias)

**Signature**

```ts
export type MetaElement<
  R extends string,
  E extends Element,
  A extends ElementEventMap
> = {
  _tagName: R
  _element: E
  _eventMap: A
}
```

Added in v8.1.0
