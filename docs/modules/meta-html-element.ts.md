---
title: meta-html-element.ts
nav_order: 5
parent: Modules
---

## meta-html-element overview

Added in v8.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [AllHTMLElementMeta (type alias)](#allhtmlelementmeta-type-alias)
  - [HTMLAbbrElementMeta (type alias)](#htmlabbrelementmeta-type-alias)
  - [HTMLAddressElementMeta (type alias)](#htmladdresselementmeta-type-alias)
  - [HTMLAnchorElementMeta (type alias)](#htmlanchorelementmeta-type-alias)
  - [HTMLAppletElementMeta (type alias)](#htmlappletelementmeta-type-alias)
  - [HTMLAreaElementMeta (type alias)](#htmlareaelementmeta-type-alias)
  - [HTMLArticleElementMeta (type alias)](#htmlarticleelementmeta-type-alias)
  - [HTMLAsideElementMeta (type alias)](#htmlasideelementmeta-type-alias)
  - [HTMLAudioElementMeta (type alias)](#htmlaudioelementmeta-type-alias)
  - [HTMLBElementMeta (type alias)](#htmlbelementmeta-type-alias)
  - [HTMLBRElementMeta (type alias)](#htmlbrelementmeta-type-alias)
  - [HTMLBaseElementMeta (type alias)](#htmlbaseelementmeta-type-alias)
  - [HTMLBaseFontElementMeta (type alias)](#htmlbasefontelementmeta-type-alias)
  - [HTMLBdiElementMeta (type alias)](#htmlbdielementmeta-type-alias)
  - [HTMLBdoElementMeta (type alias)](#htmlbdoelementmeta-type-alias)
  - [HTMLBodyElementMeta (type alias)](#htmlbodyelementmeta-type-alias)
  - [HTMLButtonElementMeta (type alias)](#htmlbuttonelementmeta-type-alias)
  - [HTMLCanvasElementMeta (type alias)](#htmlcanvaselementmeta-type-alias)
  - [HTMLCiteElementMeta (type alias)](#htmlciteelementmeta-type-alias)
  - [HTMLCodeElementMeta (type alias)](#htmlcodeelementmeta-type-alias)
  - [HTMLColElementMeta (type alias)](#htmlcolelementmeta-type-alias)
  - [HTMLDDElementMeta (type alias)](#htmlddelementmeta-type-alias)
  - [HTMLDFNElementMeta (type alias)](#htmldfnelementmeta-type-alias)
  - [HTMLDListElementMeta (type alias)](#htmldlistelementmeta-type-alias)
  - [HTMLDataElementMeta (type alias)](#htmldataelementmeta-type-alias)
  - [HTMLDataListElementMeta (type alias)](#htmldatalistelementmeta-type-alias)
  - [HTMLDelElementMeta (type alias)](#htmldelelementmeta-type-alias)
  - [HTMLDetailsElementMeta (type alias)](#htmldetailselementmeta-type-alias)
  - [HTMLDialogElementMeta (type alias)](#htmldialogelementmeta-type-alias)
  - [HTMLDirectoryElementMeta (type alias)](#htmldirectoryelementmeta-type-alias)
  - [HTMLDivElementMeta (type alias)](#htmldivelementmeta-type-alias)
  - [HTMLDtElementMeta (type alias)](#htmldtelementmeta-type-alias)
  - [HTMLEmElementMeta (type alias)](#htmlemelementmeta-type-alias)
  - [HTMLEmbedElementMeta (type alias)](#htmlembedelementmeta-type-alias)
  - [HTMLFieldSetElementMeta (type alias)](#htmlfieldsetelementmeta-type-alias)
  - [HTMLFigcaptionElementMeta (type alias)](#htmlfigcaptionelementmeta-type-alias)
  - [HTMLFigureElementMeta (type alias)](#htmlfigureelementmeta-type-alias)
  - [HTMLFontElementMeta (type alias)](#htmlfontelementmeta-type-alias)
  - [HTMLFooterElementMeta (type alias)](#htmlfooterelementmeta-type-alias)
  - [HTMLFormElementMeta (type alias)](#htmlformelementmeta-type-alias)
  - [HTMLFrameElementMeta (type alias)](#htmlframeelementmeta-type-alias)
  - [HTMLFrameSetElementMeta (type alias)](#htmlframesetelementmeta-type-alias)
  - [HTMLHGroupElementMeta (type alias)](#htmlhgroupelementmeta-type-alias)
  - [HTMLHRElementMeta (type alias)](#htmlhrelementmeta-type-alias)
  - [HTMLHeadElementMeta (type alias)](#htmlheadelementmeta-type-alias)
  - [HTMLHeaderElementMeta (type alias)](#htmlheaderelementmeta-type-alias)
  - [HTMLHeading1ElementMeta (type alias)](#htmlheading1elementmeta-type-alias)
  - [HTMLHeading2ElementMeta (type alias)](#htmlheading2elementmeta-type-alias)
  - [HTMLHeading3ElementMeta (type alias)](#htmlheading3elementmeta-type-alias)
  - [HTMLHeading4ElementMeta (type alias)](#htmlheading4elementmeta-type-alias)
  - [HTMLHeading5ElementMeta (type alias)](#htmlheading5elementmeta-type-alias)
  - [HTMLHeading6ElementMeta (type alias)](#htmlheading6elementmeta-type-alias)
  - [HTMLHtmlElementMeta (type alias)](#htmlhtmlelementmeta-type-alias)
  - [HTMLIElementMeta (type alias)](#htmlielementmeta-type-alias)
  - [HTMLIFrameElementMeta (type alias)](#htmliframeelementmeta-type-alias)
  - [HTMLImageElementMeta (type alias)](#htmlimageelementmeta-type-alias)
  - [HTMLInputElementMeta (type alias)](#htmlinputelementmeta-type-alias)
  - [HTMLInsElementMeta (type alias)](#htmlinselementmeta-type-alias)
  - [HTMLKBDElementMeta (type alias)](#htmlkbdelementmeta-type-alias)
  - [HTMLLIElementMeta (type alias)](#htmllielementmeta-type-alias)
  - [HTMLLabelElementMeta (type alias)](#htmllabelelementmeta-type-alias)
  - [HTMLLegendElementMeta (type alias)](#htmllegendelementmeta-type-alias)
  - [HTMLLinkElementMeta (type alias)](#htmllinkelementmeta-type-alias)
  - [HTMLMainElementMeta (type alias)](#htmlmainelementmeta-type-alias)
  - [HTMLMapElementMeta (type alias)](#htmlmapelementmeta-type-alias)
  - [HTMLMarkElementMeta (type alias)](#htmlmarkelementmeta-type-alias)
  - [HTMLMarqueeElementMeta (type alias)](#htmlmarqueeelementmeta-type-alias)
  - [HTMLMenuElementMeta (type alias)](#htmlmenuelementmeta-type-alias)
  - [HTMLMetaElementMeta (type alias)](#htmlmetaelementmeta-type-alias)
  - [HTMLMeterElementMeta (type alias)](#htmlmeterelementmeta-type-alias)
  - [HTMLNavElementMeta (type alias)](#htmlnavelementmeta-type-alias)
  - [HTMLNoscriptElementMeta (type alias)](#htmlnoscriptelementmeta-type-alias)
  - [HTMLOListElementMeta (type alias)](#htmlolistelementmeta-type-alias)
  - [HTMLObjectElementMeta (type alias)](#htmlobjectelementmeta-type-alias)
  - [HTMLOptgroupElementMeta (type alias)](#htmloptgroupelementmeta-type-alias)
  - [HTMLOptionElementMeta (type alias)](#htmloptionelementmeta-type-alias)
  - [HTMLOutputElementMeta (type alias)](#htmloutputelementmeta-type-alias)
  - [HTMLPElementMeta (type alias)](#htmlpelementmeta-type-alias)
  - [HTMLParamElementMeta (type alias)](#htmlparamelementmeta-type-alias)
  - [HTMLPictureElementMeta (type alias)](#htmlpictureelementmeta-type-alias)
  - [HTMLPreElementMeta (type alias)](#htmlpreelementmeta-type-alias)
  - [HTMLProgressElementMeta (type alias)](#htmlprogresselementmeta-type-alias)
  - [HTMLQElementMeta (type alias)](#htmlqelementmeta-type-alias)
  - [HTMLQuoteElementMeta (type alias)](#htmlquoteelementmeta-type-alias)
  - [HTMLRpElementMeta (type alias)](#htmlrpelementmeta-type-alias)
  - [HTMLRtElementMeta (type alias)](#htmlrtelementmeta-type-alias)
  - [HTMLRubyElementMeta (type alias)](#htmlrubyelementmeta-type-alias)
  - [HTMLSElementMeta (type alias)](#htmlselementmeta-type-alias)
  - [HTMLSampElementMeta (type alias)](#htmlsampelementmeta-type-alias)
  - [HTMLScriptElementMeta (type alias)](#htmlscriptelementmeta-type-alias)
  - [HTMLSectionElementMeta (type alias)](#htmlsectionelementmeta-type-alias)
  - [HTMLSelectElementMeta (type alias)](#htmlselectelementmeta-type-alias)
  - [HTMLSlotElementMeta (type alias)](#htmlslotelementmeta-type-alias)
  - [HTMLSmallElementMeta (type alias)](#htmlsmallelementmeta-type-alias)
  - [HTMLSourceElementMeta (type alias)](#htmlsourceelementmeta-type-alias)
  - [HTMLSpanElementMeta (type alias)](#htmlspanelementmeta-type-alias)
  - [HTMLStrongElementMeta (type alias)](#htmlstrongelementmeta-type-alias)
  - [HTMLStyleElementMeta (type alias)](#htmlstyleelementmeta-type-alias)
  - [HTMLSubElementMeta (type alias)](#htmlsubelementmeta-type-alias)
  - [HTMLSummaryElementMeta (type alias)](#htmlsummaryelementmeta-type-alias)
  - [HTMLSupElementMeta (type alias)](#htmlsupelementmeta-type-alias)
  - [HTMLTableCaptionElementMeta (type alias)](#htmltablecaptionelementmeta-type-alias)
  - [HTMLTableColElementMeta (type alias)](#htmltablecolelementmeta-type-alias)
  - [HTMLTableElementMeta (type alias)](#htmltableelementmeta-type-alias)
  - [HTMLTbodyElementMeta (type alias)](#htmltbodyelementmeta-type-alias)
  - [HTMLTdElementMeta (type alias)](#htmltdelementmeta-type-alias)
  - [HTMLTemplateElementMeta (type alias)](#htmltemplateelementmeta-type-alias)
  - [HTMLTextareaElementMeta (type alias)](#htmltextareaelementmeta-type-alias)
  - [HTMLTfootElementMeta (type alias)](#htmltfootelementmeta-type-alias)
  - [HTMLThElementMeta (type alias)](#htmlthelementmeta-type-alias)
  - [HTMLTheadElementMeta (type alias)](#htmltheadelementmeta-type-alias)
  - [HTMLTimeElementMeta (type alias)](#htmltimeelementmeta-type-alias)
  - [HTMLTitleElementMeta (type alias)](#htmltitleelementmeta-type-alias)
  - [HTMLTrElementMeta (type alias)](#htmltrelementmeta-type-alias)
  - [HTMLTrackElementMeta (type alias)](#htmltrackelementmeta-type-alias)
  - [HTMLUElementMeta (type alias)](#htmluelementmeta-type-alias)
  - [HTMLUListElementMeta (type alias)](#htmlulistelementmeta-type-alias)
  - [HTMLVarElementMeta (type alias)](#htmlvarelementmeta-type-alias)
  - [HTMLVideoElementMeta (type alias)](#htmlvideoelementmeta-type-alias)
  - [HTMLWbrElementMeta (type alias)](#htmlwbrelementmeta-type-alias)
  - [MatchHTMLElementElement (type alias)](#matchhtmlelementelement-type-alias)
  - [MatchHTMLElementEventMap (type alias)](#matchhtmlelementeventmap-type-alias)
  - [MatchHTMLElementTagName (type alias)](#matchhtmlelementtagname-type-alias)
  - [MetaHTMLElement (type alias)](#metahtmlelement-type-alias)

---

# Constructors

## AllHTMLElementMeta (type alias)

**Signature**

```ts
export type AllHTMLElementMeta =
  | HTMLAnchorElementMeta
  | HTMLAbbrElementMeta
  | HTMLAddressElementMeta
  | HTMLAppletElementMeta
  | HTMLAreaElementMeta
  | HTMLArticleElementMeta
  | HTMLAsideElementMeta
  | HTMLAudioElementMeta
  | HTMLBElementMeta
  | HTMLBaseElementMeta
  | HTMLBaseFontElementMeta
  | HTMLBdiElementMeta
  | HTMLBdoElementMeta
  | HTMLQuoteElementMeta
  | HTMLBodyElementMeta
  | HTMLBRElementMeta
  | HTMLButtonElementMeta
  | HTMLCanvasElementMeta
  | HTMLTableCaptionElementMeta
  | HTMLCiteElementMeta
  | HTMLCodeElementMeta
  | HTMLColElementMeta
  | HTMLTableColElementMeta
  | HTMLDataElementMeta
  | HTMLDataListElementMeta
  | HTMLDDElementMeta
  | HTMLDelElementMeta
  | HTMLDetailsElementMeta
  | HTMLDFNElementMeta
  | HTMLDialogElementMeta
  | HTMLDirectoryElementMeta
  | HTMLDivElementMeta
  | HTMLDListElementMeta
  | HTMLDtElementMeta
  | HTMLEmElementMeta
  | HTMLEmbedElementMeta
  | HTMLFieldSetElementMeta
  | HTMLFigcaptionElementMeta
  | HTMLFigureElementMeta
  | HTMLFontElementMeta
  | HTMLFooterElementMeta
  | HTMLFormElementMeta
  | HTMLFrameElementMeta
  | HTMLFrameSetElementMeta
  | HTMLHeading1ElementMeta
  | HTMLHeading2ElementMeta
  | HTMLHeading3ElementMeta
  | HTMLHeading4ElementMeta
  | HTMLHeading5ElementMeta
  | HTMLHeading6ElementMeta
  | HTMLHeadElementMeta
  | HTMLHeaderElementMeta
  | HTMLHGroupElementMeta
  | HTMLHRElementMeta
  | HTMLHtmlElementMeta
  | HTMLIElementMeta
  | HTMLIFrameElementMeta
  | HTMLImageElementMeta
  | HTMLInputElementMeta
  | HTMLInsElementMeta
  | HTMLKBDElementMeta
  | HTMLLabelElementMeta
  | HTMLLegendElementMeta
  | HTMLLIElementMeta
  | HTMLLinkElementMeta
  | HTMLMainElementMeta
  | HTMLMapElementMeta
  | HTMLMarkElementMeta
  | HTMLMarqueeElementMeta
  | HTMLMenuElementMeta
  | HTMLMetaElementMeta
  | HTMLMeterElementMeta
  | HTMLNavElementMeta
  | HTMLNoscriptElementMeta
  | HTMLObjectElementMeta
  | HTMLOListElementMeta
  | HTMLOptgroupElementMeta
  | HTMLOptionElementMeta
  | HTMLOutputElementMeta
  | HTMLPElementMeta
  | HTMLParamElementMeta
  | HTMLPictureElementMeta
  | HTMLPreElementMeta
  | HTMLProgressElementMeta
  | HTMLQElementMeta
  | HTMLRpElementMeta
  | HTMLRtElementMeta
  | HTMLRubyElementMeta
  | HTMLSElementMeta
  | HTMLSampElementMeta
  | HTMLScriptElementMeta
  | HTMLSectionElementMeta
  | HTMLSelectElementMeta
  | HTMLSlotElementMeta
  | HTMLSmallElementMeta
  | HTMLSourceElementMeta
  | HTMLSpanElementMeta
  | HTMLStrongElementMeta
  | HTMLStyleElementMeta
  | HTMLSubElementMeta
  | HTMLSummaryElementMeta
  | HTMLSupElementMeta
  | HTMLTableElementMeta
  | HTMLTbodyElementMeta
  | HTMLTdElementMeta
  | HTMLTemplateElementMeta
  | HTMLTextareaElementMeta
  | HTMLTfootElementMeta
  | HTMLThElementMeta
  | HTMLTheadElementMeta
  | HTMLTimeElementMeta
  | HTMLTitleElementMeta
  | HTMLTrElementMeta
  | HTMLTrackElementMeta
  | HTMLUElementMeta
  | HTMLUListElementMeta
  | HTMLVarElementMeta
  | HTMLVideoElementMeta
  | HTMLWbrElementMeta
```

Added in v8.1.0

## HTMLAbbrElementMeta (type alias)

**Signature**

```ts
export type HTMLAbbrElementMeta = MetaHTMLElement<"abbr", HTMLElement>
```

Added in v8.1.0

## HTMLAddressElementMeta (type alias)

**Signature**

```ts
export type HTMLAddressElementMeta = MetaHTMLElement<"address", HTMLElement>
```

Added in v8.1.0

## HTMLAnchorElementMeta (type alias)

**Signature**

```ts
export type HTMLAnchorElementMeta = MetaHTMLElement<"a", HTMLAnchorElement>
```

Added in v8.1.0

## HTMLAppletElementMeta (type alias)

**Signature**

```ts
export type HTMLAppletElementMeta = MetaHTMLElement<"applet", HTMLAppletElement>
```

Added in v8.1.0

## HTMLAreaElementMeta (type alias)

**Signature**

```ts
export type HTMLAreaElementMeta = MetaHTMLElement<"area", HTMLAreaElement>
```

Added in v8.1.0

## HTMLArticleElementMeta (type alias)

**Signature**

```ts
export type HTMLArticleElementMeta = MetaHTMLElement<"article", HTMLElement>
```

Added in v8.1.0

## HTMLAsideElementMeta (type alias)

**Signature**

```ts
export type HTMLAsideElementMeta = MetaHTMLElement<"aside", HTMLElement>
```

Added in v8.1.0

## HTMLAudioElementMeta (type alias)

**Signature**

```ts
export type HTMLAudioElementMeta = MetaHTMLElement<
  "audio",
  HTMLAudioElement,
  HTMLMediaElementEventMap
>
```

Added in v8.1.0

## HTMLBElementMeta (type alias)

**Signature**

```ts
export type HTMLBElementMeta = MetaHTMLElement<"b", HTMLElement>
```

Added in v8.1.0

## HTMLBRElementMeta (type alias)

**Signature**

```ts
export type HTMLBRElementMeta = MetaHTMLElement<"br", HTMLBRElement>
```

Added in v8.1.0

## HTMLBaseElementMeta (type alias)

**Signature**

```ts
export type HTMLBaseElementMeta = MetaHTMLElement<"base", HTMLBaseElement>
```

Added in v8.1.0

## HTMLBaseFontElementMeta (type alias)

**Signature**

```ts
export type HTMLBaseFontElementMeta = MetaHTMLElement<
  "basefont",
  HTMLBaseFontElement
>
```

Added in v8.1.0

## HTMLBdiElementMeta (type alias)

**Signature**

```ts
export type HTMLBdiElementMeta = MetaHTMLElement<"bdi", HTMLElement>
```

Added in v8.1.0

## HTMLBdoElementMeta (type alias)

**Signature**

```ts
export type HTMLBdoElementMeta = MetaHTMLElement<"bdo", HTMLElement>
```

Added in v8.1.0

## HTMLBodyElementMeta (type alias)

**Signature**

```ts
export type HTMLBodyElementMeta = MetaHTMLElement<
  "body",
  HTMLBodyElement,
  HTMLBodyElementEventMap
>
```

Added in v8.1.0

## HTMLButtonElementMeta (type alias)

**Signature**

```ts
export type HTMLButtonElementMeta = MetaHTMLElement<"button", HTMLButtonElement>
```

Added in v8.1.0

## HTMLCanvasElementMeta (type alias)

**Signature**

```ts
export type HTMLCanvasElementMeta = MetaHTMLElement<"canvas", HTMLCanvasElement>
```

Added in v8.1.0

## HTMLCiteElementMeta (type alias)

**Signature**

```ts
export type HTMLCiteElementMeta = MetaHTMLElement<"cite", HTMLElement>
```

Added in v8.1.0

## HTMLCodeElementMeta (type alias)

**Signature**

```ts
export type HTMLCodeElementMeta = MetaHTMLElement<"code", HTMLElement>
```

Added in v8.1.0

## HTMLColElementMeta (type alias)

**Signature**

```ts
export type HTMLColElementMeta = MetaHTMLElement<"col", HTMLTableColElement>
```

Added in v8.1.0

## HTMLDDElementMeta (type alias)

**Signature**

```ts
export type HTMLDDElementMeta = MetaHTMLElement<"dd", HTMLElement>
```

Added in v8.1.0

## HTMLDFNElementMeta (type alias)

**Signature**

```ts
export type HTMLDFNElementMeta = MetaHTMLElement<"dfn", HTMLElement>
```

Added in v8.1.0

## HTMLDListElementMeta (type alias)

**Signature**

```ts
export type HTMLDListElementMeta = MetaHTMLElement<"dl", HTMLDListElement>
```

Added in v8.1.0

## HTMLDataElementMeta (type alias)

**Signature**

```ts
export type HTMLDataElementMeta = MetaHTMLElement<"data", HTMLDataElement>
```

Added in v8.1.0

## HTMLDataListElementMeta (type alias)

**Signature**

```ts
export type HTMLDataListElementMeta = MetaHTMLElement<
  "datalist",
  HTMLDataListElement
>
```

Added in v8.1.0

## HTMLDelElementMeta (type alias)

**Signature**

```ts
export type HTMLDelElementMeta = MetaHTMLElement<"del", HTMLModElement>
```

Added in v8.1.0

## HTMLDetailsElementMeta (type alias)

**Signature**

```ts
export type HTMLDetailsElementMeta = MetaHTMLElement<
  "details",
  HTMLDetailsElement
>
```

Added in v8.1.0

## HTMLDialogElementMeta (type alias)

**Signature**

```ts
export type HTMLDialogElementMeta = MetaHTMLElement<"dialog", HTMLDialogElement>
```

Added in v8.1.0

## HTMLDirectoryElementMeta (type alias)

**Signature**

```ts
export type HTMLDirectoryElementMeta = MetaHTMLElement<
  "dir",
  HTMLDirectoryElement
>
```

Added in v8.1.0

## HTMLDivElementMeta (type alias)

**Signature**

```ts
export type HTMLDivElementMeta = MetaHTMLElement<"div", HTMLDivElement>
```

Added in v8.1.0

## HTMLDtElementMeta (type alias)

**Signature**

```ts
export type HTMLDtElementMeta = MetaHTMLElement<"dt", HTMLElement>
```

Added in v8.1.0

## HTMLEmElementMeta (type alias)

**Signature**

```ts
export type HTMLEmElementMeta = MetaHTMLElement<"em", HTMLElement>
```

Added in v8.1.0

## HTMLEmbedElementMeta (type alias)

**Signature**

```ts
export type HTMLEmbedElementMeta = MetaHTMLElement<"embed", HTMLEmbedElement>
```

Added in v8.1.0

## HTMLFieldSetElementMeta (type alias)

**Signature**

```ts
export type HTMLFieldSetElementMeta = MetaHTMLElement<
  "fieldset",
  HTMLFieldSetElement
>
```

Added in v8.1.0

## HTMLFigcaptionElementMeta (type alias)

**Signature**

```ts
export type HTMLFigcaptionElementMeta = MetaHTMLElement<
  "figcaption",
  HTMLElement
>
```

Added in v8.1.0

## HTMLFigureElementMeta (type alias)

**Signature**

```ts
export type HTMLFigureElementMeta = MetaHTMLElement<"figure", HTMLElement>
```

Added in v8.1.0

## HTMLFontElementMeta (type alias)

**Signature**

```ts
export type HTMLFontElementMeta = MetaHTMLElement<"font", HTMLFontElement>
```

Added in v8.1.0

## HTMLFooterElementMeta (type alias)

**Signature**

```ts
export type HTMLFooterElementMeta = MetaHTMLElement<"footer", HTMLElement>
```

Added in v8.1.0

## HTMLFormElementMeta (type alias)

**Signature**

```ts
export type HTMLFormElementMeta = MetaHTMLElement<
  "form",
  HTMLFormElement,
  HTMLFrameSetElementEventMap
>
```

Added in v8.1.0

## HTMLFrameElementMeta (type alias)

**Signature**

```ts
export type HTMLFrameElementMeta = MetaHTMLElement<"frame", HTMLFrameElement>
```

Added in v8.1.0

## HTMLFrameSetElementMeta (type alias)

**Signature**

```ts
export type HTMLFrameSetElementMeta = MetaHTMLElement<
  "frameset",
  HTMLFrameSetElement
>
```

Added in v8.1.0

## HTMLHGroupElementMeta (type alias)

**Signature**

```ts
export type HTMLHGroupElementMeta = MetaHTMLElement<"hgroup", HTMLElement>
```

Added in v8.1.0

## HTMLHRElementMeta (type alias)

**Signature**

```ts
export type HTMLHRElementMeta = MetaHTMLElement<"hr", HTMLHRElement>
```

Added in v8.1.0

## HTMLHeadElementMeta (type alias)

**Signature**

```ts
export type HTMLHeadElementMeta = MetaHTMLElement<"head", HTMLHeadElement>
```

Added in v8.1.0

## HTMLHeaderElementMeta (type alias)

**Signature**

```ts
export type HTMLHeaderElementMeta = MetaHTMLElement<"header", HTMLElement>
```

Added in v8.1.0

## HTMLHeading1ElementMeta (type alias)

**Signature**

```ts
export type HTMLHeading1ElementMeta = MetaHTMLElement<"h1", HTMLHeadingElement>
```

Added in v8.1.0

## HTMLHeading2ElementMeta (type alias)

**Signature**

```ts
export type HTMLHeading2ElementMeta = MetaHTMLElement<"h2", HTMLHeadingElement>
```

Added in v8.1.0

## HTMLHeading3ElementMeta (type alias)

**Signature**

```ts
export type HTMLHeading3ElementMeta = MetaHTMLElement<"h3", HTMLHeadingElement>
```

Added in v8.1.0

## HTMLHeading4ElementMeta (type alias)

**Signature**

```ts
export type HTMLHeading4ElementMeta = MetaHTMLElement<"h4", HTMLHeadingElement>
```

Added in v8.1.0

## HTMLHeading5ElementMeta (type alias)

**Signature**

```ts
export type HTMLHeading5ElementMeta = MetaHTMLElement<"h5", HTMLHeadingElement>
```

Added in v8.1.0

## HTMLHeading6ElementMeta (type alias)

**Signature**

```ts
export type HTMLHeading6ElementMeta = MetaHTMLElement<"h6", HTMLHeadingElement>
```

Added in v8.1.0

## HTMLHtmlElementMeta (type alias)

**Signature**

```ts
export type HTMLHtmlElementMeta = MetaHTMLElement<"html", HTMLHtmlElement>
```

Added in v8.1.0

## HTMLIElementMeta (type alias)

**Signature**

```ts
export type HTMLIElementMeta = MetaHTMLElement<"i", HTMLElement>
```

Added in v8.1.0

## HTMLIFrameElementMeta (type alias)

**Signature**

```ts
export type HTMLIFrameElementMeta = MetaHTMLElement<"iframe", HTMLIFrameElement>
```

Added in v8.1.0

## HTMLImageElementMeta (type alias)

**Signature**

```ts
export type HTMLImageElementMeta = MetaHTMLElement<"img", HTMLImageElement>
```

Added in v8.1.0

## HTMLInputElementMeta (type alias)

**Signature**

```ts
export type HTMLInputElementMeta = MetaHTMLElement<"input", HTMLInputElement>
```

Added in v8.1.0

## HTMLInsElementMeta (type alias)

**Signature**

```ts
export type HTMLInsElementMeta = MetaHTMLElement<"ins", HTMLModElement>
```

Added in v8.1.0

## HTMLKBDElementMeta (type alias)

**Signature**

```ts
export type HTMLKBDElementMeta = MetaHTMLElement<"kbd", HTMLElement>
```

Added in v8.1.0

## HTMLLIElementMeta (type alias)

**Signature**

```ts
export type HTMLLIElementMeta = MetaHTMLElement<"li", HTMLLIElement>
```

Added in v8.1.0

## HTMLLabelElementMeta (type alias)

**Signature**

```ts
export type HTMLLabelElementMeta = MetaHTMLElement<"label", HTMLLabelElement>
```

Added in v8.1.0

## HTMLLegendElementMeta (type alias)

**Signature**

```ts
export type HTMLLegendElementMeta = MetaHTMLElement<"legend", HTMLLegendElement>
```

Added in v8.1.0

## HTMLLinkElementMeta (type alias)

**Signature**

```ts
export type HTMLLinkElementMeta = MetaHTMLElement<"link", HTMLLinkElement>
```

Added in v8.1.0

## HTMLMainElementMeta (type alias)

**Signature**

```ts
export type HTMLMainElementMeta = MetaHTMLElement<"main", HTMLElement>
```

Added in v8.1.0

## HTMLMapElementMeta (type alias)

**Signature**

```ts
export type HTMLMapElementMeta = MetaHTMLElement<"map", HTMLMapElement>
```

Added in v8.1.0

## HTMLMarkElementMeta (type alias)

**Signature**

```ts
export type HTMLMarkElementMeta = MetaHTMLElement<"mark", HTMLElement>
```

Added in v8.1.0

## HTMLMarqueeElementMeta (type alias)

**Signature**

```ts
export type HTMLMarqueeElementMeta = MetaHTMLElement<
  "marquee",
  HTMLMarqueeElement,
  HTMLMarqueeElementEventMap
>
```

Added in v8.1.0

## HTMLMenuElementMeta (type alias)

**Signature**

```ts
export type HTMLMenuElementMeta = MetaHTMLElement<"menu", HTMLMenuElement>
```

Added in v8.1.0

## HTMLMetaElementMeta (type alias)

**Signature**

```ts
export type HTMLMetaElementMeta = MetaHTMLElement<"meta", HTMLMetaElement>
```

Added in v8.1.0

## HTMLMeterElementMeta (type alias)

**Signature**

```ts
export type HTMLMeterElementMeta = MetaHTMLElement<"meter", HTMLMeterElement>
```

Added in v8.1.0

## HTMLNavElementMeta (type alias)

**Signature**

```ts
export type HTMLNavElementMeta = MetaHTMLElement<"nav", HTMLElement>
```

Added in v8.1.0

## HTMLNoscriptElementMeta (type alias)

**Signature**

```ts
export type HTMLNoscriptElementMeta = MetaHTMLElement<"noscript", HTMLElement>
```

Added in v8.1.0

## HTMLOListElementMeta (type alias)

**Signature**

```ts
export type HTMLOListElementMeta = MetaHTMLElement<"ol", HTMLOListElement>
```

Added in v8.1.0

## HTMLObjectElementMeta (type alias)

**Signature**

```ts
export type HTMLObjectElementMeta = MetaHTMLElement<"object", HTMLObjectElement>
```

Added in v8.1.0

## HTMLOptgroupElementMeta (type alias)

**Signature**

```ts
export type HTMLOptgroupElementMeta = MetaHTMLElement<
  "optgroup",
  HTMLOptGroupElement
>
```

Added in v8.1.0

## HTMLOptionElementMeta (type alias)

**Signature**

```ts
export type HTMLOptionElementMeta = MetaHTMLElement<"option", HTMLOptionElement>
```

Added in v8.1.0

## HTMLOutputElementMeta (type alias)

**Signature**

```ts
export type HTMLOutputElementMeta = MetaHTMLElement<"output", HTMLOutputElement>
```

Added in v8.1.0

## HTMLPElementMeta (type alias)

**Signature**

```ts
export type HTMLPElementMeta = MetaHTMLElement<"p", HTMLParagraphElement>
```

Added in v8.1.0

## HTMLParamElementMeta (type alias)

**Signature**

```ts
export type HTMLParamElementMeta = MetaHTMLElement<"param", HTMLParamElement>
```

Added in v8.1.0

## HTMLPictureElementMeta (type alias)

**Signature**

```ts
export type HTMLPictureElementMeta = MetaHTMLElement<
  "picture",
  HTMLPictureElement
>
```

Added in v8.1.0

## HTMLPreElementMeta (type alias)

**Signature**

```ts
export type HTMLPreElementMeta = MetaHTMLElement<"pre", HTMLPreElement>
```

Added in v8.1.0

## HTMLProgressElementMeta (type alias)

**Signature**

```ts
export type HTMLProgressElementMeta = MetaHTMLElement<
  "progress",
  HTMLProgressElement
>
```

Added in v8.1.0

## HTMLQElementMeta (type alias)

**Signature**

```ts
export type HTMLQElementMeta = MetaHTMLElement<"q", HTMLQuoteElement>
```

Added in v8.1.0

## HTMLQuoteElementMeta (type alias)

**Signature**

```ts
export type HTMLQuoteElementMeta = MetaHTMLElement<
  "blockquote",
  HTMLQuoteElement
>
```

Added in v8.1.0

## HTMLRpElementMeta (type alias)

**Signature**

```ts
export type HTMLRpElementMeta = MetaHTMLElement<"rp", HTMLElement>
```

Added in v8.1.0

## HTMLRtElementMeta (type alias)

**Signature**

```ts
export type HTMLRtElementMeta = MetaHTMLElement<"rt", HTMLElement>
```

Added in v8.1.0

## HTMLRubyElementMeta (type alias)

**Signature**

```ts
export type HTMLRubyElementMeta = MetaHTMLElement<"ruby", HTMLElement>
```

Added in v8.1.0

## HTMLSElementMeta (type alias)

**Signature**

```ts
export type HTMLSElementMeta = MetaHTMLElement<"s", HTMLElement>
```

Added in v8.1.0

## HTMLSampElementMeta (type alias)

**Signature**

```ts
export type HTMLSampElementMeta = MetaHTMLElement<"samp", HTMLElement>
```

Added in v8.1.0

## HTMLScriptElementMeta (type alias)

**Signature**

```ts
export type HTMLScriptElementMeta = MetaHTMLElement<"script", HTMLScriptElement>
```

Added in v8.1.0

## HTMLSectionElementMeta (type alias)

**Signature**

```ts
export type HTMLSectionElementMeta = MetaHTMLElement<"section", HTMLElement>
```

Added in v8.1.0

## HTMLSelectElementMeta (type alias)

**Signature**

```ts
export type HTMLSelectElementMeta = MetaHTMLElement<"select", HTMLSelectElement>
```

Added in v8.1.0

## HTMLSlotElementMeta (type alias)

**Signature**

```ts
export type HTMLSlotElementMeta = MetaHTMLElement<"slot", HTMLSlotElement>
```

Added in v8.1.0

## HTMLSmallElementMeta (type alias)

**Signature**

```ts
export type HTMLSmallElementMeta = MetaHTMLElement<"small", HTMLElement>
```

Added in v8.1.0

## HTMLSourceElementMeta (type alias)

**Signature**

```ts
export type HTMLSourceElementMeta = MetaHTMLElement<"source", HTMLSourceElement>
```

Added in v8.1.0

## HTMLSpanElementMeta (type alias)

**Signature**

```ts
export type HTMLSpanElementMeta = MetaHTMLElement<"span", HTMLSpanElement>
```

Added in v8.1.0

## HTMLStrongElementMeta (type alias)

**Signature**

```ts
export type HTMLStrongElementMeta = MetaHTMLElement<"strong", HTMLElement>
```

Added in v8.1.0

## HTMLStyleElementMeta (type alias)

**Signature**

```ts
export type HTMLStyleElementMeta = MetaHTMLElement<"style", HTMLStyleElement>
```

Added in v8.1.0

## HTMLSubElementMeta (type alias)

**Signature**

```ts
export type HTMLSubElementMeta = MetaHTMLElement<"sub", HTMLElement>
```

Added in v8.1.0

## HTMLSummaryElementMeta (type alias)

**Signature**

```ts
export type HTMLSummaryElementMeta = MetaHTMLElement<"summary", HTMLElement>
```

Added in v8.1.0

## HTMLSupElementMeta (type alias)

**Signature**

```ts
export type HTMLSupElementMeta = MetaHTMLElement<"sup", HTMLElement>
```

Added in v8.1.0

## HTMLTableCaptionElementMeta (type alias)

**Signature**

```ts
export type HTMLTableCaptionElementMeta = MetaHTMLElement<
  "caption",
  HTMLTableCaptionElement
>
```

Added in v8.1.0

## HTMLTableColElementMeta (type alias)

**Signature**

```ts
export type HTMLTableColElementMeta = MetaHTMLElement<
  "colgroup",
  HTMLTableColElement
>
```

Added in v8.1.0

## HTMLTableElementMeta (type alias)

**Signature**

```ts
export type HTMLTableElementMeta = MetaHTMLElement<"table", HTMLTableElement>
```

Added in v8.1.0

## HTMLTbodyElementMeta (type alias)

**Signature**

```ts
export type HTMLTbodyElementMeta = MetaHTMLElement<
  "tbody",
  HTMLTableSectionElement
>
```

Added in v8.1.0

## HTMLTdElementMeta (type alias)

**Signature**

```ts
export type HTMLTdElementMeta = MetaHTMLElement<"td", HTMLTableDataCellElement>
```

Added in v8.1.0

## HTMLTemplateElementMeta (type alias)

**Signature**

```ts
export type HTMLTemplateElementMeta = MetaHTMLElement<
  "template",
  HTMLTemplateElement
>
```

Added in v8.1.0

## HTMLTextareaElementMeta (type alias)

**Signature**

```ts
export type HTMLTextareaElementMeta = MetaHTMLElement<
  "textarea",
  HTMLTextAreaElement
>
```

Added in v8.1.0

## HTMLTfootElementMeta (type alias)

**Signature**

```ts
export type HTMLTfootElementMeta = MetaHTMLElement<
  "tfoot",
  HTMLTableSectionElement
>
```

Added in v8.1.0

## HTMLThElementMeta (type alias)

**Signature**

```ts
export type HTMLThElementMeta = MetaHTMLElement<
  "th",
  HTMLTableHeaderCellElement
>
```

Added in v8.1.0

## HTMLTheadElementMeta (type alias)

**Signature**

```ts
export type HTMLTheadElementMeta = MetaHTMLElement<
  "thead",
  HTMLTableSectionElement
>
```

Added in v8.1.0

## HTMLTimeElementMeta (type alias)

**Signature**

```ts
export type HTMLTimeElementMeta = MetaHTMLElement<"time", HTMLTimeElement>
```

Added in v8.1.0

## HTMLTitleElementMeta (type alias)

**Signature**

```ts
export type HTMLTitleElementMeta = MetaHTMLElement<"title", HTMLTitleElement>
```

Added in v8.1.0

## HTMLTrElementMeta (type alias)

**Signature**

```ts
export type HTMLTrElementMeta = MetaHTMLElement<"tr", HTMLTableRowElement>
```

Added in v8.1.0

## HTMLTrackElementMeta (type alias)

**Signature**

```ts
export type HTMLTrackElementMeta = MetaHTMLElement<"track", HTMLTrackElement>
```

Added in v8.1.0

## HTMLUElementMeta (type alias)

**Signature**

```ts
export type HTMLUElementMeta = MetaHTMLElement<"u", HTMLElement>
```

Added in v8.1.0

## HTMLUListElementMeta (type alias)

**Signature**

```ts
export type HTMLUListElementMeta = MetaHTMLElement<"ul", HTMLUListElement>
```

Added in v8.1.0

## HTMLVarElementMeta (type alias)

**Signature**

```ts
export type HTMLVarElementMeta = MetaHTMLElement<"var", HTMLElement>
```

Added in v8.1.0

## HTMLVideoElementMeta (type alias)

**Signature**

```ts
export type HTMLVideoElementMeta = MetaHTMLElement<
  "video",
  HTMLVideoElement,
  HTMLMediaElementEventMap
>
```

Added in v8.1.0

## HTMLWbrElementMeta (type alias)

**Signature**

```ts
export type HTMLWbrElementMeta = MetaHTMLElement<"wbr", HTMLElement>
```

Added in v8.1.0

## MatchHTMLElementElement (type alias)

**Signature**

```ts
export type MatchHTMLElementElement<
  E extends HTMLElement
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MatchHTMLElementEventMap (type alias)

**Signature**

```ts
export type MatchHTMLElementEventMap<
  A extends HTMLElementEventMap
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MatchHTMLElementTagName (type alias)

**Signature**

```ts
export type MatchHTMLElementTagName<
  R extends string
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never
```

Added in v8.1.0

## MetaHTMLElement (type alias)

**Signature**

```ts
export type MetaHTMLElement<
  R extends string,
  E extends Element,
  A extends ElementEventMap = HTMLElementEventMap
> = MetaElement<R, E, A>
```

Added in v8.1.0
