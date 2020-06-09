"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _type = _interopRequireDefault(require("./type"));

var DEFAULT_CHART = {
  spacingTop: 20,
  style: {
    fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif'
  }
};
var DASHBOARD_CHART = {
  spacingTop: 0,
  spacingRight: 5,
  spacingBottom: 2,
  spacingLeft: 5
};

function _default(layout, el, dashboard) {
  return Object.assign({}, (0, _type.default)(layout.type), {
    renderTo: el || layout.el
  }, DEFAULT_CHART, dashboard ? DASHBOARD_CHART : undefined);
}