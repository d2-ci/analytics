"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableColumnHeaders = void 0;

var _times = _interopRequireDefault(require("lodash/times"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _PivotTableClippedAxis = require("./PivotTableClippedAxis.js");

var _PivotTableColumnHeaderCell = require("./PivotTableColumnHeaderCell.js");

var _PivotTableDimensionLabelCell = require("./PivotTableDimensionLabelCell.js");

var _PivotTableEmptyCell = require("./PivotTableEmptyCell.js");

var _PivotTableEngineContext = require("./PivotTableEngineContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PivotTableColumnHeaders = _ref => {
  let {
    clippingResult,
    onSortByColumn,
    sortBy
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const columns = (0, _times.default)(engine.columnDepth, x => x);
  const rows = (0, _times.default)(engine.rowDepth, x => x);
  return columns.map(columnLevel => /*#__PURE__*/_react.default.createElement("tr", {
    key: columnLevel
  }, rows.map(rowLevel => /*#__PURE__*/_react.default.createElement(_PivotTableDimensionLabelCell.PivotTableDimensionLabelCell, {
    key: rowLevel,
    rowLevel: rowLevel,
    columnLevel: columnLevel
  })), /*#__PURE__*/_react.default.createElement(_PivotTableClippedAxis.PivotTableClippedAxis, {
    axisClippingResult: clippingResult.columns,
    EmptyComponent: _ref2 => {
      let {
        size
      } = _ref2;
      return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
        classes: "column-header",
        style: {
          minWidth: size
        }
      });
    },
    ItemComponent: _ref3 => {
      let {
        index
      } = _ref3;
      return /*#__PURE__*/_react.default.createElement(_PivotTableColumnHeaderCell.PivotTableColumnHeaderCell, {
        clippingResult: clippingResult,
        index: index,
        level: columnLevel,
        onSortByColumn: onSortByColumn,
        sortBy: sortBy
      });
    }
  })));
};

exports.PivotTableColumnHeaders = PivotTableColumnHeaders;
PivotTableColumnHeaders.propTypes = {
  clippingResult: _propTypes.default.shape({
    columns: _propTypes.default.object.isRequired
  }).isRequired,
  onSortByColumn: _propTypes.default.func.isRequired,
  sortBy: _propTypes.default.shape({
    column: _propTypes.default.number.isRequired,
    order: _propTypes.default.number.isRequired
  })
};