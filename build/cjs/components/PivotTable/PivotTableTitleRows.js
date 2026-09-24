"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableTitleRows = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _getFilterText = _interopRequireDefault(require("../../visualizations/util/getFilterText.js"));
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableTitleRow = require("./PivotTableTitleRow.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* Returns the filter line to render, or null for no filter row at all.
 * A caller-supplied `filterText` is authoritative - including the empty
 * string, which is how a caller says "this visualization has no filters".
 * Only when nothing was supplied is the line derived from the layout. */
const getFilterRowTitle = engine => {
  var _engine$visualization;
  const {
    filterText
  } = engine.options;
  if (filterText !== undefined) {
    return filterText || null;
  }
  return (_engine$visualization = engine.visualization.filters) !== null && _engine$visualization !== void 0 && _engine$visualization.length ? (0, _getFilterText.default)(engine.visualization.filters, engine.rawData.metaData) : null;
};
const PivotTableTitleRows = ({
  clippingResult,
  width
}) => {
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const filterRowTitle = getFilterRowTitle(engine);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, engine.options.title ? /*#__PURE__*/_react.default.createElement(_PivotTableTitleRow.PivotTableTitleRow, {
    title: engine.options.title,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, engine.options.subtitle ? /*#__PURE__*/_react.default.createElement(_PivotTableTitleRow.PivotTableTitleRow, {
    title: engine.options.subtitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, filterRowTitle !== null ? /*#__PURE__*/_react.default.createElement(_PivotTableTitleRow.PivotTableTitleRow, {
    title: filterRowTitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null);
};
exports.PivotTableTitleRows = PivotTableTitleRows;
PivotTableTitleRows.propTypes = {
  clippingResult: _propTypes.default.object.isRequired,
  width: _propTypes.default.number.isRequired
};