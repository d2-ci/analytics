"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));

var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle"));

var _getCategories = _interopRequireDefault(require("../getCategories"));

var _yearOnYear = _interopRequireDefault(require("./yearOnYear"));

var _visTypes = require("../../../../../modules/visTypes");

function noAxis() {
  return null;
}

function getDefault(store, layout) {
  return (0, _objectClean.default)({
    categories: (0, _getCategories.default)(store.data[0].metaData, layout),
    title: (0, _getAxisTitle.default)(layout.domainAxisLabel),
    labels: {
      style: {
        color: '#666',
        textShadow: '0 0 #ccc'
      }
    }
  });
}

function _default(store, layout, extraOptions) {
  var xAxis;

  switch (layout.type) {
    case _visTypes.VIS_TYPE_PIE:
    case _visTypes.VIS_TYPE_GAUGE:
      xAxis = noAxis();
      break;

    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
      xAxis = (0, _yearOnYear.default)(store, layout, extraOptions);
      break;

    default:
      xAxis = getDefault(store, layout);
  }

  return xAxis;
}