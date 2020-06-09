"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableTitleRow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PivotTable = require("./styles/PivotTable.style");

var _PivotTableEngineContext = require("./PivotTableEngineContext");

var _PivotTableCell = require("./PivotTableCell");

var PivotTableTitleRow = function PivotTableTitleRow(_ref) {
  var title = _ref.title,
      scrollPosition = _ref.scrollPosition,
      containerWidth = _ref.containerWidth,
      totalWidth = _ref.totalWidth;
  var engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  var columnCount = engine.width + engine.rowDepth;

  var _useState = (0, _react.useState)(scrollPosition.x),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  (0, _react.useEffect)(function () {
    setPosition(Math.max(0, Math.min(scrollPosition.x, totalWidth - containerWidth)));
  }, [containerWidth, scrollPosition.x, totalWidth]);
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: "jsx-".concat(_PivotTable.cell.__hash)
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTable.cell.__hash
  }, _PivotTable.cell), /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    classes: ['column-header', 'title'],
    colSpan: columnCount
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft: position,
      maxWidth: containerWidth,
      textAlign: 'center'
    },
    className: "jsx-".concat(_PivotTable.cell.__hash)
  }, title)));
};

exports.PivotTableTitleRow = PivotTableTitleRow;
PivotTableTitleRow.propTypes = {
  containerWidth: _propTypes.default.number.isRequired,
  scrollPosition: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired
  }).isRequired,
  title: _propTypes.default.string.isRequired,
  totalWidth: _propTypes.default.number.isRequired
};