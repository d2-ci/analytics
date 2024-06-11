"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _axes = require("../../../../util/axes.js");
var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle.js"));
var _getCategories = _interopRequireDefault(require("../getCategories.js"));
var _index = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const AXIS_TYPE = 'DOMAIN';
const AXIS_INDEX = 0;
function _default(store, layout) {
  var _axis$title, _axis$title2;
  const axis1Categories = (0, _getCategories.default)(store.data[0].metaData, layout.rows[1].dimension);
  const axis2Categories = (0, _getCategories.default)(store.data[0].metaData, layout.rows[0].dimension);
  const axis = (0, _axes.getAxis)(layout.axes, AXIS_TYPE, AXIS_INDEX);

  // bottom x axis
  const xAxis = [{
    title: (0, _getAxisTitle.default)((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text, (0, _fontStyle.mergeFontStyleWithDefault)((_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.fontStyle, _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE), _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE, layout.type),
    categories: Array.from({
      length: axis2Categories.length || 1
    }, () => axis1Categories),
    labels: (0, _index.getLabels)(axis)
  }];

  // top x axis
  xAxis.push({
    categories: axis2Categories,
    labels: xAxis[0].labels,
    gridLineWidth: 1,
    opposite: 'true'
  });
  return xAxis;
}