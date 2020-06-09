"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTableEngine = require("../../modules/pivotTable/PivotTableEngine");

var _useParentSize2 = require("../../modules/pivotTable/useParentSize");

var _useTableClipping = require("../../modules/pivotTable/useTableClipping");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _PivotTableContainer = require("./PivotTableContainer");

var _PivotTableHead = require("./PivotTableHead");

var _PivotTableBody = require("./PivotTableBody");

var _useSortableColumns2 = require("../../modules/pivotTable/useSortableColumns");

var PivotTable = function PivotTable(_ref) {
  var visualization = _ref.visualization,
      data = _ref.data,
      legendSets = _ref.legendSets,
      renderCounter = _ref.renderCounter,
      onToggleContextualMenu = _ref.onToggleContextualMenu;
  var containerRef = (0, _react.useRef)(undefined);

  var _useParentSize = (0, _useParentSize2.useParentSize)(containerRef, renderCounter),
      width = _useParentSize.width,
      height = _useParentSize.height;

  var engine = (0, _react.useMemo)(function () {
    return new _PivotTableEngine.PivotTableEngine(visualization, data, legendSets);
  }, [visualization, data, legendSets]);

  var _useSortableColumns = (0, _useSortableColumns2.useSortableColumns)(engine),
      sortBy = _useSortableColumns.sortBy,
      onSortByColumn = _useSortableColumns.onSortByColumn;

  var clippingResult = (0, _useTableClipping.useTableClipping)({
    containerRef: containerRef,
    width: width,
    height: height,
    engine: engine,
    visualization: visualization
  });
  return /*#__PURE__*/_react.default.createElement(_PivotTableEngineContext.Provider, {
    engine: engine
  }, /*#__PURE__*/_react.default.createElement(_PivotTableContainer.PivotTableContainer, {
    ref: containerRef,
    width: width,
    height: height
  }, /*#__PURE__*/_react.default.createElement(_PivotTableHead.PivotTableHead, {
    clippingResult: clippingResult,
    width: width,
    sortBy: sortBy,
    onSortByColumn: onSortByColumn
  }), /*#__PURE__*/_react.default.createElement(_PivotTableBody.PivotTableBody, {
    clippingResult: clippingResult,
    onToggleContextualMenu: onToggleContextualMenu
  })));
};

PivotTable.propTypes = {
  data: _propTypes.default.object.isRequired,
  visualization: _propTypes.default.object.isRequired,
  legendSets: _propTypes.default.arrayOf(_propTypes.default.object),
  renderCounter: _propTypes.default.number,
  onToggleContextualMenu: _propTypes.default.func
};
var _default = PivotTable;
exports.default = _default;