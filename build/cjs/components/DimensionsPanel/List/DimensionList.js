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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class DimensionList extends _react.Component {
  constructor() {
    super(...arguments);
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
      onDragStart: this.props.onDimensionDragStart
    }));
    _defineProperty(this, "getDimensionItemsByFilter", filter => this.props.dimensions.filter(filter).filter(this.nameContainsFilterText).map(this.renderItem));
  }
  render() {
    const fixedDimensions = this.getDimensionItemsByFilter(dimension => Object.values((0, _predefinedDimensions.getFixedDimensions)()).some(fixedDim => fixedDim.id === dimension.id));
    const nonPredefinedDimensions = this.getDimensionItemsByFilter(dimension => !Object.values((0, _predefinedDimensions.getPredefinedDimensions)()).some(predefDim => predefDim.id === dimension.id));
    return /*#__PURE__*/_react.default.createElement("div", {
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
DimensionList.defaultProps = {
  selectedIds: [],
  disabledDimension: Function.prototype,
  lockedDimension: Function.prototype,
  recommendedDimension: Function.prototype
};
var _default = DimensionList;
exports.default = _default;