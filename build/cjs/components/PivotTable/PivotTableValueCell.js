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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PivotTableValueCell = _ref => {
  var _cellContent$titleVal, _cellContent$rendered;
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