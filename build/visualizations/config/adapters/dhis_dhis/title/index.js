"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText"));

var _visTypes = require("../../../../../modules/visTypes");

var _singleValue = _interopRequireDefault(require("./singleValue"));

function getDefault(layout, metaData, dashboard) {
  return layout.filters && !dashboard ? (0, _getFilterText.default)(layout.filters, metaData) : '';
}

function _default(layout, metaData, dashboard) {
  if (layout.hideTitle) {
    return '';
  }

  if (typeof layout.title === 'string' && layout.title.length) {
    return layout.title;
  } else {
    var title;

    switch (layout.type) {
      case _visTypes.VIS_TYPE_SINGLE_VALUE:
        title = (0, _singleValue.default)(layout, metaData);
        break;

      default:
        title = getDefault(layout, metaData, dashboard);
    }

    return title;
  }
}