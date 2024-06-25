"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableTitleRow = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _PivotTableCell = require("./PivotTableCell.js");

var _PivotTableEngineContext = require("./PivotTableEngineContext.js");

var _PivotTableStyle = require("./styles/PivotTable.style.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PivotTableTitleRow = _ref => {
  let {
    title,
    scrollPosition,
    containerWidth,
    totalWidth
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  const columnCount = engine.width + engine.rowDepth;
  const [position, setPosition] = (0, _react.useState)(scrollPosition.x);
  (0, _react.useEffect)(() => {
    setPosition(Math.max(0, Math.min(scrollPosition.x, totalWidth - containerWidth)));
  }, [containerWidth, scrollPosition.x, totalWidth]);
  return /*#__PURE__*/_react.default.createElement("tr", {
    className: "jsx-".concat(_PivotTableStyle.cell.__hash)
  }, /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _PivotTableStyle.cell.__hash
  }, _PivotTableStyle.cell), /*#__PURE__*/_react.default.createElement(_PivotTableCell.PivotTableCell, {
    isHeader: true,
    classes: ['column-header', 'title'],
    colSpan: columnCount
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginLeft: position,
      maxWidth: containerWidth,
      textAlign: 'center'
    },
    "data-test": "visualization-title",
    className: "jsx-".concat(_PivotTableStyle.cell.__hash)
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