export type RecordHTMLElementEventMap = Record<
  | "a"
  | "abbr"
  | "address"
  | "applet"
  | "area"
  | "article"
  | "aside"
  | "b"
  | "base"
  | "basefont"
  | "bdi"
  | "bdo"
  | "blockquote"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "cite"
  | "code"
  | "col"
  | "colgroup"
  | "data"
  | "datalist"
  | "dd"
  | "del"
  | "details"
  | "dfn"
  | "dialog"
  | "dir"
  | "div"
  | "dl"
  | "dt"
  | "em"
  | "embed"
  | "fieldset"
  | "figcaption"
  | "figure"
  | "font"
  | "footer"
  | "form"
  | "frame"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "head"
  | "header"
  | "hgroup"
  | "hr"
  | "html"
  | "i"
  | "iframe"
  | "img"
  | "input"
  | "ins"
  | "kbd"
  | "label"
  | "legend"
  | "li"
  | "link"
  | "main"
  | "map"
  | "mark"
  | "menu"
  | "meta"
  | "meter"
  | "nav"
  | "noscript"
  | "object"
  | "ol"
  | "optgroup"
  | "option"
  | "output"
  | "p"
  | "param"
  | "picture"
  | "pre"
  | "progress"
  | "q"
  | "rp"
  | "rt"
  | "ruby"
  | "s"
  | "samp"
  | "script"
  | "section"
  | "select"
  | "slot"
  | "small"
  | "source"
  | "span"
  | "strong"
  | "style"
  | "sub"
  | "summary"
  | "sup"
  | "table"
  | "tbody"
  | "td"
  | "template"
  | "textarea"
  | "tfoot"
  | "th"
  | "thead"
  | "time"
  | "title"
  | "tr"
  | "track"
  | "u"
  | "ul"
  | "var"
  | "wbr",
  HTMLElementEventMap
>;

export type RecordHTMLMediaElementEventMap = Record<
  "audio",
  HTMLMediaElementEventMap
>;

export type RecordHTMLBodyElementEventMap = Record<
  "body",
  HTMLBodyElementEventMap
>;

export type RecordHTMLFrameSetElementEventMap = Record<
  "frameset",
  HTMLFrameSetElementEventMap
>;
export type RecordHTMLMarqueeElementEventMap = Record<
  "marquee",
  HTMLMarqueeElementEventMap
>;
export type RecordHTMLVideoElementEventMap = Record<
  "video",
  HTMLVideoElementEventMap
>;

export type HTMLElementEventMapAll = RecordHTMLElementEventMap &
  RecordHTMLMediaElementEventMap &
  RecordHTMLBodyElementEventMap &
  RecordHTMLFrameSetElementEventMap &
  RecordHTMLMarqueeElementEventMap &
  RecordHTMLVideoElementEventMap;
