"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeLayoutRect = computeLayoutRect;
var _computeSpacingTop = require("./computeSpacingTop.js");
var _constants = require("./constants.js");
function computeLayoutRect(valueElement, subTextElement, iconElement, spacing) {
  const valueRect = valueElement.getBBox();
  const containerCenterY = this.chartHeight / 2;
  const containerCenterX = this.chartWidth / 2;
  const minY = _computeSpacingTop.computeSpacingTop.call(this, spacing.valueTop);
  let width = valueRect.width;
  let height = valueRect.height * _constants.ACTUAL_NUMBER_HEIGHT_FACTOR;
  let sideMarginTop = 0;
  let sideMarginBottom = 0;
  if (iconElement) {
    width += spacing.iconGap + spacing.iconSize;
  }
  if (subTextElement) {
    const subTextRect = subTextElement.getBBox();
    if (subTextRect.width > width) {
      sideMarginTop = (subTextRect.width - width) / 2;
      width = subTextRect.width;
    } else {
      sideMarginBottom = (width - subTextRect.width) / 2;
    }
    height += spacing.subTextTop + subTextRect.height;
  }
  return {
    x: containerCenterX - width / 2,
    y: Math.max(containerCenterY - height / 2, minY),
    width,
    height,
    sideMarginTop,
    sideMarginBottom
  };
}