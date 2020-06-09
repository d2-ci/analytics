"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableSortIcon = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _pivotTableConstants = require("../../modules/pivotTable/pivotTableConstants");

var _PivotTable = require("./styles/PivotTable.style");

var _SortIconAscending = require("./icons/SortIconAscending");

var _SortIconDescending = require("./icons/SortIconDescending");

var _SortIconIdle = require("./icons/SortIconIdle");

var PivotTableSortIcon = function PivotTableSortIcon(_ref) {
  var index = _ref.index,
      sortBy = _ref.sortBy;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var SortIcon = (sortBy === null || sortBy === void 0 ? void 0 : sortBy.column) === index ? sortBy.order === _pivotTableConstants.SORT_ORDER_ASCENDING ? _SortIconAscending.SortIconAscending : _SortIconDescending.SortIconDescending : _SortIconIdle.SortIconIdle;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "jsx-".concat(_PivotTable.sortIcon.__hash) + " " + "fontsize-".concat(engine.visualization.fontSize)
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTable.sortIcon.__hash
  }, _PivotTable.sortIcon), /*#__PURE__*/_react.default.createElement(SortIcon, {
    className: "jsx-".concat(_PivotTable.sortIcon.__hash)
  }));
};

exports.PivotTableSortIcon = PivotTableSortIcon;
PivotTableSortIcon.propTypes = {
  index: _propTypes.default.number.isRequired,
  sortBy: _propTypes.default.object
};