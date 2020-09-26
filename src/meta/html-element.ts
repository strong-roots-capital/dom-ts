import { CreateMetaElement } from "./index"

export type CreateMetaHTMLElement<
  R extends string,
  E extends Element,
  A extends ElementEventMap = HTMLElementEventMap
> = CreateMetaElement<R, E, A>

export type HTMLAnchorElementMeta = CreateMetaHTMLElement<"a", HTMLAnchorElement>
export type HTMLAbbrElementMeta = CreateMetaHTMLElement<"abbr", HTMLElement>
export type HTMLAddressElementMeta = CreateMetaHTMLElement<"address", HTMLElement>
export type HTMLAppletElementMeta = CreateMetaHTMLElement<"applet", HTMLAppletElement>
export type HTMLAreaElementMeta = CreateMetaHTMLElement<"area", HTMLAreaElement>
export type HTMLArticleElementMeta = CreateMetaHTMLElement<"article", HTMLElement>
export type HTMLAsideElementMeta = CreateMetaHTMLElement<"aside", HTMLElement>
export type HTMLAudioElementMeta = CreateMetaHTMLElement<
  "audio",
  HTMLAudioElement,
  HTMLMediaElementEventMap
>
export type HTMLBElementMeta = CreateMetaHTMLElement<"b", HTMLElement>
export type HTMLBaseElementMeta = CreateMetaHTMLElement<"base", HTMLBaseElement>
export type HTMLBaseFontElementMeta = CreateMetaHTMLElement<"basefont", HTMLBaseFontElement>
export type HTMLBdiElementMeta = CreateMetaHTMLElement<"bdi", HTMLElement>
export type HTMLBdoElementMeta = CreateMetaHTMLElement<"bdo", HTMLElement>
export type HTMLQuoteElementMeta = CreateMetaHTMLElement<"blockquote", HTMLQuoteElement>
export type HTMLBodyElementMeta = CreateMetaHTMLElement<
  "body",
  HTMLBodyElement,
  HTMLBodyElementEventMap
>
export type HTMLBRElementMeta = CreateMetaHTMLElement<"br", HTMLBRElement>
export type HTMLButtonElementMeta = CreateMetaHTMLElement<"button", HTMLButtonElement>
export type HTMLCanvasElementMeta = CreateMetaHTMLElement<"canvas", HTMLCanvasElement>
export type HTMLTableCaptionElementMeta = CreateMetaHTMLElement<"caption", HTMLTableCaptionElement>
export type HTMLCiteElementMeta = CreateMetaHTMLElement<"cite", HTMLElement>
export type HTMLCodeElementMeta = CreateMetaHTMLElement<"code", HTMLElement>
export type HTMLColElementMeta = CreateMetaHTMLElement<"col", HTMLTableColElement>
export type HTMLTableColElementMeta = CreateMetaHTMLElement<"colgroup", HTMLTableColElement>
export type HTMLDataElementMeta = CreateMetaHTMLElement<"data", HTMLDataElement>
export type HTMLDataListElementMeta = CreateMetaHTMLElement<"datalist", HTMLDataListElement>
export type HTMLDDElementMeta = CreateMetaHTMLElement<"dd", HTMLElement>
export type HTMLDelElementMeta = CreateMetaHTMLElement<"del", HTMLModElement>
export type HTMLDetailsElementMeta = CreateMetaHTMLElement<"details", HTMLDetailsElement>
export type HTMLDFNElementMeta = CreateMetaHTMLElement<"dfn", HTMLElement>
export type HTMLDialogElementMeta = CreateMetaHTMLElement<"dialog", HTMLDialogElement>
export type HTMLDirectoryElementMeta = CreateMetaHTMLElement<"dir", HTMLDirectoryElement>
export type HTMLDivElementMeta = CreateMetaHTMLElement<"div", HTMLDivElement>
export type HTMLDListElementMeta = CreateMetaHTMLElement<"dl", HTMLDListElement>
export type HTMLDtElementMeta = CreateMetaHTMLElement<"dt", HTMLElement>
export type HTMLEmElementMeta = CreateMetaHTMLElement<"em", HTMLElement>
export type HTMLEmbedElementMeta = CreateMetaHTMLElement<"embed", HTMLEmbedElement>
export type HTMLFieldSetElementMeta = CreateMetaHTMLElement<"fieldset", HTMLFieldSetElement>
export type HTMLFigcaptionElementMeta = CreateMetaHTMLElement<"figcaption", HTMLElement>
export type HTMLFigureElementMeta = CreateMetaHTMLElement<"figure", HTMLElement>
export type HTMLFontElementMeta = CreateMetaHTMLElement<"font", HTMLFontElement>
export type HTMLFooterElementMeta = CreateMetaHTMLElement<"footer", HTMLElement>
export type HTMLFormElementMeta = CreateMetaHTMLElement<
  "form",
  HTMLFormElement,
  HTMLFrameSetElementEventMap
