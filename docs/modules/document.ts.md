---
title: document.ts
nav_order: 1
parent: Modules
---

## document overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [appendChild](#appendchild)
  - [contains](#contains)
  - [createElement](#createelement)
  - [getElementById](#getelementbyid)
  - [ownerDocument](#ownerdocument)
  - [querySelector](#queryselector)
  - [querySelectorAll](#queryselectorall)
  - [unsafeAppendChild](#unsafeappendchild)

---

# Constructors

## appendChild

**Signature**

```ts
export declare const appendChild: typeof appendChild
```

Added in v8.1.0

## contains

**Signature**

```ts
export declare const contains: typeof contains
```

Added in v8.1.0

## createElement

**Signature**

```ts
export declare function createElement<
  K extends AllElementMeta["_tagName"],
  L extends AllElementMeta["_tagName"]
>(
  tagName: K,
  options: { is: L }
): RIO.ReaderIO<
  Document,
  E.Either<
    HTMLUnknownElement,
    MatchElementTagName<K>["_element"] & MatchElementTagName<L>["_element"]
  >
>
export declare function createElement<K extends AllElementMeta["_tagName"]>(
  tagName: K
): RIO.ReaderIO<
  Document,
  E.Either<HTMLUnknownElement, MatchElementTagName<K>["_element"]>
>
```

Added in v0.0.0

## getElementById

**Signature**

```ts
export declare function getElementById(
  elementId: string
): RIO.ReaderIO<Document, O.Option<HTMLElement>>
```

Added in v0.0.0

## ownerDocument

**Signature**

```ts
export declare const ownerDocument: ReaderIOOption<Node, Document>
```

Added in v8.1.0

## querySelector

**Signature**

```ts
export declare const querySelector: typeof querySelector
```

Added in v8.1.0

## querySelectorAll

**Signature**

```ts
export declare const querySelectorAll: typeof querySelectorAll
```

Added in v8.1.0

## unsafeAppendChild

**Signature**

```ts
export declare const unsafeAppendChild: typeof unsafeAppendChild
```

Added in v8.1.0
