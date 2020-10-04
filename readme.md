# dom-ts

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

fp-ts compatible implementations of DOM interfaces and related API's, as documented under [DOM interfaces at Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).

## Features

- Preconfigured types pairing together `tagName`, `Element` and `EventMap` for each DOM Element.
- Detailed and inline documentation for each function
- Additional unions for potentially filterable interfaces like `DOMError` and `DOMException`: These have strict types for error code numbers.

## Meta

The modules named `meta-+` export types that make this library unique: Maps that define relationships between `tagName`, `Element` and `EventMap` types.
This is currently unsupported due to the way that typescript has structured it's type definitions.
I've opened an issue outlining these concerns in [Microsoft/Typescript #40689](https://github.com/microsoft/TypeScript/issues/40689)

This unlocks new capabilities like inferring `EventMap` with `Element`.

If you're not using custom elements, you don't really need to worry about this.

### Custom Elements and Custom Events

We need to use _module augmentation_ via _declaration merging_ in order to have the new types available in the API.

If we're adding an element, we'd get the default configuration:

```ts
declare module "dom-ts/meta-element" {
  import { AllHTMLElementMeta } from "dom-ts/meta-html-element"
  import { AllSVGElementMeta } from "dom-ts/meta-svg-element"

  export type AllElementMeta = AllSVGElementMeta | AllHTMLElementMeta
}
```

and extend it with our new type:

```diff
 import { MyCustomHTMLElement, MyCustomHTMLElementEventMap } from "./src/my-custom-element"

 declare module "dom-ts/meta-element" {
-  import { AllHTMLElementMeta } from "dom-ts/meta-html-element"
+  import { AllHTMLElementMeta, MetaHTMLElement } from "dom-ts/meta-html-element"
   import { AllSVGElementMeta } from "dom-ts/meta-svg-element"

+  type MyCustomHTMLElementMeta = MetaHTMLElement<
+    "my-custom",
+    MyCustomHTMLElement,
+    MyCustomHTMLElementEventMap
+  >
+
-  export type AllElementMeta = AllSVGElementMeta | AllHTMLElementMeta
+  export type AllElementMeta = AllSVGElementMeta | AllHTMLElementMeta | MyCustomHTMLElementMeta
 }
```

We may make this more ergonomic in future and/or provide beter documentation.
