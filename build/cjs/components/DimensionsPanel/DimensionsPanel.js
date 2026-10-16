"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _Filter = _interopRequireDefault(require("../Filter/Filter.js"));
var _DimensionList = _interopRequireDefault(require("./List/DimensionList.js"));
var _DimensionsPanelStyle = require("./styles/DimensionsPanel.style.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class DimensionsPanel extends _react.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      filterText: ''
    });
    _defineProperty(this, "onClearFilter", () => {
      this.setState({
        filterText: ''
      });
    });
    _defineProperty(this, "onFilterTextChange", filterText => {
      this.setState({
        filterText
      });
    });
  }
  render() {
    const {
      dimensions,
      selectedIds,
      disabledDimension,
      lockedDimension,
      recommendedDimension,
      onDimensionClick,
      onDimensionOptionsClick,
      onDimensionDragStart,
      style
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        ..._DimensionsPanelStyle.styles.divContainer,
        ...style
      }
    }, /*#__PURE__*/_react.default.createElement(_Filter.default, {
      placeholder: _index.default.t('Filter dimensions'),
      text: this.state.filterText,
      onChange: this.onFilterTextChange,
      onClear: this.onClearFilter,
      type: "search"
    }), /*#__PURE__*/_react.default.createElement(_DimensionList.default, {
      dimensions: dimensions,
      selectedIds: selectedIds,
      filterText: this.state.filterText,
      disabledDimension: disabledDimension,
      lockedDimension: lockedDimension,
      recommendedDimension: recommendedDimension,
      onDimensionOptionsClick: onDimensionOptionsClick,
      onDimensionClick: onDimensionClick,
      onDimensionDragStart: onDimensionDragStart
    }));
  }
}
_defineProperty(DimensionsPanel, "defaultProps", {
  selectedIds: [],
  style: {},
  onDimensionClick: Function.prototype
});
DimensionsPanel.propTypes = {
  dimensions: _propTypes.default.array.isRequired,
  disabledDimension: _propTypes.default.func,
  lockedDimension: _propTypes.default.func,
  recommendedDimension: _propTypes.default.func,
  selectedIds: _propTypes.default.array,
  style: _propTypes.default.object,
  onDimensionClick: _propTypes.default.func,
  onDimensionDragStart: _propTypes.default.func,
  onDimensionOptionsClick: _propTypes.default.func
};
var _default = exports.default = DimensionsPanel;