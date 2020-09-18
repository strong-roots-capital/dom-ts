# dom-ts

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

fp-ts compatible implementations of DOM interfaces and related API's, as documented under [DOM interfaces at Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

## Features

- Preconfigured types pairing together `tagName`, `Element` and `EventMap` for each DOM Element.
- Detailed and inline documentation for each function
- Additional unions for potentially filterable interfaces like `DOMError` and `DOMException`: These have strict types for error code numbers.

## Note

> todo:
>
> - contribute to fp-ts-contrib for some getMonoid combinators. Compare both to see if there's anything else missing.
> - standard naming convention for maps: meta
> - smoke tests for declaration merging (at least manually test for now.)
> - start some documentation, linking to MDN.
> - rename interfaces to lowercase, and use interfaces currently as a todo list.
> - tests
>   - do interfaces implement each other?
>   - is there documentation for every function?
>   - does shadow dom in document allow for 2 copies? Don't think so.

## Recommended Reading

> todo: expand and make into a story.

### What is `meta`?

There is currently no way to infer what the event map is of an element via Typescript.
Our solution was to manually go through each element and get the element's `tagName`, `Element` and `EventMap`.
