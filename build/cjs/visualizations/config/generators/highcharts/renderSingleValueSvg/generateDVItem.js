"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDVItem = void 0;
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _constants = require("./constants.js");
var _generateValueSVG = require("./generateValueSVG.js");
var _getTextAnchorFromTextAlign = require("./getTextAnchorFromTextAlign.js");
var _getXFromTextAlign = require("./getXFromTextAlign.js");
const generateDVItem = (config, _ref) => {
  let {
    renderer,
    width,
    height,
    valueColor,
    noData,
    backgroundColor,
    titleColor,
    fontStyle,
    icon
  } = _ref;
  backgroundColor = 'red';
  if (backgroundColor) {
    renderer.rect(0, 0, width, height).attr({
      fill: backgroundColor,
      width: '100%',
      height: '100%'
    }).add();
  }

  // TITLE
  const titleFontStyle = (0, _fontStyle.mergeFontStyleWithDefault)(fontStyle && fontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_TITLE], _fontStyle.FONT_STYLE_VISUALIZATION_TITLE);
  const titleYPosition = _constants.TOP_MARGIN_FIXED + parseInt(titleFontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]) + 'px';
  const titleFontSize = `${titleFontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`;
  renderer.text(config.title).attr({
    x: (0, _getXFromTextAlign.getXFromTextAlign)(titleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN]),
    y: titleYPosition,
    'text-anchor': (0, _getTextAnchorFromTextAlign.getTextAnchorFromTextAlign)(titleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN]),
    'font-size': titleFontSize,
    'font-weight': titleFontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
    'font-style': titleFontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal',
    'data-test': 'visualization-title',
    fill: titleColor && titleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR] === _fontStyle.defaultFontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_TITLE][_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR] ? titleColor : titleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR]
  }).add();

  // SUBTITLE
  const subtitleFontStyle = (0, _fontStyle.mergeFontStyleWithDefault)(fontStyle && fontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE], _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE);
  const subtitleFontSize = `${subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`;
  if (config.subtitle) {
    renderer.text(config.subtitle).attr({
      x: (0, _getXFromTextAlign.getXFromTextAlign)(subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN]),
      y: titleYPosition,
      dy: `${subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE] + 10}`,
      'text-anchor': (0, _getTextAnchorFromTextAlign.getTextAnchorFromTextAlign)(subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN]),
      'font-size': subtitleFontSize,
      'font-weight': subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      'font-style': subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal',
      fill: titleColor && subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR] === _fontStyle.defaultFontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE][_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR] ? titleColor : subtitleFontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR],
      'data-test': 'visualization-subtitle'
    }).add();
  }
  (0, _generateValueSVG.generateValueSVG)({
    renderer,
    formattedValue: config.formattedValue,
    subText: config.subText,
    valueColor,
    textColor: titleColor,
    noData,
    icon,
    containerWidth: width,
    containerHeight: height,
    topMargin: _constants.TOP_MARGIN_FIXED + ((config.title ? parseInt(titleFontSize) : 0) + (config.subtitle ? parseInt(subtitleFontSize) : 0)) * 2.5
  });
};
exports.generateDVItem = generateDVItem;