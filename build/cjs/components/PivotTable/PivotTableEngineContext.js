"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePivotTableEngine = exports.Provider = exports.PivotTableEngineContext = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PivotTableEngineContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.PivotTableEngineContext = PivotTableEngineContext;
const Provider = _ref => {
  let {
    engine,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(PivotTableEngineContext.Provider, {
    value: engine
  }, children);
};
exports.Provider = Provider;
Provider.propTypes = {
  engine: _propTypes.default.object.isRequired,
  children: _propTypes.default.node
};
const usePivotTableEngine = () => {
  return (0, _react.useContext)(PivotTableEngineContext);
};
exports.usePivotTableEngine = usePivotTableEngine;