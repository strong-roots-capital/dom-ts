# dom-ts

fp-ts compatible implementations of DOM interfaces and related API's, as documented under [DOM interfaces at Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

## Features

- Preconfigured types pairing together `tagName`, `Element` and `EventMap` for each DOM Element.
- Detailed and inline documentation for each function
- Additional unions for potentially filterable interfaces like `DOMError` and `DOMException`: These have strict types for error code numbers.

## Note

> todo:
>
> - standard naming convention for maps: meta
> - smoke tests for declaration merging (at least manually test for now.)
> - start some documentation, linking to MDN.

## Recommended Reading

> todo: expand and make into a story.

There is currently no way to infer what the event map is of an element via Typescript.
Our solution was to manually go through each element and get the element's `tagName`, `Element` and `EventMap`.
