"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText"));

var _type = require("../type");

var _yearOverYear = _interopRequireDefault(require("./yearOverYear"));

var DEFAULT_TITLE_STYLE = {
  margin: 30,
  y: 18,
  style: {
    color: '#111'
  }
};
var DASHBOARD_TITLE_STYLE = {
  margin: 15,
  y: 12,
  style: {
    fontSize: '13px',
    fontWeight: 'bold'
  }
};

function getDefault(layout, metaData, dashboard) {
  // filters
  if (layout.filters && !dashboard) {
    return (0, _getFilterText.default)(layout.filters, metaData);
  }

  return null;
}

function _default(layout, metaData, dashboard) {
  var title = {
    text: undefined
  };

  if (layout.hideTitle) {
    return title;
  }

  if ((0, _isString.default)(layout.title) && layout.title.length) {
    title.text = layout.title;
  } else {
    switch (layout.type) {
      case _type.CHART_TYPE_GAUGE:
      case _type.CHART_TYPE_YEAR_OVER_YEAR_LINE:
      case _type.CHART_TYPE_YEAR_OVER_YEAR_COLUMN:
        title.text = (0, _yearOverYear.default)(layout, metaData, dashboard);
        break;

      default:
        title.text = getDefault(layout, metaData, dashboard);
        break;
    }
  }

  return Object.assign({}, DEFAULT_TITLE_STYLE, dashboard ? DASHBOARD_TITLE_STYLE : undefined, title);
}