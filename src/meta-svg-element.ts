/**
 * All SVGElements with matching tagNames and eventMaps
 */
import { MetaElement } from "./meta-element"

export type MatchSVGElementTagName<R extends string> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MatchSVGElementElement<E extends SVGElement> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MatchSVGElementEventMap<
  A extends SVGElementEventMap
> = AllSVGElementMeta extends infer T
  ? T extends MetaSVGElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MetaSVGElement<
  R extends string,
  E extends SVGElement,
  A extends SVGElementEventMap = SVGElementEventMap
> = MetaElement<R, E, A>

export type SVGAElementMeta = MetaSVGElement<"a", SVGAElement>
export type SVGCircleElementMeta = MetaSVGElement<"circle", SVGCircleElement>
export type SVGClipPathElementMeta = MetaSVGElement<"clipPath", SVGClipPathElement>
export type SVGDefsElementMeta = MetaSVGElement<"defs", SVGDefsElement>
export type SVGDescElementMeta = MetaSVGElement<"desc", SVGDescElement>
export type SVGEllipseElementMeta = MetaSVGElement<"ellipse", SVGEllipseElement>
export type SVGFEBlendElementMeta = MetaSVGElement<"feBlend", SVGFEBlendElement>
export type SVGFEColorMatrixElementMeta = MetaSVGElement<"feColorMatrix", SVGFEColorMatrixElement>
export type SVGFEComponentTransferElementMeta = MetaSVGElement<
  "feComponentTransfer",
  SVGFEComponentTransferElement
>
export type SVGFECompositeElementMeta = MetaSVGElement<"feComposite", SVGFECompositeElement>
export type SVGFEConvolveMatrixElementMeta = MetaSVGElement<
  "feConvolveMatrix",
  SVGFEConvolveMatrixElement
>
export type SVGFEDiffuseLightingElementMeta = MetaSVGElement<
  "feDiffuseLighting",
  SVGFEDiffuseLightingElement
>
export type SVGFEDisplacementMapElementMeta = MetaSVGElement<
  "feDisplacementMap",
  SVGFEDisplacementMapElement
>
export type SVGFEDistantLightElementMeta = MetaSVGElement<
  "feDistantLight",
  SVGFEDistantLightElement
>
export type SVGFEFloodElementMeta = MetaSVGElement<"feFlood", SVGFEFloodElement>
export type SVGFEFuncAElementMeta = MetaSVGElement<"feFuncA", SVGFEFuncAElement>
export type SVGFEFuncBElementMeta = MetaSVGElement<"feFuncB", SVGFEFuncBElement>
export type SVGFEFuncGElementMeta = MetaSVGElement<"feFuncG", SVGFEFuncGElement>
export type SVGFEFuncRElementMeta = MetaSVGElement<"feFuncR", SVGFEFuncRElement>
export type SVGFEGaussianBlurElementMeta = MetaSVGElement<
  "feGaussianBlur",
  SVGFEGaussianBlurElement
>
export type SVGFEImageElementMeta = MetaSVGElement<"feImage", SVGFEImageElement>
export type SVGFEMergeElementMeta = MetaSVGElement<"feMerge", SVGFEMergeElement>
export type SVGFEMergeNodeElementMeta = MetaSVGElement<"feMergeNode", SVGFEMergeNodeElement>
export type SVGFEMorphologyElementMeta = MetaSVGElement<"feMorphology", SVGFEMorphologyElement>
export type SVGFEOffsetElementMeta = MetaSVGElement<"feOffset", SVGFEOffsetElement>
export type SVGFEPointLightElementMeta = MetaSVGElement<"fePointLight", SVGFEPointLightElement>
export type SVGFESpecularLightingElementMeta = MetaSVGElement<
  "feSpecularLighting",
  SVGFESpecularLightingElement
>
export type SVGFESpotLightElementMeta = MetaSVGElement<"feSpotLight", SVGFESpotLightElement>
export type SVGFETileElementMeta = MetaSVGElement<"feTile", SVGFETileElement>
export type SVGFETurbulenceElementMeta = MetaSVGElement<"feTurbulence", SVGFETurbulenceElement>
export type SVGFilterElementMeta = MetaSVGElement<"filter", SVGFilterElement>
export type SVGForeignObjectElementMeta = MetaSVGElement<"foreignObject", SVGForeignObjectElement>
export type SVGGElementMeta = MetaSVGElement<"g", SVGGElement>
export type SVGImageElementMeta = MetaSVGElement<"image", SVGImageElement>
export type SVGLineElementMeta = MetaSVGElement<"line", SVGLineElement>
export type SVGLinearGradientElementMeta = MetaSVGElement<
  "linearGradient",
  SVGLinearGradientElement
>
export type SVGMarkerElementMeta = MetaSVGElement<"marker", SVGMarkerElement>
export type SVGMaskElementMeta = MetaSVGElement<"mask", SVGMaskElement>
export type SVGMetadataElementMeta = MetaSVGElement<"metadata", SVGMetadataElement>
export type SVGPathElementMeta = MetaSVGElement<"path", SVGPathElement>
export type SVGPatternElementMeta = MetaSVGElement<"pattern", SVGPatternElement>
export type SVGPolygonElementMeta = MetaSVGElement<"polygon", SVGPolygonElement>
export type SVGPolylineElementMeta = MetaSVGElement<"polyline", SVGPolylineElement>
export type SVGRadialGradientElementMeta = MetaSVGElement<
  "radialGradient",
  SVGRadialGradientElement
>
export type SVGRectElementMeta = MetaSVGElement<"rect", SVGRectElement>
export type SVGScriptElementMeta = MetaSVGElement<"script", SVGScriptElement>
export type SVGStopElementMeta = MetaSVGElement<"stop", SVGStopElement>
export type SVGStyleElementMeta = MetaSVGElement<"style", SVGStyleElement>
export type SVGSVGElementMeta = MetaSVGElement<"svg", SVGSVGElement>
export type SVGSwitchElementMeta = MetaSVGElement<"switch", SVGSwitchElement>
export type SVGSymbolElementMeta = MetaSVGElement<"symbol", SVGSymbolElement>
export type SVGTextElementMeta = MetaSVGElement<"text", SVGTextElement>
export type SVGTextPathElementMeta = MetaSVGElement<"textPath", SVGTextPathElement>
export type SVGTitleElementMeta = MetaSVGElement<"title", SVGTitleElement>
export type SVGTSpanElementMeta = MetaSVGElement<"tspan", SVGTSpanElement>
export type SVGUseElementMeta = MetaSVGElement<"use", SVGUseElement>
export type SVGViewElementMeta = MetaSVGElement<"view", SVGViewElement>

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
