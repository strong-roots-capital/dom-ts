# `dom-ts`

DOM bindings for the `fp-ts` ecosystem.

## NOTICE

This is still in active development, as seen by the version 0.\*. breaking changes are bound to happen.

Please issue a pull for any requests, questions and concerns.

## Installing

```sh
# yarn
yarn add dom-ts fp-ts

# OR

# npm
npm install dom-ts fp-ts --save
```

Note that `fp-ts` is a peer dependency.

## Consuming

```ts
import {} from "dom-ts";
import {} from "dom-ts/es6";
import {} from "dom-ts/es6/*";
import {} from "dom-ts/lib";
import {} from "dom-ts/lib/*";
```

`lib` is for commonjs, where as `es6` is esmodules.
Some bundlers can't module commonjs with tree shaking on, which is why this option is available.

## examples

Gotta do these soon... Maybe they could go in their own docs.

## Notes for myself...

I want to make a typeclass for DOM.
This would allow assertions like `NodeIsInThis`

Use `Reader` to inject the dependenc of the `document`.

## features

- Replaces imperative prototype methods on objects with functions, for more predictable workflow.
- Allows DOM errors to be handled before they enter the DOM, removing wasted rendering.
- Extremely typesafe, with overloads and generics included.
- Expected DOM functions.
- Additional utility functions.

## Primary differences

- Methods returning `E | null` are transformed to `Option<E>`
- Methods returning `nodelist<E>` are transformed to `Either<null,NonEmptyArray<E>>`
- Inserting an already existing node into the DOM doesn't work. Instead, delete it first.