>
export type HTMLFrameElementMeta = CreateMetaHTMLElement<"frame", HTMLFrameElement>
export type HTMLFrameSetElementMeta = CreateMetaHTMLElement<"frameset", HTMLFrameSetElement>
export type HTMLHeading1ElementMeta = CreateMetaHTMLElement<"h1", HTMLHeadingElement>
export type HTMLHeading2ElementMeta = CreateMetaHTMLElement<"h2", HTMLHeadingElement>
export type HTMLHeading3ElementMeta = CreateMetaHTMLElement<"h3", HTMLHeadingElement>
export type HTMLHeading4ElementMeta = CreateMetaHTMLElement<"h4", HTMLHeadingElement>
export type HTMLHeading5ElementMeta = CreateMetaHTMLElement<"h5", HTMLHeadingElement>
export type HTMLHeading6ElementMeta = CreateMetaHTMLElement<"h6", HTMLHeadingElement>
export type HTMLHeadElementMeta = CreateMetaHTMLElement<"head", HTMLHeadElement>
export type HTMLHeaderElementMeta = CreateMetaHTMLElement<"header", HTMLElement>
export type HTMLHGroupElementMeta = CreateMetaHTMLElement<"hgroup", HTMLElement>
export type HTMLHRElementMeta = CreateMetaHTMLElement<"hr", HTMLHRElement>
export type HTMLHtmlElementMeta = CreateMetaHTMLElement<"html", HTMLHtmlElement>
export type HTMLIElementMeta = CreateMetaHTMLElement<"i", HTMLElement>
export type HTMLIFrameElementMeta = CreateMetaHTMLElement<"iframe", HTMLIFrameElement>
export type HTMLImageElementMeta = CreateMetaHTMLElement<"img", HTMLImageElement>
export type HTMLInputElementMeta = CreateMetaHTMLElement<"input", HTMLInputElement>
export type HTMLInsElementMeta = CreateMetaHTMLElement<"ins", HTMLModElement>
export type HTMLKBDElementMeta = CreateMetaHTMLElement<"kbd", HTMLElement>
export type HTMLLabelElementMeta = CreateMetaHTMLElement<"label", HTMLLabelElement>
export type HTMLLegendElementMeta = CreateMetaHTMLElement<"legend", HTMLLegendElement>
export type HTMLLIElementMeta = CreateMetaHTMLElement<"li", HTMLLIElement>
export type HTMLLinkElementMeta = CreateMetaHTMLElement<"link", HTMLLinkElement>
export type HTMLMainElementMeta = CreateMetaHTMLElement<"main", HTMLElement>
export type HTMLMapElementMeta = CreateMetaHTMLElement<"map", HTMLMapElement>
export type HTMLMarkElementMeta = CreateMetaHTMLElement<"mark", HTMLElement>
export type HTMLMarqueeElementMeta = CreateMetaHTMLElement<
  "marquee",
  HTMLMarqueeElement,
  HTMLMarqueeElementEventMap
