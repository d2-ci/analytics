"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueTitleColor = getSingleValueTitleColor;
var _ui = require("@dhis2/ui");
var _legends = require("../../../../../../../modules/legends.js");
var _getSingleValueLegendColor = require("./getSingleValueLegendColor.js");
var _shouldUseContrastColor = require("./shouldUseContrastColor.js");
function getSingleValueTitleColor(customColor, defaultColor, value, legendOptions, legendSets) {
  // Never override custom color
  if (customColor) {
    return customColor;
  }
  const isUsingLegendBackground = (legendOptions === null || legendOptions === void 0 ? void 0 : legendOptions.style) === _legends.LEGEND_DISPLAY_STYLE_FILL;

  // If not using legend background, always return default color
  if (!isUsingLegendBackground) {
    return defaultColor;
  }
  const legendColor = (0, _getSingleValueLegendColor.getSingleValueLegendColor)(legendOptions, legendSets, value);

  // Return default color or contrasting color when using legend background and default color
  return (0, _shouldUseContrastColor.shouldUseContrastColor)(legendColor) ? _ui.colors.white : defaultColor;
}