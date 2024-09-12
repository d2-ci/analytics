"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _visTypes = require("../../../../modules/visTypes.js");
var _index = require("./customSVGOptions/index.js");
var _index2 = require("./customSVGOptions/singleValue/index.js");
var _type = _interopRequireDefault(require("./type.js"));
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
const getEvents = () => ({
  events: {
    load: function () {
      // Align legend icon with legend text
      this.legend.allItems.forEach(item => {
        if (item.legendSymbol) {
          item.legendSymbol.attr({
            translateY: -(item.legendItem.label.getBBox().height * 0.75 / 4) + item.legendSymbol.r / 2
          });
        }
      });
      _index.renderCustomSVG.call(this);
    }
  }
});
function _default(layout, el, extraOptions, series) {
  return Object.assign({}, (0, _type.default)(layout.type), {
    renderTo: el || layout.el
  }, DEFAULT_CHART, extraOptions.dashboard ? DASHBOARD_CHART : undefined, getEvents(), layout.type === _visTypes.VIS_TYPE_SINGLE_VALUE ? {
    backgroundColor: (0, _index2.getSingleValueBackgroundColor)(extraOptions.legendOptions, extraOptions.legendSets, series[0])
  } : undefined);
}