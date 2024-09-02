"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextAnchorFromTextAlign = void 0;
var _fontStyle = require("../../../../../modules/fontStyle.js");
const getTextAnchorFromTextAlign = textAlign => {
  switch (textAlign) {
    default:
    case _fontStyle.TEXT_ALIGN_LEFT:
      return 'start';
    case _fontStyle.TEXT_ALIGN_CENTER:
      return 'middle';
    case _fontStyle.TEXT_ALIGN_RIGHT:
      return 'end';
  }
};
exports.getTextAnchorFromTextAlign = getTextAnchorFromTextAlign;