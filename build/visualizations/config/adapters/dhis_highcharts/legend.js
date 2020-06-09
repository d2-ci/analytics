"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var DEFAULT_ITEM_STYLE = {
  fontSize: '13px',
  fontWeight: 'normal'
};
var DASHBOARD_ITEM_STYLE = {
  fontSize: '11px',
  fontWeight: 500
};
var DEFAULT_LEGEND = {
  symbolWidth: 11,
  symbolHeight: 11,
  itemMarginBottom: 2
};
var DASHBOARD_LEGEND = {
  symbolPadding: 3,
  itemDistance: 10
};

function getItemStyle(dashboard) {
  return {
    itemStyle: Object.assign({}, DEFAULT_ITEM_STYLE, dashboard ? DASHBOARD_ITEM_STYLE : null)
  };
}

function getLegend(dashboard) {
  return Object.assign({}, DEFAULT_LEGEND, dashboard ? DASHBOARD_LEGEND : null);
}

function _default(layout, dashboard) {
  return layout.hideLegend ? {
    enabled: false
  } : Object.assign({}, getLegend(dashboard), getItemStyle(dashboard));
}