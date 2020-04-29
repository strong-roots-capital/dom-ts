# dom-ts

DOM bindings for the `fp-ts` ecosystem.

## notice

This is still in active development, as seen by the version 0.\*. breaking changes are bound to happen.

Please issue a pull for any requests, questions and concerns.

## features

- Replaces imperative prototype methods on objects with functions, for more predictable workflow.
- Allows DOM errors to be handled before they enter the DOM, removing wasted rendering.
- Extremely typesafe, with overloads and generics included.
- Expected DOM functions.
- Additional utility functions.

## why

Functional programming is taking over front end development (thank goodness).

The methods of manipulating the DOM are extremely imperative.
There are no `fp-ts` ways to manipulate easily.

This library is to provide methods that are functional, using the `fp-ts`' Higher Kinded Type system, such as `Option` and `Either`.

## changes

- Methods returning `E | null` are transformed to `Option<E>`
- Methods returning `nodelist<E>` are transformed to `Array<E>`
