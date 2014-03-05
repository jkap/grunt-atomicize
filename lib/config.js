'use strict';
module.exports = {
	"pos": {
		"expand": "position",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"s": "static;",
			"a": "absolute;",
			"r": "relative;",
			"f": "fixed;"
		}
	},
	"t": {
		"expand": "top",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"r": {
		"expand": "right",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"b": {
		"expand": "bottom",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"l": {
		"expand": "left",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"z": {
		"expand": "z-index",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"fl": {
		"expand": "float",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"l": "left;",
			"r": "right;"
		}
	},
	"cl": {
		"expand": "clear",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"l": "left;",
			"r": "right;",
			"b": "both;"
		}
	},
	"d": {
		"expand": "display",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"b": "block;",
			"i": "inline;",
			"ib": "inline-block;",
			"li": "list-item;",
			"ri": "run-in;",
			"cp": "compact;",
			"tb": "table;",
			"itb": "inline-table;",
			"tbcp": "table-caption;",
			"tbcl": "table-column;",
			"tbclg": "table-column-group;",
			"tbhg": "table-header-group;",
			"tbfg": "table-footer-group;",
			"tbr": "table-row;",
			"tbrg": "table-row-group;",
			"tbc": "table-cell;",
			"rb": "ruby;",
			"rbb": "ruby-base;",
			"rbbg": "ruby-base-group;",
			"rbt": "ruby-text;",
			"rbtg": "ruby-text-group;"
		}
	},
	"v": {
		"expand": "visibility",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"v": "visible;",
			"h": "hidden;",
			"c": "collapse;"
		}
	},
	"ov": {
		"expand": "overflow",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"v": "visible;",
			"h": "hidden;",
			"s": "scroll;",
			"a": "auto;"
		}
	},
	"ovx": {
		"expand": "overflow-x",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"v": "visible;",
			"h": "hidden;",
			"s": "scroll;",
			"a": "auto;"
		}
	},
	"ovy": {
		"expand": "overflow-y",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"v": "visible;",
			"h": "hidden;",
			"s": "scroll;",
			"a": "auto;"
		}
	},
	"ovs": {
		"expand": "overflow-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"s": "scrollbar;",
			"p": "panner;",
			"m": "move;",
			"mq": "marquee;"
		}
	},
	"cp": {
		"expand": "clip",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"r": "rect(${1"
		}
	},
	"bxz": {
		"expand": "box-sizing",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"cb": "content-box;",
			"bb": "border-box;"
		}
	},
	"bxsh": {
		"expand": "box-shadow",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"r": "${1",
			"ra": "${1",
			"n": "none;"
		}
	},
	"m": {
		"expand": "margin",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"mt": {
		"expand": "margin-top",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"mr": {
		"expand": "margin-right",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"mb": {
		"expand": "margin-bottom",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"ml": {
		"expand": "margin-left",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"w": {
		"expand": "width",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"h": {
		"expand": "height",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"maw": {
		"expand": "max-width",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"mah": {
		"expand": "max-height",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"ori": {
		"expand": "orientation",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"l": "landscape;",
			"p": "portrait;"
		}
	},
	"ol": {
		"expand": "outline",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"olw": {
		"expand": "outline-width",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"tn": "thin;",
			"m": "medium;",
			"tc": "thick;"
		}
	},
	"ols": {
		"expand": "outline-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"dt": "dotted;",
			"ds": "dashed;",
			"s": "solid;",
			"db": "double;",
			"g": "groove;",
			"r": "ridge;",
			"i": "inset;",
			"o": "outset;"
		}
	},
	"olc": {
		"expand": "outline-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"i": "invert;"
		}
	},
	"bd": {
		"expand": "border",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdbk": {
		"expand": "border-break",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"c": "close;"
		}
	},
	"bdcl": {
		"expand": "border-collapse",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"c": "collapse;",
			"s": "separate;"
		}
	},
	"bdc": {
		"expand": "border-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "transparent;"
		}
	},
	"bdi": {
		"expand": "border-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdti": {
		"expand": "border-top-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdri": {
		"expand": "border-right-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdbi": {
		"expand": "border-bottom-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdli": {
		"expand": "border-left-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdci": {
		"expand": "border-corner-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"c": "continue;"
		}
	},
	"bdtli": {
		"expand": "border-top-left-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"c": "continue;"
		}
	},
	"bdtri": {
		"expand": "border-top-right-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"c": "continue;"
		}
	},
	"bdbri": {
		"expand": "border-bottom-right-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"c": "continue;"
		}
	},
	"bdbli": {
		"expand": "border-bottom-left-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"c": "continue;"
		}
	},
	"bdf": {
		"expand": "border-fit",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"c": "clip;",
			"r": "repeat;",
			"sc": "scale;",
			"st": "stretch;",
			"ow": "overwrite;",
			"of": "overflow;",
			"sp": "space;"
		}
	},
	"bdlen": {
		"expand": "border-length",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;"
		}
	},
	"bds": {
		"expand": "border-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"h": "hidden;",
			"dt": "dotted;",
			"ds": "dashed;",
			"s": "solid;",
			"db": "double;",
			"dtds": "dot-dash;",
			"dtdtds": "dot-dot-dash;",
			"w": "wave;",
			"g": "groove;",
			"r": "ridge;",
			"i": "inset;",
			"o": "outset;"
		}
	},
	"bdt": {
		"expand": "border-top",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdts": {
		"expand": "border-top-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdtc": {
		"expand": "border-top-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "transparent;"
		}
	},
	"bdr": {
		"expand": "border-right",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdrst": {
		"expand": "border-right-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdrc": {
		"expand": "border-right-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "transparent;"
		}
	},
	"bdb": {
		"expand": "border-bottom",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdbs": {
		"expand": "border-bottom-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdbc": {
		"expand": "border-bottom-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "transparent;"
		}
	},
	"bdl": {
		"expand": "border-left",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdls": {
		"expand": "border-left-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bdlc": {
		"expand": "border-left-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "transparent;"
		}
	},
	"bg": {
		"expand": "background",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"ie": "progid"
		}
	},
	"bgc": {
		"expand": "background-color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "transparent;"
		}
	},
	"bgi": {
		"expand": "background-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"bgr": {
		"expand": "background-repeat",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "no-repeat;",
			"x": "repeat-x;",
			"y": "repeat-y;",
			"sp": "space;",
			"rd": "round;"
		}
	},
	"bga": {
		"expand": "background-attachment",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"f": "fixed;",
			"s": "scroll;"
		}
	},
	"bgbk": {
		"expand": "background-break",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"bb": "bounding-box;",
			"eb": "each-box;",
			"c": "continuous;"
		}
	},
	"bgcp": {
		"expand": "background-clip",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"bb": "border-box;",
			"pb": "padding-box;",
			"cb": "content-box;",
			"nc": "no-clip;"
		}
	},
	"bgo": {
		"expand": "background-origin",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"pb": "padding-box;",
			"bb": "border-box;",
			"cb": "content-box;"
		}
	},
	"bgsz": {
		"expand": "background-size",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"ct": "contain;",
			"cv": "cover;"
		}
	},
	"c": {
		"expand": "color",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"r": "rgb(${1",
			"ra": "rgba(${1"
		}
	},
	"cnt": {
		"expand": "content",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"oq": "open-quote;",
			"noq": "no-open-quote;",
			"cq": "close-quote;",
			"ncq": "no-close-quote;",
			"a": "attr(|);",
			"c": "counter(|);",
			"cs": "counters(|);"
		}
	},
	"tbl": {
		"expand": "table-layout",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"f": "fixed;"
		}
	},
	"cps": {
		"expand": "caption-side",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"t": "top;",
			"b": "bottom;"
		}
	},
	"ec": {
		"expand": "empty-cells",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"s": "show;",
			"h": "hide;"
		}
	},
	"lis": {
		"expand": "list-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"lisp": {
		"expand": "list-style-position",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"i": "inside;",
			"o": "outside;"
		}
	},
	"list": {
		"expand": "list-style-type",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"d": "disc;",
			"c": "circle;",
			"s": "square;",
			"dc": "decimal;",
			"dclz": "decimal-leading-zero;",
			"lr": "lower-roman;",
			"ur": "upper-roman;"
		}
	},
	"lisi": {
		"expand": "list-style-image",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"q": {
		"expand": "quotes",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"ru": "'\\00AB' '\\00BB' '\\201E' '\\201C';",
			"en": "'\\201C' '\\201D' '\\2018' '\\2019';"
		}
	},
	"ct": {
		"expand": "content",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"oq": "open-quote;",
			"noq": "no-open-quote;",
			"cq": "close-quote;",
			"ncq": "no-close-quote;",
			"a": "attr(|);",
			"c": "counter(|);",
			"cs": "counters(|);"
		}
	},
	"va": {
		"expand": "vertical-align",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"sup": "super;",
			"t": "top;",
			"tt": "text-top;",
			"m": "middle;",
			"bl": "baseline;",
			"b": "bottom;",
			"tb": "text-bottom;",
			"sub": "sub;"
		}
	},
	"ta": {
		"expand": "text-align",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"l": "left;",
			"c": "center;",
			"r": "right;",
			"j": "justify;"
		}
	},
	"tal": {
		"expand": "text-align-last",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"l": "left;",
			"c": "center;",
			"r": "right;"
		}
	},
	"td": {
		"expand": "text-decoration",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"u": "underline;",
			"o": "overline;",
			"l": "line-through;"
		}
	},
	"te": {
		"expand": "text-emphasis",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"ac": "accent;",
			"dt": "dot;",
			"c": "circle;",
			"ds": "disc;",
			"b": "before;",
			"a": "after;"
		}
	},
	"th": {
		"expand": "text-height",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"f": "font-size;",
			"t": "text-size;",
			"m": "max-size;"
		}
	},
	"ti": {
		"expand": "text-indent",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"-": "-9999px;"
		}
	},
	"tj": {
		"expand": "text-justify",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"iw": "inter-word;",
			"ii": "inter-ideograph;",
			"ic": "inter-cluster;",
			"d": "distribute;",
			"k": "kashida;",
			"t": "tibetan;"
		}
	},
	"tov": {
		"expand": "text-overflow",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"e": "ellipsis;",
			"c": "clip;"
		}
	},
	"to": {
		"expand": "text-outline",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"tr": {
		"expand": "text-replace",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"tt": {
		"expand": "text-transform",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"c": "capitalize;",
			"u": "uppercase;",
			"l": "lowercase;"
		}
	},
	"tw": {
		"expand": "text-wrap",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"no": "none;",
			"u": "unrestricted;",
			"s": "suppress;"
		}
	},
	"tsh": {
		"expand": "text-shadow",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"r": "${1",
			"ra": "${1",
			"n": "none;"
		}
	},
	"trf": {
		"expand": "transform",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"skx": " skewX(${1",
			"sky": " skewY(${1",
			"sc": " scale(${1",
			"scx": " scaleX(${1",
			"scy": " scaleY(${1",
			"scz": " scaleZ(${1",
			"sc3": " scale3d(${1",
			"r": " rotate(${1",
			"rx": " rotateX(${1",
			"ry": " rotateY(${1",
			"rz": " rotateZ(${1",
			"t": " translate(${1",
			"tx": " translateX(${1",
			"ty": " translateY(${1",
			"tz": " translateZ(${1",
			"t3": " translate3d(${1"
		}
	},
	"whs": {
		"expand": "white-space",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"p": "pre;",
			"nw": "nowrap;",
			"pw": "pre-wrap;",
			"pl": "pre-line;"
		}
	},
	"whsc": {
		"expand": "white-space-collapse",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"k": "keep-all;",
			"l": "loose;",
			"bs": "break-strict;",
			"ba": "break-all;"
		}
	},
	"wob": {
		"expand": "word-break",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"k": "keep-all;",
			"ba": "break-all;"
		}
	},
	"wow": {
		"expand": "word-wrap",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"nm": "normal;",
			"n": "none;",
			"u": "unrestricted;",
			"s": "suppress;",
			"b": "break-word;"
		}
	},
	"wm": {
		"expand": "writing-mode",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"lrt": "lr-tb;",
			"lrb": "lr-bt;",
			"rlt": "rl-tb;",
			"rlb": "rl-bt;",
			"tbr": "tb-rl;",
			"tbl": "tb-lr;",
			"btl": "bt-lr;",
			"btr": "bt-rl;"
		}
	},
	"fw": {
		"expand": "font-weight",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"b": "bold;",
			"br": "bolder;",
			"lr": "lighter;"
		}
	},
	"fs": {
		"expand": "font-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"i": "italic;",
			"o": "oblique;"
		}
	},
	"fv": {
		"expand": "font-variant",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"sc": "small-caps;"
		}
	},
	"fza": {
		"expand": "font-size-adjust",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;"
		}
	},
	"ff": {
		"expand": "font-family",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"s": "serif;",
			"ss": "sans-serif;",
			"c": "cursive;",
			"f": "fantasy;",
			"m": "monospace;",
			"a": " Arial, \"Helvetica Neue\", Helvetica, sans-serif;",
			"t": " \"Times New Roman\", Times, Baskerville, Georgia, serif;",
			"v": " Verdana, Geneva, sans-serif;"
		}
	},
	"fef": {
		"expand": "font-effect",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"eg": "engrave;",
			"eb": "emboss;",
			"o": "outline;"
		}
	},
	"femp": {
		"expand": "font-emphasize-position",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"b": "before;",
			"a": "after;"
		}
	},
	"fems": {
		"expand": "font-emphasize-style",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"ac": "accent;",
			"dt": "dot;",
			"c": "circle;",
			"ds": "disc;"
		}
	},
	"fsm": {
		"expand": "font-smooth",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"n": "never;",
			"aw": "always;"
		}
	},
	"fst": {
		"expand": "font-stretch",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "normal;",
			"uc": "ultra-condensed;",
			"ec": "extra-condensed;",
			"c": "condensed;",
			"sc": "semi-condensed;",
			"se": "semi-expanded;",
			"e": "expanded;",
			"ee": "extra-expanded;",
			"ue": "ultra-expanded;"
		}
	},
	"op": {
		"expand": "filter",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"ie": "progid",
			"ms": "'progid"
		}
	},
	"rsz": {
		"expand": "resize",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"n": "none;",
			"b": "both;",
			"h": "horizontal;",
			"v": "vertical;"
		}
	},
	"cur": {
		"expand": "cursor",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "auto;",
			"d": "default;",
			"c": "crosshair;",
			"ha": "hand;",
			"he": "help;",
			"m": "move;",
			"p": "pointer;",
			"t": "text;"
		}
	},
	"pgbb": {
		"expand": "page-break-before",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"au": "auto;",
			"al": "always;",
			"l": "left;",
			"r": "right;"
		}
	},
	"pgbi": {
		"expand": "page-break-inside",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"au": "auto;",
			"av": "avoid;"
		}
	},
	"pgba": {
		"expand": "page-break-after",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"au": "auto;",
			"al": "always;",
			"l": "left;",
			"r": "right;"
		}
	},
	"wfsm": {
		"expand": "-webkit-font-smoothing",
		"params": {
			"^(\\d+)(px)?$": "$1px",
			"^(\\d+)pct$": "$1%",
			"a": "antialiased;",
			"s": "subpixel-antialiased;",
			"sa": "subpixel-antialiased;",
			"n": "none;"
		}
	}
};