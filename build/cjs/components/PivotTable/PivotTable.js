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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _default = PivotTable;
exports.default = _default;