"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableValueCell = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _applyLegendSet = require("../../modules/pivotTable/applyLegendSet.js");
var _pivotTableConstants = require("../../modules/pivotTable/pivotTableConstants.js");
var _valueTypes = require("../../modules/valueTypes.js");
var _PivotTableCell = require("./PivotTableCell.js");
var _PivotTableEmptyCell = require("./PivotTableEmptyCell.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableValueCell = _ref => {
  var _cellContent$rendered;
  let {
    row,
    column,
    onToggleContextualMenu
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const cellRef = (0, _react.useRef)(undefined);
  const cellContent = engine.get({
    row,
    column
  });
  const isClickable = onToggleContextualMenu && cellContent.cellType === _pivotTableConstants.CELL_TYPE_VALUE && cellContent.ouId;
  const classes = [cellContent.cellType, cellContent.valueType, isClickable && 'clickable'];
  const onClick = () => {
    onToggleContextualMenu(cellRef.current, {
      ouId: cellContent.ouId
    });
  };
  if (!cellContent || cellContent.empty) {
    return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
      onClick: isClickable ? onClick : undefined,
      ref: cellRef,
      classes: [cellContent.cellType, isClickable && 'clickable']
    });
  }

  // TODO: Add support for 'INTEGER' type (requires server changes)
  const legendStyle = cellContent.cellType === _pivotTableConstants.CELL_TYPE_VALUE && cellContent.valueType === _valueTypes.VALUE_TYPE_NUMBER ? (0, _applyLegendSet.applyLegendSet)(cellContent.rawValue, cellContent.dxDimension, engine) : undefined;
  const width = engine.adaptiveClippingController.columns.sizes[engine.columnMap[column]].size;
  const height = engine.adaptiveClippingController.rows.sizes[engine.rowMap[row]].size;
  const style = {
    ...legendStyle,
    width,
    height,
    whiteSpace: 'pre-line'
  };
  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    key: column,
    classes: classes,
    title: cellContent.renderedValue,
    style: style,
    onClick: isClickable ? onClick : undefined,
    ref: cellRef,
    dataTest: 'visualization-value-cell'
  }, (_cellContent$rendered = cellContent.renderedValue) !== null && _cellContent$rendered !== void 0 ? _cellContent$rendered : null);
};
exports.PivotTableValueCell = PivotTableValueCell;
PivotTableValueCell.propTypes = {
  column: _propTypes.default.number.isRequired,
  row: _propTypes.default.number.isRequired,
  onToggleContextualMenu: _propTypes.default.func
};