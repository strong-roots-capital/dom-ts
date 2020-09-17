/**
 * All SVGElements with matching tagNames and eventMaps
 */
import { CreateElementMeta } from "./index";

export type CreateSVGElementMeta<
  R extends string,
  E extends SVGElement,
  A extends SVGElementEventMap = SVGElementEventMap
> = CreateElementMeta<R, E, A>;

export type SVGAElementMeta = CreateSVGElementMeta<"a", SVGAElement>;
export type SVGCircleElementMeta = CreateSVGElementMeta<
  "circle",
  SVGCircleElement
>;
export type SVGClipPathElementMeta = CreateSVGElementMeta<
  "clipPath",
  SVGClipPathElement
>;
export type SVGDefsElementMeta = CreateSVGElementMeta<"defs", SVGDefsElement>;
export type SVGDescElementMeta = CreateSVGElementMeta<"desc", SVGDescElement>;
export type SVGEllipseElementMeta = CreateSVGElementMeta<
  "ellipse",
  SVGEllipseElement
>;
export type SVGFEBlendElementMeta = CreateSVGElementMeta<
  "feBlend",
  SVGFEBlendElement
>;
export type SVGFEColorMatrixElementMeta = CreateSVGElementMeta<
  "feColorMatrix",
  SVGFEColorMatrixElement
>;
export type SVGFEComponentTransferElementMeta = CreateSVGElementMeta<
  "feComponentTransfer",
  SVGFEComponentTransferElement
>;
export type SVGFECompositeElementMeta = CreateSVGElementMeta<
  "feComposite",
  SVGFECompositeElement
>;
export type SVGFEConvolveMatrixElementMeta = CreateSVGElementMeta<
  "feConvolveMatrix",
  SVGFEConvolveMatrixElement
>;
export type SVGFEDiffuseLightingElementMeta = CreateSVGElementMeta<
  "feDiffuseLighting",
  SVGFEDiffuseLightingElement
>;
export type SVGFEDisplacementMapElementMeta = CreateSVGElementMeta<
  "feDisplacementMap",
  SVGFEDisplacementMapElement
>;
export type SVGFEDistantLightElementMeta = CreateSVGElementMeta<
  "feDistantLight",
  SVGFEDistantLightElement
>;
export type SVGFEFloodElementMeta = CreateSVGElementMeta<
  "feFlood",
  SVGFEFloodElement
>;
export type SVGFEFuncAElementMeta = CreateSVGElementMeta<
  "feFuncA",
  SVGFEFuncAElement
>;
export type SVGFEFuncBElementMeta = CreateSVGElementMeta<
  "feFuncB",
  SVGFEFuncBElement
>;
export type SVGFEFuncGElementMeta = CreateSVGElementMeta<
  "feFuncG",
  SVGFEFuncGElement
>;
export type SVGFEFuncRElementMeta = CreateSVGElementMeta<
  "feFuncR",
  SVGFEFuncRElement
>;
export type SVGFEGaussianBlurElementMeta = CreateSVGElementMeta<
  "feGaussianBlur",
  SVGFEGaussianBlurElement
>;
export type SVGFEImageElementMeta = CreateSVGElementMeta<
  "feImage",
  SVGFEImageElement
>;
export type SVGFEMergeElementMeta = CreateSVGElementMeta<
  "feMerge",
  SVGFEMergeElement
>;
export type SVGFEMergeNodeElementMeta = CreateSVGElementMeta<
  "feMergeNode",
  SVGFEMergeNodeElement
>;
export type SVGFEMorphologyElementMeta = CreateSVGElementMeta<
  "feMorphology",
  SVGFEMorphologyElement
>;
export type SVGFEOffsetElementMeta = CreateSVGElementMeta<
  "feOffset",
  SVGFEOffsetElement
>;
export type SVGFEPointLightElementMeta = CreateSVGElementMeta<
  "fePointLight",
  SVGFEPointLightElement
>;
export type SVGFESpecularLightingElementMeta = CreateSVGElementMeta<
  "feSpecularLighting",
  SVGFESpecularLightingElement
>;
export type SVGFESpotLightElementMeta = CreateSVGElementMeta<
  "feSpotLight",
  SVGFESpotLightElement
>;
export type SVGFETileElementMeta = CreateSVGElementMeta<
  "feTile",
  SVGFETileElement
>;
export type SVGFETurbulenceElementMeta = CreateSVGElementMeta<
  "feTurbulence",
  SVGFETurbulenceElement
>;
export type SVGFilterElementMeta = CreateSVGElementMeta<
  "filter",
  SVGFilterElement
>;
export type SVGForeignObjectElementMeta = CreateSVGElementMeta<
  "foreignObject",
  SVGForeignObjectElement
>;
export type SVGGElementMeta = CreateSVGElementMeta<"g", SVGGElement>;
export type SVGImageElementMeta = CreateSVGElementMeta<
  "image",
  SVGImageElement
>;
export type SVGLineElementMeta = CreateSVGElementMeta<"line", SVGLineElement>;
export type SVGLinearGradientElementMeta = CreateSVGElementMeta<
  "linearGradient",
  SVGLinearGradientElement
>;
export type SVGMarkerElementMeta = CreateSVGElementMeta<
  "marker",
  SVGMarkerElement
>;
export type SVGMaskElementMeta = CreateSVGElementMeta<"mask", SVGMaskElement>;
export type SVGMetadataElementMeta = CreateSVGElementMeta<
  "metadata",
  SVGMetadataElement
>;
export type SVGPathElementMeta = CreateSVGElementMeta<"path", SVGPathElement>;
export type SVGPatternElementMeta = CreateSVGElementMeta<
  "pattern",
  SVGPatternElement
>;
export type SVGPolygonElementMeta = CreateSVGElementMeta<
  "polygon",
  SVGPolygonElement
>;
export type SVGPolylineElementMeta = CreateSVGElementMeta<
  "polyline",
  SVGPolylineElement
>;
export type SVGRadialGradientElementMeta = CreateSVGElementMeta<
  "radialGradient",
  SVGRadialGradientElement
>;
export type SVGRectElementMeta = CreateSVGElementMeta<"rect", SVGRectElement>;
export type SVGScriptElementMeta = CreateSVGElementMeta<
  "script",
  SVGScriptElement
>;
export type SVGStopElementMeta = CreateSVGElementMeta<"stop", SVGStopElement>;
export type SVGStyleElementMeta = CreateSVGElementMeta<
  "style",
  SVGStyleElement
>;
export type SVGSVGElementMeta = CreateSVGElementMeta<"svg", SVGSVGElement>;
export type SVGSwitchElementMeta = CreateSVGElementMeta<
  "switch",
  SVGSwitchElement
>;
export type SVGSymbolElementMeta = CreateSVGElementMeta<
  "symbol",
  SVGSymbolElement
>;
export type SVGTextElementMeta = CreateSVGElementMeta<"text", SVGTextElement>;
export type SVGTextPathElementMeta = CreateSVGElementMeta<
  "textPath",
  SVGTextPathElement
>;
export type SVGTitleElementMeta = CreateSVGElementMeta<
  "title",
  SVGTitleElement
>;
export type SVGTSpanElementMeta = CreateSVGElementMeta<
  "tspan",
  SVGTSpanElement
>;
export type SVGUseElementMeta = CreateSVGElementMeta<"use", SVGUseElement>;
export type SVGViewElementMeta = CreateSVGElementMeta<"view", SVGViewElement>;

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
  | SVGViewElementMeta;
