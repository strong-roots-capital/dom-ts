---
title: event-target.ts
nav_order: 2
parent: Modules
---

## event-target overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [addEventListener](#addeventlistener)
  - [dispatchEvent](#dispatchevent)
  - [removeEventListener](#removeeventlistener)

---

# Constructors

## addEventListener

**Signature**

```ts
export declare function addEventListener(): RIO.ReaderIO<EventTarget, void>
```

Added in v8.1.0

## dispatchEvent

**Signature**

```ts
export declare function dispatchEvent(
  event: Event
): RIO.ReaderIO<EventTarget, boolean>
```

Added in v8.1.0

## removeEventListener

**Signature**

```ts
export declare function removeEventListener(): RIO.ReaderIO<EventTarget, void>
```

Added in v8.1.0
