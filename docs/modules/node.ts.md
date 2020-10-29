---
title: node.ts
nav_order: 7
parent: Modules
---

## node overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [appendChild](#appendchild)
  - [contains](#contains)
  - [getRootNode](#getrootnode)
  - [ownerDocument](#ownerdocument)
  - [unsafeAppendChild](#unsafeappendchild)

---

# Constructors

## appendChild

**Signature**

```ts
export declare function appendChild(
  newChild: Node
): RIOO.ReaderIOOption<Node, void>
```

Added in v8.1.0

## contains

**Signature**

```ts
export declare function contains(child: Node): RIO.ReaderIO<Node, boolean>
```

Added in v8.1.0

## getRootNode

**Signature**

```ts
export declare function getRootNode(
  options?: Required<GetRootNodeOptions>
): RIO.ReaderIO<Node, Node>
```

Added in v8.1.0

## ownerDocument

**Signature**

```ts
export declare const ownerDocument: RIOO.ReaderIOOption<Node, Document>
```

Added in v8.1.0

## unsafeAppendChild

**Signature**

```ts
export declare function unsafeAppendChild(
  newChild: Node
): RIO.ReaderIO<Node, void>
```

Added in v8.1.0
