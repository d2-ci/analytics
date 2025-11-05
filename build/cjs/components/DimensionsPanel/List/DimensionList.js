"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _predefinedDimensions = require("../../../modules/predefinedDimensions.js");
var _DimensionItem = _interopRequireDefault(require("./DimensionItem.js"));
var _DimensionListStyle = _interopRequireDefault(require("./styles/DimensionList.style.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class DimensionList extends _react.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "nameContainsFilterText", dimension => dimension.name.toLowerCase().includes(this.props.filterText.toLowerCase()));
    _defineProperty(this, "isDisabled", dimensionId => this.props.disabledDimension(dimensionId) || false);
    _defineProperty(this, "isRecommended", dimensionId => this.props.recommendedDimension(dimensionId) || false);
    _defineProperty(this, "isLocked", dimensionId => this.props.lockedDimension(dimensionId) || false);
    _defineProperty(this, "renderItem", dimension => /*#__PURE__*/_react.default.createElement(_DimensionItem.default, {
      id: dimension.id,
      key: dimension.id,
      name: dimension.name,
      isLocked: this.isLocked(dimension.id),
      isSelected: this.props.selectedIds.includes(dimension.id),
      isRecommended: this.isRecommended(dimension.id),
      isDeactivated: this.isDisabled(dimension.id),
      onClick: this.props.onDimensionClick,
      onOptionsClick: this.props.onDimensionOptionsClick,
      onDragStart: this.props.onDimensionDragStart,
      dataTest: "dimension-item"
    }));
    _defineProperty(this, "getDimensionItemsByFilter", filter => this.props.dimensions.filter(filter).filter(this.nameContainsFilterText).map(this.renderItem));
  }
  render() {
    const fixedDimensions = this.getDimensionItemsByFilter(dimension => Object.values((0, _predefinedDimensions.getFixedDimensions)()).some(fixedDim => fixedDim.id === dimension.id));
    const nonPredefinedDimensions = this.getDimensionItemsByFilter(dimension => !Object.values((0, _predefinedDimensions.getPredefinedDimensions)()).some(predefDim => predefDim.id === dimension.id));
    return /*#__PURE__*/_react.default.createElement("div", {
      "data-test": "dhis2-analytics-dimension-list",
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "wrapper"
    }, fixedDimensions !== null && fixedDimensions !== void 0 && fixedDimensions.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "section"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "header"
    }, _index.default.t('Main dimensions')), /*#__PURE__*/_react.default.createElement("ul", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "list"
    }, fixedDimensions)) : null, nonPredefinedDimensions !== null && nonPredefinedDimensions !== void 0 && nonPredefinedDimensions.length ? /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "section"
    }, /*#__PURE__*/_react.default.createElement("h3", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "header"
    }, _index.default.t('Your dimensions')), /*#__PURE__*/_react.default.createElement("ul", {
      className: `jsx-${_DimensionListStyle.default.__hash}` + " " + "list"
    }, nonPredefinedDimensions)) : null), /*#__PURE__*/_react.default.createElement(_style.default, {
      id: _DimensionListStyle.default.__hash
    }, _DimensionListStyle.default));
  }
}
_defineProperty(DimensionList, "defaultProps", {
  selectedIds: [],
  disabledDimension: Function.prototype,
  lockedDimension: Function.prototype,
  recommendedDimension: Function.prototype
});
DimensionList.propTypes = {
  dimensions: _propTypes.default.array.isRequired,
  filterText: _propTypes.default.string.isRequired,
  disabledDimension: _propTypes.default.func,
  lockedDimension: _propTypes.default.func,
  recommendedDimension: _propTypes.default.func,
  selectedIds: _propTypes.default.array,
  onDimensionClick: _propTypes.default.func,
  onDimensionDragStart: _propTypes.default.func,
  onDimensionOptionsClick: _propTypes.default.func
};
var _default = exports.default = DimensionList;