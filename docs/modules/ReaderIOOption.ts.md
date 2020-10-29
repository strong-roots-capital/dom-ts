---
title: ReaderIOOption.ts
nav_order: 9
parent: Modules
---

## ReaderIOOption overview

This module should be ported to and replaced with `ReaderIOOption` in `fp-ts-contrib`.

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [ReaderIOOption (interface)](#readeriooption-interface)
  - [URI](#uri)
  - [URI (type alias)](#uri-type-alias)
  - [ap](#ap)
  - [ask](#ask)
  - [asks](#asks)
  - [chain](#chain)
  - [fromIOOption](#fromiooption)
  - [fromReader](#fromreader)
  - [local](#local)
  - [map](#map)

---

# utils

## ReaderIOOption (interface)

**Signature**

```ts
export interface ReaderIOOption<R, A> {
  (r: R): IOO.IOOption<A>
}
```

Added in v8.1.0

## URI

**Signature**

```ts
export declare const URI: "ReaderIOOption"
```

Added in v8.1.0

## URI (type alias)

**Signature**

```ts
export type URI = typeof URI
```

Added in v8.1.0

## ap

**Signature**

```ts
export declare const ap: <R, A, B>(
  mab: ReaderIOOption<R, (a: A) => B>
) => (fa: ReaderIOOption<R, A>) => ReaderIOOption<R, B>
```

Added in v8.1.0

## ask

**Signature**

```ts
export declare const ask: <R>() => ReaderIOOption<R, R>
```

Added in v8.1.0

## asks

**Signature**

```ts
export declare const asks: <R, A>(f: (r: R) => A) => ReaderIOOption<R, A>
```

Added in v8.1.0

## chain

**Signature**

```ts
export declare const chain: <R, A, B>(
  f: (a: A) => ReaderIOOption<R, B>
) => (fa: ReaderIOOption<R, A>) => ReaderIOOption<R, B>
```

Added in v8.1.0

## fromIOOption

**Signature**

```ts
export declare const fromIOOption: <R, A>(
  ma: IOO.IOOption<A>
) => ReaderIOOption<R, A>
```

Added in v8.1.0

## fromReader

**Signature**

```ts
export declare const fromReader: <R, A>(
  r: R.Reader<R, A>
) => ReaderIOOption<R, A>
```

Added in v8.1.0

## local

**Signature**

```ts
export declare const local: <R, A, Q>(
  f: (d: Q) => R
) => (fa: ReaderIOOption<R, A>) => ReaderIOOption<Q, A>
```

Added in v8.1.0

## map

**Signature**

```ts
export declare const map: <A, B>(
  f: (a: A) => B
) => <R>(fa: ReaderIOOption<R, A>) => ReaderIOOption<R, B>
```

Added in v8.1.0
