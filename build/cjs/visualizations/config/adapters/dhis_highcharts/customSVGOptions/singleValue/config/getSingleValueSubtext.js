"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueSubtext = getSingleValueSubtext;
var _getSingleValueFormattedValue = require("./getSingleValueFormattedValue.js");
function getSingleValueSubtext(metaData) {
  const indicatorType = metaData.items[metaData.dimensions.dx[0]].indicatorType;
  return indicatorType !== null && indicatorType !== void 0 && indicatorType.displayName && (indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.factor) !== _getSingleValueFormattedValue.INDICATOR_FACTOR_100 ? indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.displayName : undefined;
}