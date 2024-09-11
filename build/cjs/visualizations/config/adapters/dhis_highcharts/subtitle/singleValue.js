"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSingleValueSubtitle;
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getSingleValueSubtitle(layout, metaData) {
  if (layout.hideSubtitle) {
    return '';
  }
  if (typeof layout.subtitle === 'string' && layout.subtitle.length) {
    return layout.subtitle;
  }
  if (layout.filters) {
    return (0, _getFilterText.default)(layout.filters, metaData);
  }
  return '';
}