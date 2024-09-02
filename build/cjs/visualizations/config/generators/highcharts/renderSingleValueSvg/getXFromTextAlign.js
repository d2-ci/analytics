"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getXFromTextAlign = void 0;
var _fontStyle = require("../../../../../modules/fontStyle.js");
const getXFromTextAlign = textAlign => {
  switch (textAlign) {
    default:
    case _fontStyle.TEXT_ALIGN_LEFT:
      return '1%';
    case _fontStyle.TEXT_ALIGN_CENTER:
      return '50%';
    case _fontStyle.TEXT_ALIGN_RIGHT:
      return '99%';
  }
};
exports.getXFromTextAlign = getXFromTextAlign;