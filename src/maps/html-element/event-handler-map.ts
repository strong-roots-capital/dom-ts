export type RecordHTMLElementEventHandlersMap = {
  abort: "onabort";
  animationcancel: "onanimationcancel";
  animationend: "onanimationend";
  animationiteration: "onanimationiteration";
  animationstart: "onanimationstart";
  auxclick: "onauxclick";
  blur: "onblur";
  cancel: "oncancel";
  canplay: "oncanplay";
  canplaythrough: "oncanplaythrough";
  change: "onchange";
  click: "onclick";
  close: "onclose";
  contextmenu: "oncontextmenu";
  copy: "oncopy";
  cuechange: "oncuechange";
  cut: "oncut";
  fullscreenchange: "onfullscreenchange";
  fullscreenerror: "onfullscreenerror";
  paste: "onpaste";
  pointerlockchange: "onpointerlockchange";
  pointerlockerror: "onpointerlockerror";
  visibilitychange: "onvisibilitychange";
  dblclick: "ondblclick";
  drag: "ondrag";
  dragend: "ondragend";
  dragenter: "ondragenter";
  dragexit: "ondragexit";
  dragleave: "ondragleave";
  dragover: "ondragover";
  dragstart: "ondragstart";
  drop: "ondrop";
  afterprint: "onafterprint";
  beforeprint: "onbeforeprint";
  beforeunload: "onbeforeunload";
  compassneedscalibration: "oncompassneedscalibration";
  durationchange: "ondurationchange";
  emptied: "onemptied";
  ended: "onended";
  error: "onerror";
  focus: "onfocus";
  focusin: "onfocusin";
  focusout: "onfocusout";
  gotpointercapture: "ongotpointercapture";
  input: "oninput";
  invalid: "oninvalid";
  keydown: "onkeydown";
  keypress: "onkeypress";
  keyup: "onkeyup";
  load: "onload";
  loadeddata: "onloadeddata";
  loadedmetadata: "onloadedmetadata";
  loadstart: "onloadstart";
  lostpointercapture: "onlostpointercapture";
  mousedown: "onmousedown";
  mouseenter: "onmouseenter";
  mouseleave: "onmouseleave";
  mousemove: "onmousemove";
  mouseout: "onmouseout";
  mouseover: "onmouseover";
  mouseup: "onmouseup";
  hashchange: "onhashchange";
  pointercancel: "onpointercancel";
  pointerdown: "onpointerdown";
  pointerenter: "onpointerenter";
  pointerleave: "onpointerleave";
  pointermove: "onpointermove";
  pointerout: "onpointerout";
  pointerover: "onpointerover";
  pointerup: "onpointerup";
  ratechange: "onratechange";
  reset: "onreset";
  resize: "onresize";
  scroll: "onscroll";
  securitypolicyviolation: "onsecuritypolicyviolation";
  seeked: "onseeked";
  seeking: "onseeking";
  select: "onselect";
  selectionchange: "onselectionchange";
  selectstart: "onselectstart";
  stalled: "onstalled";
  submit: "onsubmit";
  suspend: "onsuspend";
  timeupdate: "ontimeupdate";
  toggle: "ontoggle";
  touchcancel: "ontouchcancel";
  touchend: "ontouchend";
  touchmove: "ontouchmove";
  touchstart: "ontouchstart";
  transitioncancel: "ontransitioncancel";
  transitionend: "ontransitionend";
  transitionrun: "ontransitionrun";
  transitionstart: "ontransitionstart";
  volumechange: "onvolumechange";
  waiting: "onwaiting";
  wheel: "onwheel";
  devicelight: "ondevicelight";
  devicemotion: "ondevicemotion";
  deviceorientation: "ondeviceorientation";
  deviceorientationabsolute: "ondeviceorientationabsolute";
  message: "onmessage";
  mousewheel: "onmousewheel";
  MSGestureChange: "onmsgesturechange";
  MSGestureDoubleTap: "onmsgesturedoubletap";
  MSGestureEnd: "onMSGestureEnd";
  MSGestureHold: "onMSGestureHold";
  MSGestureStart: "onMSGestureStart";
  MSGestureTap: "onmsGestureTap";
  MSInertiaStart: "onmsInertiaStart";
  MSPointerCancel: "onmsPointerCancel";
  MSPointerDown: "onmsPointerDown";
  MSPointerEnter: "onmsPointerEnter";
  MSPointerLeave: "onmsPointerLeave";
  MSPointerMove: "onmsPointerMove";
  MSPointerOut: "onmsPointerOut";
  MSPointerOver: "onmsPointerOver";
  MSPointerUp: "onmsPointerUp";
  offline: "onoffline";
  online: "ononline";
  orientationchange: "onorientationchange";
  pagehide: "onpagehide";
  pageshow: "onpageshow";
  pause: "onpause";
  play: "onplay";
  playing: "onplaying";
  popstate: "onpopstate";
  storage: "onstorage";
  unload: "onunload";
  vrdisplayactivate: "onvrdisplayactivate";
  vrdisplayblur: "onvrdisplayblur";
  vrdisplayconnect: "onvrdisplayconnect";
  vrdisplaydeactivate: "onvrdisplaydeactivate";
  vrdisplaydisconnect: "onvrdisplaydisconnect";
  vrdisplayfocus: "onvrdisplayfocus";
  vrdisplaypointerrestricted: "onvrdisplaypointerrestricted";
  vrdisplaypointerunrestricted: "onvrdisplaypointerunrestricted";
  vrdisplaypresentchange: "onvrdisplaypresentchange";
  languagechange: "onlanguagechange";
  messageerror: "onmessageerror";
  rejectionhandled: "onrejectionhandled";
  unhandledrejection: "onunhandledrejection";
  readystatechange: "onreadystatechange";
  progress: "onprogress";
};

export type EventHandlerToAttribute<
  K extends keyof RecordHTMLElementEventHandlersMap
> = RecordHTMLElementEventHandlersMap[K];

export type EventAttributeToHandler<
  V extends T[keyof T],
  T = RecordHTMLElementEventHandlersMap
> = { [P in keyof T]: T[P] extends V ? P : never }[keyof T];
