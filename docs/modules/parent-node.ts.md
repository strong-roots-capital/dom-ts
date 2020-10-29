---
title: parent-node.ts
nav_order: 8
parent: Modules
---

## parent-node overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [querySelector](#queryselector)
  - [querySelectorAll](#queryselectorall)

---

# Constructors

## querySelector

**Signature**

```ts
export declare function querySelector<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<ParentNode, O.Option<MatchElementTagName<K>["_element"]>>
export declare function querySelector<A extends Element>(
  selector: string
): ReaderIO<ParentNode, O.Option<A>>
```

Added in v8.1.0

## querySelectorAll

**Signature**

```ts
export declare function querySelectorAll<K extends AllElementMeta["_tagName"]>(
  selector: K
): ReaderIO<ParentNode, ReadonlyArray<MatchElementTagName<K>["_element"]>>
export declare function querySelectorAll<A extends Element>(
  selector: string
): ReaderIO<ParentNode, ReadonlyArray<A>>
```

Added in v8.1.0
