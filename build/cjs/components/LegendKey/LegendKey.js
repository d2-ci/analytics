"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _LegendKeyStyle = _interopRequireDefault(require("./styles/LegendKey.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const LegendKey = _ref => {
  let {
    legendSets
  } = _ref;
  return legendSets.length ? /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "legend-key-container",
    className: `jsx-${_LegendKeyStyle.default.__hash}` + " " + "container"
  }, legendSets.map((legendSet, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: legendSet.id,
    "data-test": `legend-key-item-${legendSet.id}`,
    className: `jsx-${_LegendKeyStyle.default.__hash}` + " " + ((0, _classnames.default)('legendSet', {
      divider: index > 0
    }) || "")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_LegendKeyStyle.default.__hash}` + " " + "legendSetName"
  }, legendSet.name), legendSet.legends.sort((a, b) => a.startValue - b.startValue).map(legend => /*#__PURE__*/_react.default.createElement("div", {
    key: legend.startValue,
    style: {
      borderLeft: `6px ${legend.color} solid`
    },
    className: `jsx-${_LegendKeyStyle.default.__hash}` + " " + "legend"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_LegendKeyStyle.default.__hash}`
  }, legend.name), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_LegendKeyStyle.default.__hash}` + " " + "values"
  }, `${legend.startValue}-<${legend.endValue}`))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _LegendKeyStyle.default.__hash
  }, _LegendKeyStyle.default)) : null;
};
LegendKey.propTypes = {
  legendSets: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    legends: _propTypes.default.arrayOf(_propTypes.default.shape({
      color: _propTypes.default.string.isRequired,
      endValue: _propTypes.default.number.isRequired,
      name: _propTypes.default.string.isRequired,
      startValue: _propTypes.default.number.isRequired
    })).isRequired
  })).isRequired
};
var _default = LegendKey;
exports.default = _default;