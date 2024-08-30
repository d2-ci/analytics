"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ui = require("@dhis2/ui");

const _defaultExport = [".container.jsx-2067921157{position:relative;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;min-height:30vh;}", ".wrapper.jsx-2067921157{position:absolute;width:100%;height:100%;overflow:auto;margin-top:0;padding:0;}", ".list.jsx-2067921157{margin:0;padding:0;}", ".header.jsx-2067921157{text-transform:uppercase;font-size:11px;color:".concat(_ui.colors.grey700, ";margin:5px 0;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}"), ".section.jsx-2067921157:not(:last-child){margin-bottom:".concat(_ui.spacers.dp24, ";}")];
_defaultExport.__hash = "2067921157";
// Fix for vertical flex scrolling in Firefox/Safari:
// Wrap the list in a div with position:relative (and flex:1 instead of on the list)
// On the list, set position:absolute, width:100%, height:100%
var _default = _defaultExport;
exports.default = _default;