>
export type HTMLMenuElementMeta = CreateMetaHTMLElement<"menu", HTMLMenuElement>
export type HTMLMetaElementMeta = CreateMetaHTMLElement<"meta", HTMLMetaElement>
export type HTMLMeterElementMeta = CreateMetaHTMLElement<"meter", HTMLMeterElement>
export type HTMLNavElementMeta = CreateMetaHTMLElement<"nav", HTMLElement>
export type HTMLNoscriptElementMeta = CreateMetaHTMLElement<"noscript", HTMLElement>
export type HTMLObjectElementMeta = CreateMetaHTMLElement<"object", HTMLObjectElement>
export type HTMLOListElementMeta = CreateMetaHTMLElement<"ol", HTMLOListElement>
export type HTMLOptgroupElementMeta = CreateMetaHTMLElement<"optgroup", HTMLOptGroupElement>
export type HTMLOptionElementMeta = CreateMetaHTMLElement<"option", HTMLOptionElement>
export type HTMLOutputElementMeta = CreateMetaHTMLElement<"output", HTMLOutputElement>
export type HTMLPElementMeta = CreateMetaHTMLElement<"p", HTMLParagraphElement>
export type HTMLParamElementMeta = CreateMetaHTMLElement<"param", HTMLParamElement>
export type HTMLPictureElementMeta = CreateMetaHTMLElement<"picture", HTMLPictureElement>
export type HTMLPreElementMeta = CreateMetaHTMLElement<"pre", HTMLPreElement>
export type HTMLProgressElementMeta = CreateMetaHTMLElement<"progress", HTMLProgressElement>
export type HTMLQElementMeta = CreateMetaHTMLElement<"q", HTMLQuoteElement>
export type HTMLRpElementMeta = CreateMetaHTMLElement<"rp", HTMLElement>
export type HTMLRtElementMeta = CreateMetaHTMLElement<"rt", HTMLElement>
export type HTMLRubyElementMeta = CreateMetaHTMLElement<"ruby", HTMLElement>
export type HTMLSElementMeta = CreateMetaHTMLElement<"s", HTMLElement>
export type HTMLSampElementMeta = CreateMetaHTMLElement<"samp", HTMLElement>
export type HTMLScriptElementMeta = CreateMetaHTMLElement<"script", HTMLScriptElement>
export type HTMLSectionElementMeta = CreateMetaHTMLElement<"section", HTMLElement>
export type HTMLSelectElementMeta = CreateMetaHTMLElement<"select", HTMLSelectElement>
export type HTMLSlotElementMeta = CreateMetaHTMLElement<"slot", HTMLSlotElement>
export type HTMLSmallElementMeta = CreateMetaHTMLElement<"small", HTMLElement>
export type HTMLSourceElementMeta = CreateMetaHTMLElement<"source", HTMLSourceElement>
export type HTMLSpanElementMeta = CreateMetaHTMLElement<"span", HTMLSpanElement>
export type HTMLStrongElementMeta = CreateMetaHTMLElement<"strong", HTMLElement>
export type HTMLStyleElementMeta = CreateMetaHTMLElement<"style", HTMLStyleElement>
export type HTMLSubElementMeta = CreateMetaHTMLElement<"sub", HTMLElement>
export type HTMLSummaryElementMeta = CreateMetaHTMLElement<"summary", HTMLElement>
export type HTMLSupElementMeta = CreateMetaHTMLElement<"sup", HTMLElement>
export type HTMLTableElementMeta = CreateMetaHTMLElement<"table", HTMLTableElement>
export type HTMLTbodyElementMeta = CreateMetaHTMLElement<"tbody", HTMLTableSectionElement>
export type HTMLTdElementMeta = CreateMetaHTMLElement<"td", HTMLTableDataCellElement>
export type HTMLTemplateElementMeta = CreateMetaHTMLElement<"template", HTMLTemplateElement>
export type HTMLTextareaElementMeta = CreateMetaHTMLElement<"textarea", HTMLTextAreaElement>
export type HTMLTfootElementMeta = CreateMetaHTMLElement<"tfoot", HTMLTableSectionElement>
export type HTMLThElementMeta = CreateMetaHTMLElement<"th", HTMLTableHeaderCellElement>
export type HTMLTheadElementMeta = CreateMetaHTMLElement<"thead", HTMLTableSectionElement>
export type HTMLTimeElementMeta = CreateMetaHTMLElement<"time", HTMLTimeElement>
export type HTMLTitleElementMeta = CreateMetaHTMLElement<"title", HTMLTitleElement>
export type HTMLTrElementMeta = CreateMetaHTMLElement<"tr", HTMLTableRowElement>
export type HTMLTrackElementMeta = CreateMetaHTMLElement<"track", HTMLTrackElement>
export type HTMLUElementMeta = CreateMetaHTMLElement<"u", HTMLElement>
export type HTMLUListElementMeta = CreateMetaHTMLElement<"ul", HTMLUListElement>
export type HTMLVarElementMeta = CreateMetaHTMLElement<"var", HTMLElement>
export type HTMLVideoElementMeta = CreateMetaHTMLElement<
  "video",
  HTMLVideoElement,
  HTMLMediaElementEventMap
>
export type HTMLWbrElementMeta = CreateMetaHTMLElement<"wbr", HTMLElement>

export type MetaAllHTMLElement =
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
