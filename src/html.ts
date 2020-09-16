import { CreateElementMeta } from "./maps";

export type CreateHTMLElementMeta<
  R extends string,
  E extends Element,
  A extends ElementEventMap = HTMLElementEventMap
> = CreateElementMeta<R, E, A>;

export type HTMLAnchorElementMeta = CreateHTMLElementMeta<
  "a",
  HTMLAnchorElement
>;
export type HTMLAbbrElementMeta = CreateHTMLElementMeta<"abbr", HTMLElement>;
export type HTMLAddressElementMeta = CreateHTMLElementMeta<
  "address",
  HTMLElement
>;
export type HTMLAppletElementMeta = CreateHTMLElementMeta<
  "applet",
  HTMLAppletElement
>;
export type HTMLAreaElementMeta = CreateHTMLElementMeta<
  "area",
  HTMLAreaElement
>;
export type HTMLArticleElementMeta = CreateHTMLElementMeta<
  "article",
  HTMLElement
>;
export type HTMLAsideElementMeta = CreateHTMLElementMeta<"aside", HTMLElement>;
export type HTMLAudioElementMeta = CreateHTMLElementMeta<
  "audio",
  HTMLAudioElement,
  HTMLMediaElementEventMap
>;
export type HTMLBElementMeta = CreateHTMLElementMeta<"b", HTMLElement>;
export type HTMLBaseElementMeta = CreateHTMLElementMeta<
  "base",
  HTMLBaseElement
>;
export type HTMLBaseFontElementMeta = CreateHTMLElementMeta<
  "basefont",
  HTMLBaseFontElement
>;
export type HTMLBdiElementMeta = CreateHTMLElementMeta<"bdi", HTMLElement>;
export type HTMLBdoElementMeta = CreateHTMLElementMeta<"bdo", HTMLElement>;
export type HTMLQuoteElementMeta = CreateHTMLElementMeta<
  "blockquote",
  HTMLQuoteElement
>;
export type HTMLBodyElementMeta = CreateHTMLElementMeta<
  "body",
  HTMLBodyElement,
  HTMLBodyElementEventMap
>;
export type HTMLBRElementMeta = CreateHTMLElementMeta<"br", HTMLBRElement>;
export type HTMLButtonElementMeta = CreateHTMLElementMeta<
  "button",
  HTMLButtonElement
>;
export type HTMLCanvasElementMeta = CreateHTMLElementMeta<
  "canvas",
  HTMLCanvasElement
>;
export type HTMLTableCaptionElementMeta = CreateHTMLElementMeta<
  "caption",
  HTMLTableCaptionElement
>;
export type HTMLCiteElementMeta = CreateHTMLElementMeta<"cite", HTMLElement>;
export type HTMLCodeElementMeta = CreateHTMLElementMeta<"code", HTMLElement>;
export type HTMLColElementMeta = CreateHTMLElementMeta<
  "col",
  HTMLTableColElement
>;
export type HTMLTableColElementMeta = CreateHTMLElementMeta<
  "colgroup",
  HTMLTableColElement
>;
export type HTMLDataElementMeta = CreateHTMLElementMeta<
  "data",
  HTMLDataElement
>;
export type HTMLDataListElementMeta = CreateHTMLElementMeta<
  "datalist",
  HTMLDataListElement
>;
export type HTMLDDElementMeta = CreateHTMLElementMeta<"dd", HTMLElement>;
export type HTMLDelElementMeta = CreateHTMLElementMeta<"del", HTMLModElement>;
export type HTMLDetailsElementMeta = CreateHTMLElementMeta<
  "details",
  HTMLDetailsElement
>;
export type HTMLDFNElementMeta = CreateHTMLElementMeta<"dfn", HTMLElement>;
export type HTMLDialogElementMeta = CreateHTMLElementMeta<
  "dialog",
  HTMLDialogElement
>;
export type HTMLDirectoryElementMeta = CreateHTMLElementMeta<
  "dir",
  HTMLDirectoryElement
>;
export type HTMLDivElementMeta = CreateHTMLElementMeta<"div", HTMLDivElement>;
export type HTMLDListElementMeta = CreateHTMLElementMeta<
  "dl",
  HTMLDListElement
>;
export type HTMLDtElementMeta = CreateHTMLElementMeta<"dt", HTMLElement>;
export type HTMLEmElementMeta = CreateHTMLElementMeta<"em", HTMLElement>;
export type HTMLEmbedElementMeta = CreateHTMLElementMeta<
  "embed",
  HTMLEmbedElement
>;
export type HTMLFieldSetElementMeta = CreateHTMLElementMeta<
  "fieldset",
  HTMLFieldSetElement
>;
export type HTMLFigcaptionElementMeta = CreateHTMLElementMeta<
  "figcaption",
  HTMLElement
