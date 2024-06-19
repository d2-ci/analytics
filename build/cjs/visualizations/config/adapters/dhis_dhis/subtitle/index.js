"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _visTypes = require("../../../../../modules/visTypes.js");
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
var _singleValue = _interopRequireDefault(require("./singleValue.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getDefault(layout, dashboard, metaData) {
  if (dashboard || typeof layout.title === 'string') {
    return (0, _getFilterText.default)(layout.filters, metaData);
  }
  return '';
}
function _default(layout, metaData, dashboard) {
  if (layout.hideSubtitle) {
    return '';
  }
  if (typeof layout.subtitle === 'string' && layout.subtitle.length) {
    return layout.subtitle;
  } else {
    let subtitle;
    switch (layout.type) {
      case _visTypes.VIS_TYPE_SINGLE_VALUE:
        subtitle = (0, _singleValue.default)(layout, metaData);
        break;
      default:
        subtitle = getDefault(layout, dashboard, metaData);
    }
    return subtitle;
  }
}