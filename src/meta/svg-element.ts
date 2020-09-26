/**
 * All SVGElements with matching tagNames and eventMaps
 */
import { CreateMetaElement } from "./index"

export type CreateMetaSVGElement<
  R extends string,
  E extends SVGElement,
  A extends SVGElementEventMap = SVGElementEventMap
> = CreateMetaElement<R, E, A>

export type SVGAElementMeta = CreateMetaSVGElement<"a", SVGAElement>
export type SVGCircleElementMeta = CreateMetaSVGElement<"circle", SVGCircleElement>
export type SVGClipPathElementMeta = CreateMetaSVGElement<"clipPath", SVGClipPathElement>
export type SVGDefsElementMeta = CreateMetaSVGElement<"defs", SVGDefsElement>
export type SVGDescElementMeta = CreateMetaSVGElement<"desc", SVGDescElement>
export type SVGEllipseElementMeta = CreateMetaSVGElement<"ellipse", SVGEllipseElement>
export type SVGFEBlendElementMeta = CreateMetaSVGElement<"feBlend", SVGFEBlendElement>
export type SVGFEColorMatrixElementMeta = CreateMetaSVGElement<
  "feColorMatrix",
  SVGFEColorMatrixElement
>
export type SVGFEComponentTransferElementMeta = CreateMetaSVGElement<
  "feComponentTransfer",
  SVGFEComponentTransferElement
>
export type SVGFECompositeElementMeta = CreateMetaSVGElement<"feComposite", SVGFECompositeElement>
export type SVGFEConvolveMatrixElementMeta = CreateMetaSVGElement<
  "feConvolveMatrix",
  SVGFEConvolveMatrixElement
>
export type SVGFEDiffuseLightingElementMeta = CreateMetaSVGElement<
  "feDiffuseLighting",
  SVGFEDiffuseLightingElement
>
export type SVGFEDisplacementMapElementMeta = CreateMetaSVGElement<
  "feDisplacementMap",
  SVGFEDisplacementMapElement
>
export type SVGFEDistantLightElementMeta = CreateMetaSVGElement<
  "feDistantLight",
  SVGFEDistantLightElement
>
export type SVGFEFloodElementMeta = CreateMetaSVGElement<"feFlood", SVGFEFloodElement>
export type SVGFEFuncAElementMeta = CreateMetaSVGElement<"feFuncA", SVGFEFuncAElement>
export type SVGFEFuncBElementMeta = CreateMetaSVGElement<"feFuncB", SVGFEFuncBElement>
export type SVGFEFuncGElementMeta = CreateMetaSVGElement<"feFuncG", SVGFEFuncGElement>
export type SVGFEFuncRElementMeta = CreateMetaSVGElement<"feFuncR", SVGFEFuncRElement>
export type SVGFEGaussianBlurElementMeta = CreateMetaSVGElement<
  "feGaussianBlur",
  SVGFEGaussianBlurElement
>
export type SVGFEImageElementMeta = CreateMetaSVGElement<"feImage", SVGFEImageElement>
export type SVGFEMergeElementMeta = CreateMetaSVGElement<"feMerge", SVGFEMergeElement>
export type SVGFEMergeNodeElementMeta = CreateMetaSVGElement<"feMergeNode", SVGFEMergeNodeElement>
export type SVGFEMorphologyElementMeta = CreateMetaSVGElement<
  "feMorphology",
  SVGFEMorphologyElement
>
export type SVGFEOffsetElementMeta = CreateMetaSVGElement<"feOffset", SVGFEOffsetElement>
export type SVGFEPointLightElementMeta = CreateMetaSVGElement<
  "fePointLight",
  SVGFEPointLightElement
>
export type SVGFESpecularLightingElementMeta = CreateMetaSVGElement<
  "feSpecularLighting",
  SVGFESpecularLightingElement
>
export type SVGFESpotLightElementMeta = CreateMetaSVGElement<"feSpotLight", SVGFESpotLightElement>
export type SVGFETileElementMeta = CreateMetaSVGElement<"feTile", SVGFETileElement>
export type SVGFETurbulenceElementMeta = CreateMetaSVGElement<
  "feTurbulence",
  SVGFETurbulenceElement
>
export type SVGFilterElementMeta = CreateMetaSVGElement<"filter", SVGFilterElement>
export type SVGForeignObjectElementMeta = CreateMetaSVGElement<
  "foreignObject",
  SVGForeignObjectElement
>
export type SVGGElementMeta = CreateMetaSVGElement<"g", SVGGElement>
export type SVGImageElementMeta = CreateMetaSVGElement<"image", SVGImageElement>
export type SVGLineElementMeta = CreateMetaSVGElement<"line", SVGLineElement>
export type SVGLinearGradientElementMeta = CreateMetaSVGElement<
  "linearGradient",
  SVGLinearGradientElement
>
export type SVGMarkerElementMeta = CreateMetaSVGElement<"marker", SVGMarkerElement>
export type SVGMaskElementMeta = CreateMetaSVGElement<"mask", SVGMaskElement>
export type SVGMetadataElementMeta = CreateMetaSVGElement<"metadata", SVGMetadataElement>
export type SVGPathElementMeta = CreateMetaSVGElement<"path", SVGPathElement>
export type SVGPatternElementMeta = CreateMetaSVGElement<"pattern", SVGPatternElement>
export type SVGPolygonElementMeta = CreateMetaSVGElement<"polygon", SVGPolygonElement>
export type SVGPolylineElementMeta = CreateMetaSVGElement<"polyline", SVGPolylineElement>
export type SVGRadialGradientElementMeta = CreateMetaSVGElement<
  "radialGradient",
  SVGRadialGradientElement
>
export type SVGRectElementMeta = CreateMetaSVGElement<"rect", SVGRectElement>
export type SVGScriptElementMeta = CreateMetaSVGElement<"script", SVGScriptElement>
export type SVGStopElementMeta = CreateMetaSVGElement<"stop", SVGStopElement>
export type SVGStyleElementMeta = CreateMetaSVGElement<"style", SVGStyleElement>
export type SVGSVGElementMeta = CreateMetaSVGElement<"svg", SVGSVGElement>
export type SVGSwitchElementMeta = CreateMetaSVGElement<"switch", SVGSwitchElement>
export type SVGSymbolElementMeta = CreateMetaSVGElement<"symbol", SVGSymbolElement>
export type SVGTextElementMeta = CreateMetaSVGElement<"text", SVGTextElement>
export type SVGTextPathElementMeta = CreateMetaSVGElement<"textPath", SVGTextPathElement>
export type SVGTitleElementMeta = CreateMetaSVGElement<"title", SVGTitleElement>
export type SVGTSpanElementMeta = CreateMetaSVGElement<"tspan", SVGTSpanElement>
export type SVGUseElementMeta = CreateMetaSVGElement<"use", SVGUseElement>
export type SVGViewElementMeta = CreateMetaSVGElement<"view", SVGViewElement>

export type MetaAllSVGElement =
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
