"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextWidth = exports.getTextSize = exports.getTextHeightForNumbers = exports.getIconPadding = void 0;
var _constants = require("./constants.js");
// Compute text width before rendering

// Not exactly precise but close enough
const getTextWidth = (text, font) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  return Math.round(context.measureText(text).width * _constants.ACTUAL_TEXT_WIDTH_FACTOR);
};
exports.getTextWidth = getTextWidth;
const getTextHeightForNumbers = textSize => textSize * _constants.ACTUAL_NUMBER_HEIGHT_FACTOR;
exports.getTextHeightForNumbers = getTextHeightForNumbers;
const getIconPadding = textSize => Math.round(textSize * _constants.ICON_PADDING_FACTOR);
exports.getIconPadding = getIconPadding;
const getTextSize = (formattedValue, containerWidth, containerHeight, showIcon) => {
  let size = Math.min(Math.round(containerHeight * _constants.TEXT_SIZE_CONTAINER_HEIGHT_FACTOR), _constants.TEXT_SIZE_MAX_THRESHOLD);
  const widthThreshold = Math.round(containerWidth * _constants.TEXT_WIDTH_CONTAINER_WIDTH_FACTOR);
  const textWidth = getTextWidth(formattedValue, `${size}px Roboto`) + (showIcon ? getIconPadding(size) : 0);
  if (textWidth > widthThreshold) {
    size = Math.round(size * (widthThreshold / textWidth));
  }
  return size;
};
exports.getTextSize = getTextSize;