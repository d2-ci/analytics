"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateValueSVG = void 0;
var _ui = require("@dhis2/ui");
var _constants = require("./constants.js");
var _textSize = require("./textSize.js");
const parser = new DOMParser();
const generateValueSVG = _ref => {
  let {
    renderer,
    formattedValue,
    subText,
    valueColor,
    textColor,
    icon,
    noData,
    containerWidth,
    containerHeight,
    topMargin = 0
  } = _ref;
  const showIcon = icon && formattedValue !== noData.text;
  const group = renderer.g('value').css({
    transform: 'scale(0.5) translate(100%, 100%)'
  }).add();
  const textSize = (0, _textSize.getTextSize)(formattedValue, containerWidth, containerHeight, showIcon);
  const textWidth = (0, _textSize.getTextWidth)(formattedValue, `${textSize}px Roboto`);
  const iconSize = textSize;
  const subTextSize = textSize * _constants.SUB_TEXT_SIZE_FACTOR > _constants.SUB_TEXT_SIZE_MAX_THRESHOLD ? _constants.SUB_TEXT_SIZE_MAX_THRESHOLD : textSize * _constants.SUB_TEXT_SIZE_FACTOR < _constants.SUB_TEXT_SIZE_MIN_THRESHOLD ? _constants.SUB_TEXT_SIZE_MIN_THRESHOLD : textSize * _constants.SUB_TEXT_SIZE_FACTOR;
  let fillColor = _ui.colors.grey900;
  if (valueColor) {
    fillColor = valueColor;
  } else if (formattedValue === noData.text) {
    fillColor = _ui.colors.grey600;
  }
  const letterSpacing = Math.round(textSize * _constants.LETTER_SPACING_TEXT_SIZE_FACTOR);
  const formattedValueText = renderer.text(formattedValue).attr({
    'font-size': textSize,
    'font-weight': '300',
    'letter-spacing': letterSpacing < _constants.LETTER_SPACING_MIN_THRESHOLD ? _constants.LETTER_SPACING_MIN_THRESHOLD : letterSpacing > _constants.LETTER_SPACING_MAX_THRESHOLD ? _constants.LETTER_SPACING_MAX_THRESHOLD : letterSpacing,
    'text-anchor': 'middle',
    width: '100%',
    x: showIcon ? `${iconSize / 2 + (0, _textSize.getIconPadding)(textSize / 2)}` : 0,
    y: topMargin / 2 + (0, _textSize.getTextHeightForNumbers)(textSize) / 2,
    fill: fillColor,
    'data-test': 'visualization-primary-value'
  }).add(group);

  // show icon if configured in maintenance app
  if (showIcon) {
    const svgIconDocument = parser.parseFromString(icon, 'image/svg+xml');
    const iconElHeight = svgIconDocument.documentElement.getAttribute('height');
    const iconElWidth = svgIconDocument.documentElement.getAttribute('width');
    const x = (iconSize + (0, _textSize.getIconPadding)(textSize) + textWidth) / 2 * -1;
    const y = (iconSize / 2 - topMargin / 2) * -1;
    const iconGroup = renderer.g('icon').attr('data-test', 'visualization-icon').css({
      color: 'green'
      // color: fillColor,
    });
    /* Force the group element to have the same dimensions as the original
     * SVG image by adding this rect. This ensures the icon has the intended
     * whitespace around it and makes scaling and translating easier. */
    renderer.rect(0, 0, iconElWidth, iconElHeight).add(iconGroup);
    Array.from(svgIconDocument.documentElement.children).forEach(node => iconGroup.element.appendChild(node));
    iconGroup.add();
    const formattedValueBox = formattedValueText.getBBox();
    const targetHeight = textSize / 2;
    const scaleFactor = targetHeight / iconElHeight;
    console.log(formattedValueBox);
    iconGroup.css({
      transform: `scale(${scaleFactor}) translate(16px, 104px)`
    });
  }
  if (subText) {
    renderer.text(subText).attr({
      'text-anchor': 'middle',
      'font-size': subTextSize,
      y: iconSize / 2 + topMargin / 2,
      dy: subTextSize * 1.7,
      fill: textColor
    }).add(group);
  }
};
exports.generateValueSVG = generateValueSVG;