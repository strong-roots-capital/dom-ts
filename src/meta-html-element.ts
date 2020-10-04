import { MetaElement } from "./meta-element"

// MATCHERS

export type MatchHTMLElementTagName<R extends string> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<R, infer E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MatchHTMLElementElement<E extends HTMLElement> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<infer R, E, infer A>
    ? MetaElement<R, E, A>
    : never
  : never

export type MatchHTMLElementEventMap<
  A extends HTMLElementEventMap
> = AllHTMLElementMeta extends infer T
  ? T extends MetaHTMLElement<infer R, infer E, A>
    ? MetaElement<R, E, A>
    : never
  : never

// CONSTRUCTORS

export type MetaHTMLElement<
  R extends string,
  E extends Element,
  A extends ElementEventMap = HTMLElementEventMap
> = MetaElement<R, E, A>

// VALUES

export type HTMLAnchorElementMeta = MetaHTMLElement<"a", HTMLAnchorElement>
export type HTMLAbbrElementMeta = MetaHTMLElement<"abbr", HTMLElement>
export type HTMLAddressElementMeta = MetaHTMLElement<"address", HTMLElement>
export type HTMLAppletElementMeta = MetaHTMLElement<"applet", HTMLAppletElement>
export type HTMLAreaElementMeta = MetaHTMLElement<"area", HTMLAreaElement>
export type HTMLArticleElementMeta = MetaHTMLElement<"article", HTMLElement>
export type HTMLAsideElementMeta = MetaHTMLElement<"aside", HTMLElement>
export type HTMLAudioElementMeta = MetaHTMLElement<
  "audio",
  HTMLAudioElement,
  HTMLMediaElementEventMap
>
export type HTMLBElementMeta = MetaHTMLElement<"b", HTMLElement>
export type HTMLBaseElementMeta = MetaHTMLElement<"base", HTMLBaseElement>
export type HTMLBaseFontElementMeta = MetaHTMLElement<"basefont", HTMLBaseFontElement>
export type HTMLBdiElementMeta = MetaHTMLElement<"bdi", HTMLElement>
export type HTMLBdoElementMeta = MetaHTMLElement<"bdo", HTMLElement>
export type HTMLQuoteElementMeta = MetaHTMLElement<"blockquote", HTMLQuoteElement>
export type HTMLBodyElementMeta = MetaHTMLElement<"body", HTMLBodyElement, HTMLBodyElementEventMap>
export type HTMLBRElementMeta = MetaHTMLElement<"br", HTMLBRElement>
export type HTMLButtonElementMeta = MetaHTMLElement<"button", HTMLButtonElement>
export type HTMLCanvasElementMeta = MetaHTMLElement<"canvas", HTMLCanvasElement>
export type HTMLTableCaptionElementMeta = MetaHTMLElement<"caption", HTMLTableCaptionElement>
export type HTMLCiteElementMeta = MetaHTMLElement<"cite", HTMLElement>
export type HTMLCodeElementMeta = MetaHTMLElement<"code", HTMLElement>
export type HTMLColElementMeta = MetaHTMLElement<"col", HTMLTableColElement>
export type HTMLTableColElementMeta = MetaHTMLElement<"colgroup", HTMLTableColElement>
export type HTMLDataElementMeta = MetaHTMLElement<"data", HTMLDataElement>
export type HTMLDataListElementMeta = MetaHTMLElement<"datalist", HTMLDataListElement>
export type HTMLDDElementMeta = MetaHTMLElement<"dd", HTMLElement>
export type HTMLDelElementMeta = MetaHTMLElement<"del", HTMLModElement>
export type HTMLDetailsElementMeta = MetaHTMLElement<"details", HTMLDetailsElement>
export type HTMLDFNElementMeta = MetaHTMLElement<"dfn", HTMLElement>
export type HTMLDialogElementMeta = MetaHTMLElement<"dialog", HTMLDialogElement>
export type HTMLDirectoryElementMeta = MetaHTMLElement<"dir", HTMLDirectoryElement>
export type HTMLDivElementMeta = MetaHTMLElement<"div", HTMLDivElement>
export type HTMLDListElementMeta = MetaHTMLElement<"dl", HTMLDListElement>
export type HTMLDtElementMeta = MetaHTMLElement<"dt", HTMLElement>
export type HTMLEmElementMeta = MetaHTMLElement<"em", HTMLElement>
export type HTMLEmbedElementMeta = MetaHTMLElement<"embed", HTMLEmbedElement>
export type HTMLFieldSetElementMeta = MetaHTMLElement<"fieldset", HTMLFieldSetElement>
export type HTMLFigcaptionElementMeta = MetaHTMLElement<"figcaption", HTMLElement>
export type HTMLFigureElementMeta = MetaHTMLElement<"figure", HTMLElement>
export type HTMLFontElementMeta = MetaHTMLElement<"font", HTMLFontElement>
export type HTMLFooterElementMeta = MetaHTMLElement<"footer", HTMLElement>
export type HTMLFormElementMeta = MetaHTMLElement<
  "form",
  HTMLFormElement,
  HTMLFrameSetElementEventMap
