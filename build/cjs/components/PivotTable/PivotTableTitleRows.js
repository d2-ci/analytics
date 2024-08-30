"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotTableTitleRows = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _getFilterText = _interopRequireDefault(require("../../visualizations/util/getFilterText.js"));

var _PivotTableEngineContext = require("./PivotTableEngineContext.js");

var _PivotTableTitleRow = require("./PivotTableTitleRow.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PivotTableTitleRows = _ref => {
  var _engine$visualization;

  let {
    clippingResult,
    width
  } = _ref;
  const engine = (0, _PivotTableEngineContext.usePivotTableEngine)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, engine.options.title ? /*#__PURE__*/_react.default.createElement(_PivotTableTitleRow.PivotTableTitleRow, {
    title: engine.options.title,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, engine.options.subtitle ? /*#__PURE__*/_react.default.createElement(_PivotTableTitleRow.PivotTableTitleRow, {
    title: engine.options.subtitle,
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null, (_engine$visualization = engine.visualization.filters) !== null && _engine$visualization !== void 0 && _engine$visualization.length ? /*#__PURE__*/_react.default.createElement(_PivotTableTitleRow.PivotTableTitleRow, {
    title: (0, _getFilterText.default)(engine.visualization.filters, engine.rawData.metaData),
    scrollPosition: clippingResult.scrollPosition,
    containerWidth: width
  }) : null);
};

exports.PivotTableTitleRows = PivotTableTitleRows;
PivotTableTitleRows.propTypes = {
  clippingResult: _propTypes.default.object.isRequired,
  width: _propTypes.default.number.isRequired
};