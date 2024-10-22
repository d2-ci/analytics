"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDefaultChart;
var _index = require("../events/index.js");
var _type = _interopRequireDefault(require("../type.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DEFAULT_CHART = {
  spacingTop: 20,
  style: {
    fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif'
  }
};
const DASHBOARD_CHART = {
  spacingTop: 0,
  spacingRight: 5,
  spacingBottom: 2,
  spacingLeft: 5
};
function getDefaultChart(layout, el, extraOptions) {
  return Object.assign({}, (0, _type.default)(layout.type), {
    renderTo: el || layout.el
  }, DEFAULT_CHART, extraOptions.dashboard ? DASHBOARD_CHART : undefined, (0, _index.getEvents)(layout.type));
}