>;
export type HTMLFigureElementMeta = CreateHTMLElementMeta<
  "figure",
  HTMLElement
>;
export type HTMLFontElementMeta = CreateHTMLElementMeta<
  "font",
  HTMLFontElement
>;
export type HTMLFooterElementMeta = CreateHTMLElementMeta<
  "footer",
  HTMLElement
>;
export type HTMLFormElementMeta = CreateHTMLElementMeta<
  "form",
  HTMLFormElement,
  HTMLFrameSetElementEventMap
>;
export type HTMLFrameElementMeta = CreateHTMLElementMeta<
  "frame",
  HTMLFrameElement
>;
export type HTMLFrameSetElementMeta = CreateHTMLElementMeta<
  "frameset",
  HTMLFrameSetElement
>;
export type HTMLHeading1ElementMeta = CreateHTMLElementMeta<
  "h1",
  HTMLHeadingElement
>;
export type HTMLHeading2ElementMeta = CreateHTMLElementMeta<
  "h2",
  HTMLHeadingElement
>;
export type HTMLHeading3ElementMeta = CreateHTMLElementMeta<
  "h3",
  HTMLHeadingElement
>;
export type HTMLHeading4ElementMeta = CreateHTMLElementMeta<
  "h4",
  HTMLHeadingElement
>;
export type HTMLHeading5ElementMeta = CreateHTMLElementMeta<
  "h5",
  HTMLHeadingElement
>;
export type HTMLHeading6ElementMeta = CreateHTMLElementMeta<
  "h6",
  HTMLHeadingElement
>;
export type HTMLHeadElementMeta = CreateHTMLElementMeta<
  "head",
  HTMLHeadElement
>;
export type HTMLHeaderElementMeta = CreateHTMLElementMeta<
  "header",
  HTMLElement
>;
export type HTMLHGroupElementMeta = CreateHTMLElementMeta<
  "hgroup",
  HTMLElement
>;
export type HTMLHRElementMeta = CreateHTMLElementMeta<"hr", HTMLHRElement>;
export type HTMLHtmlElementMeta = CreateHTMLElementMeta<
  "html",
  HTMLHtmlElement
>;
export type HTMLIElementMeta = CreateHTMLElementMeta<"i", HTMLElement>;
export type HTMLIFrameElementMeta = CreateHTMLElementMeta<
  "iframe",
  HTMLIFrameElement
>;
export type HTMLImageElementMeta = CreateHTMLElementMeta<
  "img",
  HTMLImageElement
>;
export type HTMLInputElementMeta = CreateHTMLElementMeta<
  "input",
  HTMLInputElement
>;
export type HTMLInsElementMeta = CreateHTMLElementMeta<"ins", HTMLModElement>;
export type HTMLKBDElementMeta = CreateHTMLElementMeta<"kbd", HTMLElement>;
export type HTMLLabelElementMeta = CreateHTMLElementMeta<
  "label",
  HTMLLabelElement
>;
export type HTMLLegendElementMeta = CreateHTMLElementMeta<
  "legend",
  HTMLLegendElement
>;
export type HTMLLIElementMeta = CreateHTMLElementMeta<"li", HTMLLIElement>;
export type HTMLLinkElementMeta = CreateHTMLElementMeta<
  "link",
  HTMLLinkElement
>;
export type HTMLMainElementMeta = CreateHTMLElementMeta<"main", HTMLElement>;
export type HTMLMapElementMeta = CreateHTMLElementMeta<"map", HTMLMapElement>;
export type HTMLMarkElementMeta = CreateHTMLElementMeta<"mark", HTMLElement>;
export type HTMLMarqueeElementMeta = CreateHTMLElementMeta<
  "marquee",
  HTMLMarqueeElement,
  HTMLMarqueeElementEventMap
>;
export type HTMLMenuElementMeta = CreateHTMLElementMeta<
  "menu",
  HTMLMenuElement
>;
export type HTMLMetaElementMeta = CreateHTMLElementMeta<
  "meta",
  HTMLMetaElement
>;
export type HTMLMeterElementMeta = CreateHTMLElementMeta<
  "meter",
  HTMLMeterElement
>;
export type HTMLNavElementMeta = CreateHTMLElementMeta<"nav", HTMLElement>;
export type HTMLNoscriptElementMeta = CreateHTMLElementMeta<
  "noscript",
  HTMLElement
>;
export type HTMLObjectElementMeta = CreateHTMLElementMeta<
  "object",
  HTMLObjectElement
>;
export type HTMLOListElementMeta = CreateHTMLElementMeta<
  "ol",
  HTMLOListElement
>;
export type HTMLOptgroupElementMeta = CreateHTMLElementMeta<
  "optgroup",
  HTMLOptGroupElement
>;
export type HTMLOptionElementMeta = CreateHTMLElementMeta<
  "option",
  HTMLOptionElement
