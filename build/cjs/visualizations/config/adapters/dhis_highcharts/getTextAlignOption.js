"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextAlignOption = void 0;
var _fontStyle = require("../../../../modules/fontStyle.js");
const defaultAlignOptions = {
  [_fontStyle.TEXT_ALIGN_LEFT]: 'left',
  [_fontStyle.TEXT_ALIGN_CENTER]: 'center',
  [_fontStyle.TEXT_ALIGN_RIGHT]: 'right'
};
const axisTitleAlignOptions = {
  [_fontStyle.TEXT_ALIGN_LEFT]: 'low',
  [_fontStyle.TEXT_ALIGN_CENTER]: 'middle',
  [_fontStyle.TEXT_ALIGN_RIGHT]: 'high'
};
const verticalAlignOptions = {
  [_fontStyle.TEXT_ALIGN_LEFT]: 'top',
  [_fontStyle.TEXT_ALIGN_CENTER]: 'middle',
  [_fontStyle.TEXT_ALIGN_RIGHT]: 'bottom'
};
const getTextAlignOptions = (fontStyleKey, isVertical) => {
  switch (fontStyleKey) {
    case _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE:
    case _fontStyle.FONT_STYLE_VERTICAL_AXIS_TITLE:
      return axisTitleAlignOptions;
    case _fontStyle.FONT_STYLE_REGRESSION_LINE_LABEL:
      return isVertical ? verticalAlignOptions : defaultAlignOptions;
    case _fontStyle.FONT_STYLE_VISUALIZATION_TITLE:
    case _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE:
    case _fontStyle.FONT_STYLE_LEGEND:
    default:
      return defaultAlignOptions;
  }
};
const getTextAlignOption = (option, fontStyleKey, isVertical) => getTextAlignOptions(fontStyleKey, isVertical)[option];
exports.getTextAlignOption = getTextAlignOption;