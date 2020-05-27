import { CreateElementMeta } from "./maps";

export type SVGAElementMeta = CreateElementMeta<"a", SVGAElement>;
export type SVGCircleElementMeta = CreateElementMeta<
  "circle",
  SVGCircleElement
>;
export type SVGClipPathElementMeta = CreateElementMeta<
  "clipPath",
  SVGClipPathElement
>;
export type SVGDefsElementMeta = CreateElementMeta<"defs", SVGDefsElement>;
export type SVGDescElementMeta = CreateElementMeta<"desc", SVGDescElement>;
export type SVGEllipseElementMeta = CreateElementMeta<
  "ellipse",
  SVGEllipseElement
>;
export type SVGFEBlendElementMeta = CreateElementMeta<
  "feBlend",
  SVGFEBlendElement
>;
export type SVGFEColorMatrixElementMeta = CreateElementMeta<
  "feColorMatrix",
  SVGFEColorMatrixElement
>;
export type SVGFEComponentTransferElementMeta = CreateElementMeta<
  "feComponentTransfer",
  SVGFEComponentTransferElement
>;
export type SVGFECompositeElementMeta = CreateElementMeta<
  "feComposite",
  SVGFECompositeElement
>;
export type SVGFEConvolveMatrixElementMeta = CreateElementMeta<
  "feConvolveMatrix",
  SVGFEConvolveMatrixElement
>;
export type SVGFEDiffuseLightingElementMeta = CreateElementMeta<
  "feDiffuseLighting",
  SVGFEDiffuseLightingElement
>;
export type SVGFEDisplacementMapElementMeta = CreateElementMeta<
  "feDisplacementMap",
  SVGFEDisplacementMapElement
>;
export type SVGFEDistantLightElementMeta = CreateElementMeta<
  "feDistantLight",
  SVGFEDistantLightElement
>;
export type SVGFEFloodElementMeta = CreateElementMeta<
  "feFlood",
  SVGFEFloodElement
>;
export type SVGFEFuncAElementMeta = CreateElementMeta<
  "feFuncA",
  SVGFEFuncAElement
>;
export type SVGFEFuncBElementMeta = CreateElementMeta<
  "feFuncB",
  SVGFEFuncBElement
>;
export type SVGFEFuncGElementMeta = CreateElementMeta<
  "feFuncG",
  SVGFEFuncGElement
>;
export type SVGFEFuncRElementMeta = CreateElementMeta<
  "feFuncR",
  SVGFEFuncRElement
>;
export type SVGFEGaussianBlurElementMeta = CreateElementMeta<
  "feGaussianBlur",
  SVGFEGaussianBlurElement
>;
export type SVGFEImageElementMeta = CreateElementMeta<
  "feImage",
  SVGFEImageElement
>;
export type SVGFEMergeElementMeta = CreateElementMeta<
  "feMerge",
  SVGFEMergeElement
>;
export type SVGFEMergeNodeElementMeta = CreateElementMeta<
  "feMergeNode",
  SVGFEMergeNodeElement
>;
export type SVGFEMorphologyElementMeta = CreateElementMeta<
  "feMorphology",
  SVGFEMorphologyElement
>;
export type SVGFEOffsetElementMeta = CreateElementMeta<
  "feOffset",
  SVGFEOffsetElement
>;
export type SVGFEPointLightElementMeta = CreateElementMeta<
  "fePointLight",
  SVGFEPointLightElement
>;
export type SVGFESpecularLightingElementMeta = CreateElementMeta<
  "feSpecularLighting",
  SVGFESpecularLightingElement
>;
export type SVGFESpotLightElementMeta = CreateElementMeta<
  "feSpotLight",
  SVGFESpotLightElement
>;
export type SVGFETileElementMeta = CreateElementMeta<
  "feTile",
  SVGFETileElement
>;
export type SVGFETurbulenceElementMeta = CreateElementMeta<
  "feTurbulence",
  SVGFETurbulenceElement
>;
export type SVGFilterElementMeta = CreateElementMeta<
  "filter",
  SVGFilterElement
>;
export type SVGForeignObjectElementMeta = CreateElementMeta<
  "foreignObject",
  SVGForeignObjectElement
>;
export type SVGGElementMeta = CreateElementMeta<"g", SVGGElement>;
export type SVGImageElementMeta = CreateElementMeta<"image", SVGImageElement>;
export type SVGLineElementMeta = CreateElementMeta<"line", SVGLineElement>;
export type SVGLinearGradientElementMeta = CreateElementMeta<
  "linearGradient",
  SVGLinearGradientElement
>;
export type SVGMarkerElementMeta = CreateElementMeta<
  "marker",
  SVGMarkerElement
>;
export type SVGMaskElementMeta = CreateElementMeta<"mask", SVGMaskElement>;
export type SVGMetadataElementMeta = CreateElementMeta<
  "metadata",
  SVGMetadataElement
>;
export type SVGPathElementMeta = CreateElementMeta<"path", SVGPathElement>;
export type SVGPatternElementMeta = CreateElementMeta<
  "pattern",
  SVGPatternElement
>;
export type SVGPolygonElementMeta = CreateElementMeta<
  "polygon",
  SVGPolygonElement
>;
export type SVGPolylineElementMeta = CreateElementMeta<
  "polyline",
  SVGPolylineElement
>;
export type SVGRadialGradientElementMeta = CreateElementMeta<
  "radialGradient",
  SVGRadialGradientElement
>;
export type SVGRectElementMeta = CreateElementMeta<"rect", SVGRectElement>;
export type SVGScriptElementMeta = CreateElementMeta<
  "script",
  SVGScriptElement
>;
export type SVGStopElementMeta = CreateElementMeta<"stop", SVGStopElement>;
export type SVGStyleElementMeta = CreateElementMeta<"style", SVGStyleElement>;
export type SVGSVGElementMeta = CreateElementMeta<"svg", SVGSVGElement>;
export type SVGSwitchElementMeta = CreateElementMeta<
  "switch",
  SVGSwitchElement
>;
export type SVGSymbolElementMeta = CreateElementMeta<
  "symbol",
  SVGSymbolElement
>;
export type SVGTextElementMeta = CreateElementMeta<"text", SVGTextElement>;
export type SVGTextPathElementMeta = CreateElementMeta<
  "textPath",
  SVGTextPathElement
>;
export type SVGTitleElementMeta = CreateElementMeta<"title", SVGTitleElement>;
export type SVGTSpanElementMeta = CreateElementMeta<"tspan", SVGTSpanElement>;
export type SVGUseElementMeta = CreateElementMeta<"use", SVGUseElement>;
export type SVGViewElementMeta = CreateElementMeta<"view", SVGViewElement>;

export type SVGElementMetaUnion =
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
