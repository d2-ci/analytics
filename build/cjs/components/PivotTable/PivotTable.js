"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _PivotTableEngine = require("../../modules/pivotTable/PivotTableEngine.js");
var _useParentSize = require("../../modules/pivotTable/useParentSize.js");
var _useSortableColumns = require("../../modules/pivotTable/useSortableColumns.js");
var _useTableClipping = require("../../modules/pivotTable/useTableClipping.js");
var _PivotTableBody = require("./PivotTableBody.js");
var _PivotTableContainer = require("./PivotTableContainer.js");
var _PivotTableEngineContext = require("./PivotTableEngineContext.js");
var _PivotTableHead = require("./PivotTableHead.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PivotTable = _ref => {
  let {
    visualization,
    data,
    legendSets,
    renderCounter,
    onToggleContextualMenu
  } = _ref;
  const containerRef = (0, _react.useRef)(undefined);
  const {
    width,
    height
  } = (0, _useParentSize.useParentSize)(containerRef, renderCounter);
  const engine = (0, _react.useMemo)(() => new _PivotTableEngine.PivotTableEngine(visualization, data, legendSets), [visualization, data, legendSets]);
  const {
    sortBy,
    onSortByColumn
  } = (0, _useSortableColumns.useSortableColumns)(engine);
  const clippingResult = (0, _useTableClipping.useTableClipping)({
    containerRef,
    width,
    height,
    engine
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
var _default = exports.default = PivotTable;