>;
export type HTMLOutputElementMeta = CreateHTMLElementMeta<
  "output",
  HTMLOutputElement
>;
export type HTMLPElementMeta = CreateHTMLElementMeta<"p", HTMLParagraphElement>;
export type HTMLParamElementMeta = CreateHTMLElementMeta<
  "param",
  HTMLParamElement
>;
export type HTMLPictureElementMeta = CreateHTMLElementMeta<
  "picture",
  HTMLPictureElement
>;
export type HTMLPreElementMeta = CreateHTMLElementMeta<"pre", HTMLPreElement>;
export type HTMLProgressElementMeta = CreateHTMLElementMeta<
  "progress",
  HTMLProgressElement
>;
export type HTMLQElementMeta = CreateHTMLElementMeta<"q", HTMLQuoteElement>;
export type HTMLRpElementMeta = CreateHTMLElementMeta<"rp", HTMLElement>;
export type HTMLRtElementMeta = CreateHTMLElementMeta<"rt", HTMLElement>;
export type HTMLRubyElementMeta = CreateHTMLElementMeta<"ruby", HTMLElement>;
export type HTMLSElementMeta = CreateHTMLElementMeta<"s", HTMLElement>;
export type HTMLSampElementMeta = CreateHTMLElementMeta<"samp", HTMLElement>;
export type HTMLScriptElementMeta = CreateHTMLElementMeta<
  "script",
  HTMLScriptElement
>;
export type HTMLSectionElementMeta = CreateHTMLElementMeta<
  "section",
  HTMLElement
>;
export type HTMLSelectElementMeta = CreateHTMLElementMeta<
  "select",
  HTMLSelectElement
>;
export type HTMLSlotElementMeta = CreateHTMLElementMeta<
  "slot",
  HTMLSlotElement
>;
export type HTMLSmallElementMeta = CreateHTMLElementMeta<"small", HTMLElement>;
export type HTMLSourceElementMeta = CreateHTMLElementMeta<
  "source",
  HTMLSourceElement
>;
export type HTMLSpanElementMeta = CreateHTMLElementMeta<
  "span",
  HTMLSpanElement
>;
export type HTMLStrongElementMeta = CreateHTMLElementMeta<
  "strong",
  HTMLElement
>;
export type HTMLStyleElementMeta = CreateHTMLElementMeta<
  "style",
  HTMLStyleElement
>;
export type HTMLSubElementMeta = CreateHTMLElementMeta<"sub", HTMLElement>;
export type HTMLSummaryElementMeta = CreateHTMLElementMeta<
  "summary",
  HTMLElement
>;
export type HTMLSupElementMeta = CreateHTMLElementMeta<"sup", HTMLElement>;
export type HTMLTableElementMeta = CreateHTMLElementMeta<
  "table",
  HTMLTableElement
>;
export type HTMLTbodyElementMeta = CreateHTMLElementMeta<
  "tbody",
  HTMLTableSectionElement
>;
export type HTMLTdElementMeta = CreateHTMLElementMeta<
  "td",
  HTMLTableDataCellElement
>;
export type HTMLTemplateElementMeta = CreateHTMLElementMeta<
  "template",
  HTMLTemplateElement
>;
export type HTMLTextareaElementMeta = CreateHTMLElementMeta<
  "textarea",
  HTMLTextAreaElement
>;
export type HTMLTfootElementMeta = CreateHTMLElementMeta<
  "tfoot",
  HTMLTableSectionElement
>;
export type HTMLThElementMeta = CreateHTMLElementMeta<
  "th",
  HTMLTableHeaderCellElement
>;
export type HTMLTheadElementMeta = CreateHTMLElementMeta<
  "thead",
  HTMLTableSectionElement
>;
export type HTMLTimeElementMeta = CreateHTMLElementMeta<
  "time",
  HTMLTimeElement
>;
export type HTMLTitleElementMeta = CreateHTMLElementMeta<
  "title",
  HTMLTitleElement
>;
export type HTMLTrElementMeta = CreateHTMLElementMeta<
  "tr",
  HTMLTableRowElement
>;
export type HTMLTrackElementMeta = CreateHTMLElementMeta<
  "track",
  HTMLTrackElement
>;
export type HTMLUElementMeta = CreateHTMLElementMeta<"u", HTMLElement>;
export type HTMLUListElementMeta = CreateHTMLElementMeta<
  "ul",
  HTMLUListElement
>;
export type HTMLVarElementMeta = CreateHTMLElementMeta<"var", HTMLElement>;
export type HTMLVideoElementMeta = CreateHTMLElementMeta<
  "video",
  HTMLVideoElement,
  HTMLMediaElementEventMap
>;
export type HTMLWbrElementMeta = CreateHTMLElementMeta<"wbr", HTMLElement>;

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
  | HTMLWbrElementMeta;
