"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));

var _gauge = _interopRequireDefault(require("./gauge"));

var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText"));

var _visTypes = require("../../../../../modules/visTypes");

var _yearOverYear = _interopRequireDefault(require("../title/yearOverYear"));

var DEFAULT_SUBTITLE = {
  style: {
    // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '14px',
    color: '#555',
    textShadow: '0 0 #999'
  }
};
var DASHBOARD_SUBTITLE = {
  style: {
    // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '12px'
  }
};

function getDefault(layout, dashboard, filterTitle) {
  return {
    text: dashboard || (0, _isString.default)(layout.title) ? filterTitle : undefined
  };
}

function _default(series, layout, metaData, dashboard) {
  var subtitle = {
    text: undefined
  };

  if (layout.hideSubtitle) {
    return null;
  } // DHIS2-578: allow for optional custom subtitle


  if ((0, _isString.default)(layout.subtitle)) {
    subtitle.text = layout.subtitle;
  } else {
    var filterTitle = (0, _getFilterText.default)(layout.filters, metaData);

    switch (layout.type) {
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        subtitle.text = (0, _yearOverYear.default)(layout, metaData, Boolean(!dashboard));
        break;

      default:
        subtitle = getDefault(layout, dashboard, filterTitle);
    }
  }

  return subtitle ? Object.assign({}, DEFAULT_SUBTITLE, dashboard ? DASHBOARD_SUBTITLE : undefined, subtitle) : subtitle;
}