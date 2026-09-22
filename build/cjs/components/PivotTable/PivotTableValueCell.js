"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableValueCell = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _applyLegendSet = require("../../modules/pivotTable/applyLegendSet.js");
var _pivotTableConstants = require("../../modules/pivotTable/pivotTableConstants.js");
var _valueTypes = require("../../modules/valueTypes.js");
var _PivotTableCell = require("./PivotTableCell.js");
var _PivotTableEmptyCell = require("./PivotTableEmptyCell.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTableValueCell = ({
  row,
  column,
  onToggleContextualMenu
}) => {
  var _cellContent$titleVal, _cellContent$rendered;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const cellRef = (0, _react.useRef)(undefined);
  const cellContent = engine.get({
    row,
    column
  });

  // engine.get returns undefined when the requested cell falls outside the
  // current row/column maps (e.g. a degenerate matrix with no rows or
  // columns). Render an empty cell rather than dereferencing undefined.
  if (!cellContent) {
    return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
      ref: cellRef,
      classes: ['value']
    });
  }
  const isClickable = onToggleContextualMenu && cellContent.cellType === _pivotTableConstants.CELL_TYPE_VALUE && cellContent.ouId;
  const classes = [cellContent.cellType, cellContent.valueType, isClickable && 'clickable'];
  const onClick = () => {
    onToggleContextualMenu(cellRef.current, {
      ouId: cellContent.ouId
    });
  };
  if (cellContent.empty) {
    return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
      onClick: isClickable ? onClick : undefined,
      ref: cellRef,
      classes: [cellContent.cellType, isClickable && 'clickable']
    });
  }
  const legendStyle = cellContent.cellType === _pivotTableConstants.CELL_TYPE_VALUE && ((0, _valueTypes.isNumericValueType)(cellContent.valueType) || (0, _valueTypes.isBooleanValueType)(cellContent.valueType)) ? (0, _applyLegendSet.applyLegendSet)(cellContent.rawValue, cellContent.dxDimension, engine) : undefined;
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
    title: (_cellContent$titleVal = cellContent.titleValue) !== null && _cellContent$titleVal !== void 0 ? _cellContent$titleVal : _d2I18n.default.t('Value: {{value}}', {
      value: cellContent.renderedValue,
      nsSeparator: '^^'
    }),
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