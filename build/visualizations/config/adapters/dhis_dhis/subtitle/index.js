"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText"));

var _singleValue = _interopRequireDefault(require("./singleValue"));

var _visTypes = require("../../../../../modules/visTypes");

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
    var subtitle;

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