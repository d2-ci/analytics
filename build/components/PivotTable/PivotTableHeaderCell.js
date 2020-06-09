"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableHeaderCell = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getHeaderForDisplay = require("../../modules/pivotTable/getHeaderForDisplay");

var PivotTableHeaderCell = function PivotTableHeaderCell(_ref) {
  var axisClippingResult = _ref.axisClippingResult,
      index = _ref.index,
      level = _ref.level,
      getHeader = _ref.getHeader,
      render = _ref.render,
      showHierarchy = _ref.showHierarchy;
  var header = (0, _getHeaderForDisplay.getHeaderForDisplay)({
    start: axisClippingResult.indices[0],
    count: axisClippingResult.indices.length,
    index: index,
    dimensionLevel: level,
    getHeader: getHeader,
    showHierarchy: showHierarchy
  });
  return !header ? null : render(header);
};

exports.PivotTableHeaderCell = PivotTableHeaderCell;
PivotTableHeaderCell.propTypes = {
  axisClippingResult: _propTypes.default.object.isRequired,
  getHeader: _propTypes.default.func.isRequired,
  index: _propTypes.default.number.isRequired,
  level: _propTypes.default.number.isRequired,
  render: _propTypes.default.func.isRequired,
  showHierarchy: _propTypes.default.bool.isRequired
};