>
export type HTMLFrameElementMeta = MetaHTMLElement<"frame", HTMLFrameElement>
export type HTMLFrameSetElementMeta = MetaHTMLElement<"frameset", HTMLFrameSetElement>
export type HTMLHeading1ElementMeta = MetaHTMLElement<"h1", HTMLHeadingElement>
export type HTMLHeading2ElementMeta = MetaHTMLElement<"h2", HTMLHeadingElement>
export type HTMLHeading3ElementMeta = MetaHTMLElement<"h3", HTMLHeadingElement>
export type HTMLHeading4ElementMeta = MetaHTMLElement<"h4", HTMLHeadingElement>
export type HTMLHeading5ElementMeta = MetaHTMLElement<"h5", HTMLHeadingElement>
export type HTMLHeading6ElementMeta = MetaHTMLElement<"h6", HTMLHeadingElement>
export type HTMLHeadElementMeta = MetaHTMLElement<"head", HTMLHeadElement>
export type HTMLHeaderElementMeta = MetaHTMLElement<"header", HTMLElement>
export type HTMLHGroupElementMeta = MetaHTMLElement<"hgroup", HTMLElement>
export type HTMLHRElementMeta = MetaHTMLElement<"hr", HTMLHRElement>
export type HTMLHtmlElementMeta = MetaHTMLElement<"html", HTMLHtmlElement>
export type HTMLIElementMeta = MetaHTMLElement<"i", HTMLElement>
export type HTMLIFrameElementMeta = MetaHTMLElement<"iframe", HTMLIFrameElement>
export type HTMLImageElementMeta = MetaHTMLElement<"img", HTMLImageElement>
export type HTMLInputElementMeta = MetaHTMLElement<"input", HTMLInputElement>
export type HTMLInsElementMeta = MetaHTMLElement<"ins", HTMLModElement>
export type HTMLKBDElementMeta = MetaHTMLElement<"kbd", HTMLElement>
export type HTMLLabelElementMeta = MetaHTMLElement<"label", HTMLLabelElement>
export type HTMLLegendElementMeta = MetaHTMLElement<"legend", HTMLLegendElement>
export type HTMLLIElementMeta = MetaHTMLElement<"li", HTMLLIElement>
export type HTMLLinkElementMeta = MetaHTMLElement<"link", HTMLLinkElement>
export type HTMLMainElementMeta = MetaHTMLElement<"main", HTMLElement>
export type HTMLMapElementMeta = MetaHTMLElement<"map", HTMLMapElement>
export type HTMLMarkElementMeta = MetaHTMLElement<"mark", HTMLElement>
export type HTMLMarqueeElementMeta = MetaHTMLElement<
  "marquee",
  HTMLMarqueeElement,
  HTMLMarqueeElementEventMap
