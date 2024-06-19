"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableSortIcon = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _pivotTableConstants = require("../../modules/pivotTable/pivotTableConstants.js");
var _SortIconAscending = require("./icons/SortIconAscending.js");
var _SortIconDescending = require("./icons/SortIconDescending.js");
var _SortIconIdle = require("./icons/SortIconIdle.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableStyle = require("./styles/PivotTable.style.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableSortIcon = _ref => {
  let {
    index,
    sortBy
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const SortIcon = (sortBy === null || sortBy === void 0 ? void 0 : sortBy.column) === index ? sortBy.order === _pivotTableConstants.SORT_ORDER_ASCENDING ? _SortIconAscending.SortIconAscending : _SortIconDescending.SortIconDescending : _SortIconIdle.SortIconIdle;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_PivotTableStyle.sortIcon.__hash}` + " " + `fontsize-${engine.visualization.fontSize}`
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.sortIcon.__hash
  }, _PivotTableStyle.sortIcon), /*#__PURE__*/_react.default.createElement(SortIcon, {
    className: `jsx-${_PivotTableStyle.sortIcon.__hash}`
  }));
};
exports.PivotTableSortIcon = PivotTableSortIcon;
PivotTableSortIcon.propTypes = {
  index: _propTypes.default.number.isRequired,
  sortBy: _propTypes.default.object
};