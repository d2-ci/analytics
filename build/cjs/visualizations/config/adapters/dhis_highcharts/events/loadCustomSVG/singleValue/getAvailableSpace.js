"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAvailableSpace = getAvailableSpace;
var _computeSpacingTop = require("./computeSpacingTop.js");
var _styles = require("./styles.js");
function getAvailableSpace(valueSpacingTop) {
  return {
    height: this.chartHeight - _computeSpacingTop.computeSpacingTop.call(this, valueSpacingTop),
    width: this.chartWidth - _styles.MIN_SIDE_WHITESPACE * 2
  };
}