>
export type HTMLMenuElementMeta = MetaHTMLElement<"menu", HTMLMenuElement>
export type HTMLMetaElementMeta = MetaHTMLElement<"meta", HTMLMetaElement>
export type HTMLMeterElementMeta = MetaHTMLElement<"meter", HTMLMeterElement>
export type HTMLNavElementMeta = MetaHTMLElement<"nav", HTMLElement>
export type HTMLNoscriptElementMeta = MetaHTMLElement<"noscript", HTMLElement>
export type HTMLObjectElementMeta = MetaHTMLElement<"object", HTMLObjectElement>
export type HTMLOListElementMeta = MetaHTMLElement<"ol", HTMLOListElement>
export type HTMLOptgroupElementMeta = MetaHTMLElement<"optgroup", HTMLOptGroupElement>
export type HTMLOptionElementMeta = MetaHTMLElement<"option", HTMLOptionElement>
export type HTMLOutputElementMeta = MetaHTMLElement<"output", HTMLOutputElement>
export type HTMLPElementMeta = MetaHTMLElement<"p", HTMLParagraphElement>
export type HTMLParamElementMeta = MetaHTMLElement<"param", HTMLParamElement>
export type HTMLPictureElementMeta = MetaHTMLElement<"picture", HTMLPictureElement>
export type HTMLPreElementMeta = MetaHTMLElement<"pre", HTMLPreElement>
export type HTMLProgressElementMeta = MetaHTMLElement<"progress", HTMLProgressElement>
export type HTMLQElementMeta = MetaHTMLElement<"q", HTMLQuoteElement>
export type HTMLRpElementMeta = MetaHTMLElement<"rp", HTMLElement>
export type HTMLRtElementMeta = MetaHTMLElement<"rt", HTMLElement>
export type HTMLRubyElementMeta = MetaHTMLElement<"ruby", HTMLElement>
export type HTMLSElementMeta = MetaHTMLElement<"s", HTMLElement>
export type HTMLSampElementMeta = MetaHTMLElement<"samp", HTMLElement>
export type HTMLScriptElementMeta = MetaHTMLElement<"script", HTMLScriptElement>
export type HTMLSectionElementMeta = MetaHTMLElement<"section", HTMLElement>
export type HTMLSelectElementMeta = MetaHTMLElement<"select", HTMLSelectElement>
export type HTMLSlotElementMeta = MetaHTMLElement<"slot", HTMLSlotElement>
export type HTMLSmallElementMeta = MetaHTMLElement<"small", HTMLElement>
export type HTMLSourceElementMeta = MetaHTMLElement<"source", HTMLSourceElement>
export type HTMLSpanElementMeta = MetaHTMLElement<"span", HTMLSpanElement>
export type HTMLStrongElementMeta = MetaHTMLElement<"strong", HTMLElement>
export type HTMLStyleElementMeta = MetaHTMLElement<"style", HTMLStyleElement>
export type HTMLSubElementMeta = MetaHTMLElement<"sub", HTMLElement>
export type HTMLSummaryElementMeta = MetaHTMLElement<"summary", HTMLElement>
export type HTMLSupElementMeta = MetaHTMLElement<"sup", HTMLElement>
export type HTMLTableElementMeta = MetaHTMLElement<"table", HTMLTableElement>
export type HTMLTbodyElementMeta = MetaHTMLElement<"tbody", HTMLTableSectionElement>
export type HTMLTdElementMeta = MetaHTMLElement<"td", HTMLTableDataCellElement>
export type HTMLTemplateElementMeta = MetaHTMLElement<"template", HTMLTemplateElement>
export type HTMLTextareaElementMeta = MetaHTMLElement<"textarea", HTMLTextAreaElement>
export type HTMLTfootElementMeta = MetaHTMLElement<"tfoot", HTMLTableSectionElement>
export type HTMLThElementMeta = MetaHTMLElement<"th", HTMLTableHeaderCellElement>
export type HTMLTheadElementMeta = MetaHTMLElement<"thead", HTMLTableSectionElement>
export type HTMLTimeElementMeta = MetaHTMLElement<"time", HTMLTimeElement>
export type HTMLTitleElementMeta = MetaHTMLElement<"title", HTMLTitleElement>
export type HTMLTrElementMeta = MetaHTMLElement<"tr", HTMLTableRowElement>
export type HTMLTrackElementMeta = MetaHTMLElement<"track", HTMLTrackElement>
export type HTMLUElementMeta = MetaHTMLElement<"u", HTMLElement>
export type HTMLUListElementMeta = MetaHTMLElement<"ul", HTMLUListElement>
export type HTMLVarElementMeta = MetaHTMLElement<"var", HTMLElement>
export type HTMLVideoElementMeta = MetaHTMLElement<
  "video",
  HTMLVideoElement,
  HTMLMediaElementEventMap
>
export type HTMLWbrElementMeta = MetaHTMLElement<"wbr", HTMLElement>

// UNIONIZED

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
