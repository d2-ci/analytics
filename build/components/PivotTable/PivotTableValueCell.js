"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableValueCell = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _applyLegendSet = require("../../modules/pivotTable/applyLegendSet");

var _PivotTableCell = require("./PivotTableCell");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _pivotTableConstants = require("../../modules/pivotTable/pivotTableConstants");

var _PivotTableEmptyCell = require("./PivotTableEmptyCell");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PivotTableValueCell = function PivotTableValueCell(_ref) {
  var _cellContent$rendered;

  var row = _ref.row,
      column = _ref.column,
      onToggleContextualMenu = _ref.onToggleContextualMenu;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var cellRef = (0, _react.useRef)(undefined);
  var cellContent = engine.get({
    row: row,
    column: column
  });
  var isClickable = onToggleContextualMenu && cellContent.cellType === _pivotTableConstants.CELL_TYPE_VALUE && cellContent.ouId;
  var classes = [cellContent.cellType, cellContent.valueType, isClickable && 'clickable'];

  var onClick = function onClick() {
    onToggleContextualMenu(cellRef, cellContent);
  };

  if (!cellContent || cellContent.empty) {
    return /*#__PURE__*/_react.default.createElement(_PivotTableEmptyCell.PivotTableEmptyCell, {
      onClick: isClickable ? onClick : undefined,
      ref: cellRef,
      classes: [cellContent.cellType, isClickable && 'clickable']
    });
  } // TODO: Add support for 'INTEGER' type (requires server changes)


  var legendStyle = cellContent.cellType === _pivotTableConstants.CELL_TYPE_VALUE && cellContent.valueType === _pivotTableConstants.VALUE_TYPE_NUMBER ? (0, _applyLegendSet.applyLegendSet)(cellContent.rawValue, cellContent.dxDimension, engine) : undefined;
  var width = engine.columnWidths[engine.columnMap[column]].width;

  var style = _objectSpread(_objectSpread({}, legendStyle), {}, {
    width: width,
    minWidth: width,
    maxWidth: width
  });

  return /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    key: column,
    classes: classes,
    title: cellContent.renderedValue,
    style: style,
    onClick: isClickable ? onClick : undefined,
    ref: cellRef
  }, (_cellContent$rendered = cellContent.renderedValue) !== null && _cellContent$rendered !== void 0 ? _cellContent$rendered : null);
};

exports.PivotTableValueCell = PivotTableValueCell;
PivotTableValueCell.propTypes = {
  column: _propTypes.default.number.isRequired,
  row: _propTypes.default.number.isRequired,
  onToggleContextualMenu: _propTypes.default.func
};