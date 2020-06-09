"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePivotTableEngine = exports.Provider = exports.PivotTableEngineContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PivotTableEngineContext = (0, _react.createContext)(null);
exports.PivotTableEngineContext = PivotTableEngineContext;

var Provider = function Provider(_ref) {
  var engine = _ref.engine,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(PivotTableEngineContext.Provider, {
    value: engine
  }, children);
};

exports.Provider = Provider;
Provider.propTypes = {
  engine: _propTypes.default.object.isRequired,
  children: _propTypes.default.node
};

var usePivotTableEngine = function usePivotTableEngine() {
  return (0, _react.useContext)(PivotTableEngineContext);
};

exports.usePivotTableEngine = usePivotTableEngine;