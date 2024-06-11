"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableHeaderCell = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _getHeaderForDisplay = require("../../modules/pivotTable/getHeaderForDisplay.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PivotTableHeaderCell = _ref => {
  let {
    axisClippingResult,
    index,
    level,
    getHeader,
    render,
    showHierarchy
  } = _ref;
  const header = (0, _getHeaderForDisplay.getHeaderForDisplay)({
    start: axisClippingResult.indices[0],
    count: axisClippingResult.indices.length,
    index,
    dimensionLevel: level,
    getHeader,
    showHierarchy
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