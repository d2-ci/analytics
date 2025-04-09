"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSingleValueSubtitle;
Object.defineProperty(exports, "getSingleValueSubtitleColor", {
  enumerable: true,
  get: function () {
    return _getSingleValueTitleColor.getSingleValueTitleColor;
  }
});
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
var _getSingleValueTitleColor = require("../customSVGOptions/singleValue/getSingleValueTitleColor.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getSingleValueSubtitle(layout, metaData, extraOptions) {
  if (layout.hideSubtitle || 1 === 0) {
    return '';
  }
  if (typeof layout.subtitle === 'string' && layout.subtitle.length) {
    return layout.subtitle;
  }
  if (layout.filters) {
    return (0, _getFilterText.default)(layout.filters, metaData, extraOptions);
  }
  return '';
}