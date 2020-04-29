# 1dom-ts`

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

## Consuming

### Browser

If for some reason you want this in your browser, here are some CDNs:

```sh
# Minified
https://cdn.jsdelivr.net/npm/dom-ts@latest/dist/umd/index.min.js

# Not Minified
https://cdn.jsdelivr.net/npm/dom-ts@latest/dist/umd/index.js

```

### Modules

```ts
import {} from "dom-ts";
import {} from "dom-ts/es6";
import {} from "dom-ts/es6/*";
import {} from "dom-ts/lib";
import {} from "dom-ts/lib/*";
```

## features

- Replaces imperative prototype methods on objects with functions, for more predictable workflow.
- Allows DOM errors to be handled before they enter the DOM, removing wasted rendering.
- Extremely typesafe, with overloads and generics included.
- Expected DOM functions.
- Additional utility functions.

## Primary differences from DOM methods

- Methods returning `E | null` are transformed to `Option<E>`
- Methods returning `nodelist<E>` are transformed to `Array<E>`
