---
title: meta-svg-element.ts
nav_order: 6
parent: Modules
---

## meta-svg-element overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [AllSVGElementMeta (type alias)](#allsvgelementmeta-type-alias)
  - [MatchSVGElementElement (type alias)](#matchsvgelementelement-type-alias)
  - [MatchSVGElementEventMap (type alias)](#matchsvgelementeventmap-type-alias)
  - [MatchSVGElementTagName (type alias)](#matchsvgelementtagname-type-alias)
  - [MetaSVGElement (type alias)](#metasvgelement-type-alias)
  - [SVGAElementMeta (type alias)](#svgaelementmeta-type-alias)
  - [SVGCircleElementMeta (type alias)](#svgcircleelementmeta-type-alias)
  - [SVGClipPathElementMeta (type alias)](#svgclippathelementmeta-type-alias)
  - [SVGDefsElementMeta (type alias)](#svgdefselementmeta-type-alias)
  - [SVGDescElementMeta (type alias)](#svgdescelementmeta-type-alias)
  - [SVGEllipseElementMeta (type alias)](#svgellipseelementmeta-type-alias)
  - [SVGFEBlendElementMeta (type alias)](#svgfeblendelementmeta-type-alias)
  - [SVGFEColorMatrixElementMeta (type alias)](#svgfecolormatrixelementmeta-type-alias)
  - [SVGFEComponentTransferElementMeta (type alias)](#svgfecomponenttransferelementmeta-type-alias)
  - [SVGFECompositeElementMeta (type alias)](#svgfecompositeelementmeta-type-alias)
  - [SVGFEConvolveMatrixElementMeta (type alias)](#svgfeconvolvematrixelementmeta-type-alias)
  - [SVGFEDiffuseLightingElementMeta (type alias)](#svgfediffuselightingelementmeta-type-alias)
  - [SVGFEDisplacementMapElementMeta (type alias)](#svgfedisplacementmapelementmeta-type-alias)
  - [SVGFEDistantLightElementMeta (type alias)](#svgfedistantlightelementmeta-type-alias)
  - [SVGFEFloodElementMeta (type alias)](#svgfefloodelementmeta-type-alias)
  - [SVGFEFuncAElementMeta (type alias)](#svgfefuncaelementmeta-type-alias)
  - [SVGFEFuncBElementMeta (type alias)](#svgfefuncbelementmeta-type-alias)
  - [SVGFEFuncGElementMeta (type alias)](#svgfefuncgelementmeta-type-alias)
  - [SVGFEFuncRElementMeta (type alias)](#svgfefuncrelementmeta-type-alias)
  - [SVGFEGaussianBlurElementMeta (type alias)](#svgfegaussianblurelementmeta-type-alias)
  - [SVGFEImageElementMeta (type alias)](#svgfeimageelementmeta-type-alias)
  - [SVGFEMergeElementMeta (type alias)](#svgfemergeelementmeta-type-alias)
  - [SVGFEMergeNodeElementMeta (type alias)](#svgfemergenodeelementmeta-type-alias)
  - [SVGFEMorphologyElementMeta (type alias)](#svgfemorphologyelementmeta-type-alias)
  - [SVGFEOffsetElementMeta (type alias)](#svgfeoffsetelementmeta-type-alias)
  - [SVGFEPointLightElementMeta (type alias)](#svgfepointlightelementmeta-type-alias)
  - [SVGFESpecularLightingElementMeta (type alias)](#svgfespecularlightingelementmeta-type-alias)
  - [SVGFESpotLightElementMeta (type alias)](#svgfespotlightelementmeta-type-alias)
  - [SVGFETileElementMeta (type alias)](#svgfetileelementmeta-type-alias)
  - [SVGFETurbulenceElementMeta (type alias)](#svgfeturbulenceelementmeta-type-alias)
  - [SVGFilterElementMeta (type alias)](#svgfilterelementmeta-type-alias)
  - [SVGForeignObjectElementMeta (type alias)](#svgforeignobjectelementmeta-type-alias)
  - [SVGGElementMeta (type alias)](#svggelementmeta-type-alias)
  - [SVGImageElementMeta (type alias)](#svgimageelementmeta-type-alias)
  - [SVGLineElementMeta (type alias)](#svglineelementmeta-type-alias)
  - [SVGLinearGradientElementMeta (type alias)](#svglineargradientelementmeta-type-alias)
  - [SVGMarkerElementMeta (type alias)](#svgmarkerelementmeta-type-alias)
  - [SVGMaskElementMeta (type alias)](#svgmaskelementmeta-type-alias)
  - [SVGMetadataElementMeta (type alias)](#svgmetadataelementmeta-type-alias)
  - [SVGPathElementMeta (type alias)](#svgpathelementmeta-type-alias)
  - [SVGPatternElementMeta (type alias)](#svgpatternelementmeta-type-alias)
  - [SVGPolygonElementMeta (type alias)](#svgpolygonelementmeta-type-alias)
  - [SVGPolylineElementMeta (type alias)](#svgpolylineelementmeta-type-alias)
  - [SVGRadialGradientElementMeta (type alias)](#svgradialgradientelementmeta-type-alias)
  - [SVGRectElementMeta (type alias)](#svgrectelementmeta-type-alias)
  - [SVGSVGElementMeta (type alias)](#svgsvgelementmeta-type-alias)
  - [SVGScriptElementMeta (type alias)](#svgscriptelementmeta-type-alias)
  - [SVGStopElementMeta (type alias)](#svgstopelementmeta-type-alias)
  - [SVGStyleElementMeta (type alias)](#svgstyleelementmeta-type-alias)
  - [SVGSwitchElementMeta (type alias)](#svgswitchelementmeta-type-alias)
  - [SVGSymbolElementMeta (type alias)](#svgsymbolelementmeta-type-alias)
  - [SVGTSpanElementMeta (type alias)](#svgtspanelementmeta-type-alias)
  - [SVGTextElementMeta (type alias)](#svgtextelementmeta-type-alias)
  - [SVGTextPathElementMeta (type alias)](#svgtextpathelementmeta-type-alias)
  - [SVGTitleElementMeta (type alias)](#svgtitleelementmeta-type-alias)
  - [SVGUseElementMeta (type alias)](#svguseelementmeta-type-alias)
  - [SVGViewElementMeta (type alias)](#svgviewelementmeta-type-alias)

---

# Constructors

## AllSVGElementMeta (type alias)

**Signature**

```ts
export type AllSVGElementMeta =
  | SVGAElementMeta
  | SVGCircleElementMeta
  | SVGClipPathElementMeta
  | SVGDefsElementMeta
  | SVGDescElementMeta
  | SVGEllipseElementMeta
  | SVGFEBlendElementMeta
  | SVGFEColorMatrixElementMeta
  | SVGFEComponentTransferElementMeta
  | SVGFECompositeElementMeta
  | SVGFEConvolveMatrixElementMeta
  | SVGFEDiffuseLightingElementMeta
  | SVGFEDisplacementMapElementMeta
  | SVGFEDistantLightElementMeta
  | SVGFEFloodElementMeta
  | SVGFEFuncAElementMeta
  | SVGFEFuncBElementMeta
  | SVGFEFuncGElementMeta
  | SVGFEFuncRElementMeta
  | SVGFEGaussianBlurElementMeta
  | SVGFEImageElementMeta
  | SVGFEMergeElementMeta
  | SVGFEMergeNodeElementMeta
  | SVGFEMorphologyElementMeta
  | SVGFEOffsetElementMeta
  | SVGFEPointLightElementMeta
  | SVGFESpecularLightingElementMeta
  | SVGFESpotLightElementMeta
  | SVGFETileElementMeta
  | SVGFETurbulenceElementMeta
  | SVGFilterElementMeta
  | SVGForeignObjectElementMeta
  | SVGGElementMeta
  | SVGImageElementMeta
  | SVGLineElementMeta
  | SVGLinearGradientElementMeta
  | SVGMarkerElementMeta
  | SVGMaskElementMeta
  | SVGMetadataElementMeta
  | SVGPathElementMeta
  | SVGPatternElementMeta
  | SVGPolygonElementMeta
  | SVGPolylineElementMeta
  | SVGRadialGradientElementMeta
  | SVGRectElementMeta
  | SVGScriptElementMeta
  | SVGStopElementMeta
  | SVGStyleElementMeta
  | SVGSVGElementMeta
  | SVGSwitchElementMeta
  | SVGSymbolElementMeta
  | SVGTextElementMeta
  | SVGTextPathElementMeta
  | SVGTitleElementMeta
  | SVGTSpanElementMeta
  | SVGUseElementMeta
  | SVGViewElementMeta
```

Added in v8.1.0

## MatchSVGElementElement (type alias)

**Signature**

```ts
export type MatchSVGElementElement<
  E extends SVGElement
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MatchSVGElementEventMap (type alias)

**Signature**

```ts
export type MatchSVGElementEventMap<
  A extends SVGElementEventMap
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MatchSVGElementTagName (type alias)

**Signature**

```ts
export type MatchSVGElementTagName<
  R extends string
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MetaSVGElement (type alias)

**Signature**

```ts
export type MetaSVGElement<
  R extends string,
  E extends SVGElement,
  A extends SVGElementEventMap = SVGElementEventMap
> = MetaElement<R, E, A>
```

Added in v8.1.0

## SVGAElementMeta (type alias)

**Signature**

```ts
export type SVGAElementMeta = MetaSVGElement<"a", SVGAElement>
```

Added in v8.1.0

## SVGCircleElementMeta (type alias)

**Signature**

```ts
export type SVGCircleElementMeta = MetaSVGElement<"circle", SVGCircleElement>
```

Added in v8.1.0

## SVGClipPathElementMeta (type alias)

**Signature**

```ts
export type SVGClipPathElementMeta = MetaSVGElement<
  "clipPath",
  SVGClipPathElement
>
```

Added in v8.1.0

## SVGDefsElementMeta (type alias)

**Signature**

```ts
export type SVGDefsElementMeta = MetaSVGElement<"defs", SVGDefsElement>
```

Added in v8.1.0

## SVGDescElementMeta (type alias)

**Signature**

```ts
export type SVGDescElementMeta = MetaSVGElement<"desc", SVGDescElement>
```

Added in v8.1.0

## SVGEllipseElementMeta (type alias)

**Signature**

```ts
export type SVGEllipseElementMeta = MetaSVGElement<"ellipse", SVGEllipseElement>
```

Added in v8.1.0

## SVGFEBlendElementMeta (type alias)

**Signature**

```ts
export type SVGFEBlendElementMeta = MetaSVGElement<"feBlend", SVGFEBlendElement>
```

Added in v8.1.0

## SVGFEColorMatrixElementMeta (type alias)

**Signature**

```ts
export type SVGFEColorMatrixElementMeta = MetaSVGElement<
  "feColorMatrix",
  SVGFEColorMatrixElement
>
```

Added in v8.1.0

## SVGFEComponentTransferElementMeta (type alias)

**Signature**

```ts
export type SVGFEComponentTransferElementMeta = MetaSVGElement<
  "feComponentTransfer",
  SVGFEComponentTransferElement
>
```

Added in v8.1.0

## SVGFECompositeElementMeta (type alias)

**Signature**

```ts
export type SVGFECompositeElementMeta = MetaSVGElement<
  "feComposite",
  SVGFECompositeElement
>
```

Added in v8.1.0

## SVGFEConvolveMatrixElementMeta (type alias)

**Signature**

```ts
export type SVGFEConvolveMatrixElementMeta = MetaSVGElement<
  "feConvolveMatrix",
  SVGFEConvolveMatrixElement
>
```

Added in v8.1.0

## SVGFEDiffuseLightingElementMeta (type alias)

**Signature**

```ts
export type SVGFEDiffuseLightingElementMeta = MetaSVGElement<
  "feDiffuseLighting",
  SVGFEDiffuseLightingElement
>
```

Added in v8.1.0

## SVGFEDisplacementMapElementMeta (type alias)

**Signature**

```ts
export type SVGFEDisplacementMapElementMeta = MetaSVGElement<
  "feDisplacementMap",
  SVGFEDisplacementMapElement
>
```

Added in v8.1.0

## SVGFEDistantLightElementMeta (type alias)

**Signature**

```ts
export type SVGFEDistantLightElementMeta = MetaSVGElement<
  "feDistantLight",
  SVGFEDistantLightElement
>
```

Added in v8.1.0

## SVGFEFloodElementMeta (type alias)

**Signature**

```ts
export type SVGFEFloodElementMeta = MetaSVGElement<"feFlood", SVGFEFloodElement>
```

Added in v8.1.0

## SVGFEFuncAElementMeta (type alias)

**Signature**

```ts
export type SVGFEFuncAElementMeta = MetaSVGElement<"feFuncA", SVGFEFuncAElement>
```

Added in v8.1.0

## SVGFEFuncBElementMeta (type alias)

**Signature**

```ts
export type SVGFEFuncBElementMeta = MetaSVGElement<"feFuncB", SVGFEFuncBElement>
```

Added in v8.1.0

## SVGFEFuncGElementMeta (type alias)

**Signature**

```ts
export type SVGFEFuncGElementMeta = MetaSVGElement<"feFuncG", SVGFEFuncGElement>
```

Added in v8.1.0

## SVGFEFuncRElementMeta (type alias)

**Signature**

```ts
export type SVGFEFuncRElementMeta = MetaSVGElement<"feFuncR", SVGFEFuncRElement>
```

Added in v8.1.0

## SVGFEGaussianBlurElementMeta (type alias)

**Signature**

```ts
export type SVGFEGaussianBlurElementMeta = MetaSVGElement<
  "feGaussianBlur",
  SVGFEGaussianBlurElement
>
```

Added in v8.1.0

## SVGFEImageElementMeta (type alias)

**Signature**

```ts
export type SVGFEImageElementMeta = MetaSVGElement<"feImage", SVGFEImageElement>
```

Added in v8.1.0

## SVGFEMergeElementMeta (type alias)

**Signature**

```ts
export type SVGFEMergeElementMeta = MetaSVGElement<"feMerge", SVGFEMergeElement>
```

Added in v8.1.0

## SVGFEMergeNodeElementMeta (type alias)

**Signature**

```ts
export type SVGFEMergeNodeElementMeta = MetaSVGElement<
  "feMergeNode",
  SVGFEMergeNodeElement
>
```

Added in v8.1.0

## SVGFEMorphologyElementMeta (type alias)

**Signature**

```ts
export type SVGFEMorphologyElementMeta = MetaSVGElement<
  "feMorphology",
  SVGFEMorphologyElement
>
```

Added in v8.1.0

## SVGFEOffsetElementMeta (type alias)

**Signature**

```ts
export type SVGFEOffsetElementMeta = MetaSVGElement<
  "feOffset",
  SVGFEOffsetElement
>
```

Added in v8.1.0

## SVGFEPointLightElementMeta (type alias)

**Signature**

```ts
export type SVGFEPointLightElementMeta = MetaSVGElement<
  "fePointLight",
  SVGFEPointLightElement
>
```

Added in v8.1.0

## SVGFESpecularLightingElementMeta (type alias)

**Signature**

```ts
export type SVGFESpecularLightingElementMeta = MetaSVGElement<
  "feSpecularLighting",
  SVGFESpecularLightingElement
>
```

Added in v8.1.0

## SVGFESpotLightElementMeta (type alias)

**Signature**

```ts
export type SVGFESpotLightElementMeta = MetaSVGElement<
  "feSpotLight",
  SVGFESpotLightElement
>
```

Added in v8.1.0

## SVGFETileElementMeta (type alias)

**Signature**

```ts
export type SVGFETileElementMeta = MetaSVGElement<"feTile", SVGFETileElement>
```

Added in v8.1.0

## SVGFETurbulenceElementMeta (type alias)

**Signature**

```ts
export type SVGFETurbulenceElementMeta = MetaSVGElement<
  "feTurbulence",
  SVGFETurbulenceElement
>
```

Added in v8.1.0

## SVGFilterElementMeta (type alias)

**Signature**

```ts
export type SVGFilterElementMeta = MetaSVGElement<"filter", SVGFilterElement>
```

Added in v8.1.0

## SVGForeignObjectElementMeta (type alias)

**Signature**

```ts
export type SVGForeignObjectElementMeta = MetaSVGElement<
  "foreignObject",
  SVGForeignObjectElement
>
```

Added in v8.1.0

## SVGGElementMeta (type alias)

**Signature**

```ts
export type SVGGElementMeta = MetaSVGElement<"g", SVGGElement>
```

Added in v8.1.0

## SVGImageElementMeta (type alias)

**Signature**

```ts
export type SVGImageElementMeta = MetaSVGElement<"image", SVGImageElement>
```

Added in v8.1.0

## SVGLineElementMeta (type alias)

**Signature**

```ts
export type SVGLineElementMeta = MetaSVGElement<"line", SVGLineElement>
```

Added in v8.1.0

## SVGLinearGradientElementMeta (type alias)

**Signature**

```ts
export type SVGLinearGradientElementMeta = MetaSVGElement<
  "linearGradient",
  SVGLinearGradientElement
>
```

Added in v8.1.0

## SVGMarkerElementMeta (type alias)

**Signature**

```ts
export type SVGMarkerElementMeta = MetaSVGElement<"marker", SVGMarkerElement>
```

Added in v8.1.0

## SVGMaskElementMeta (type alias)

**Signature**

```ts
export type SVGMaskElementMeta = MetaSVGElement<"mask", SVGMaskElement>
```

Added in v8.1.0

## SVGMetadataElementMeta (type alias)

**Signature**

```ts
export type SVGMetadataElementMeta = MetaSVGElement<
  "metadata",
  SVGMetadataElement
>
```

Added in v8.1.0

## SVGPathElementMeta (type alias)

**Signature**

```ts
export type SVGPathElementMeta = MetaSVGElement<"path", SVGPathElement>
```

Added in v8.1.0

## SVGPatternElementMeta (type alias)

**Signature**

```ts
export type SVGPatternElementMeta = MetaSVGElement<"pattern", SVGPatternElement>
```

Added in v8.1.0

## SVGPolygonElementMeta (type alias)

**Signature**

```ts
export type SVGPolygonElementMeta = MetaSVGElement<"polygon", SVGPolygonElement>
```

Added in v8.1.0

## SVGPolylineElementMeta (type alias)

**Signature**

```ts
export type SVGPolylineElementMeta = MetaSVGElement<
  "polyline",
  SVGPolylineElement
>
```

Added in v8.1.0

## SVGRadialGradientElementMeta (type alias)

**Signature**

```ts
export type SVGRadialGradientElementMeta = MetaSVGElement<
  "radialGradient",
  SVGRadialGradientElement
>
```

Added in v8.1.0

## SVGRectElementMeta (type alias)

**Signature**

```ts
export type SVGRectElementMeta = MetaSVGElement<"rect", SVGRectElement>
```

Added in v8.1.0

## SVGSVGElementMeta (type alias)

**Signature**

```ts
export type SVGSVGElementMeta = MetaSVGElement<"svg", SVGSVGElement>
```

Added in v8.1.0

## SVGScriptElementMeta (type alias)

**Signature**

```ts
export type SVGScriptElementMeta = MetaSVGElement<"script", SVGScriptElement>
```

Added in v8.1.0

## SVGStopElementMeta (type alias)

**Signature**

```ts
export type SVGStopElementMeta = MetaSVGElement<"stop", SVGStopElement>
```

Added in v8.1.0

## SVGStyleElementMeta (type alias)

**Signature**

```ts
export type SVGStyleElementMeta = MetaSVGElement<"style", SVGStyleElement>
```

Added in v8.1.0

## SVGSwitchElementMeta (type alias)

**Signature**

```ts
export type SVGSwitchElementMeta = MetaSVGElement<"switch", SVGSwitchElement>
```

Added in v8.1.0

## SVGSymbolElementMeta (type alias)

**Signature**

```ts
export type SVGSymbolElementMeta = MetaSVGElement<"symbol", SVGSymbolElement>
```

Added in v8.1.0

## SVGTSpanElementMeta (type alias)

**Signature**

```ts
export type SVGTSpanElementMeta = MetaSVGElement<"tspan", SVGTSpanElement>
```

Added in v8.1.0

## SVGTextElementMeta (type alias)

**Signature**

```ts
export type SVGTextElementMeta = MetaSVGElement<"text", SVGTextElement>
```

Added in v8.1.0

## SVGTextPathElementMeta (type alias)

**Signature**

```ts
export type SVGTextPathElementMeta = MetaSVGElement<
  "textPath",
  SVGTextPathElement
>
```

Added in v8.1.0

## SVGTitleElementMeta (type alias)

**Signature**

```ts
export type SVGTitleElementMeta = MetaSVGElement<"title", SVGTitleElement>
```

Added in v8.1.0

## SVGUseElementMeta (type alias)

**Signature**

```ts
export type SVGUseElementMeta = MetaSVGElement<"use", SVGUseElement>
```

Added in v8.1.0

## SVGViewElementMeta (type alias)

**Signature**

```ts
export type SVGViewElementMeta = MetaSVGElement<"view", SVGViewElement>
```

Added in v8.1.0
