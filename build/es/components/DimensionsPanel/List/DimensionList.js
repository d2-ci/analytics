import _JSXStyle from "styled-jsx/style";
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import i18n from '../../../locales/index.js';
import { getPredefinedDimensions, getFixedDimensions } from '../../../modules/predefinedDimensions.js';
import DimensionItem from './DimensionItem.js';
import styles from './styles/DimensionList.style.js';
class DimensionList extends Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "nameContainsFilterText", dimension => dimension.name.toLowerCase().includes(this.props.filterText.toLowerCase()));
    _defineProperty(this, "isDisabled", dimensionId => this.props.disabledDimension(dimensionId) || false);
    _defineProperty(this, "isRecommended", dimensionId => this.props.recommendedDimension(dimensionId) || false);
    _defineProperty(this, "isLocked", dimensionId => this.props.lockedDimension(dimensionId) || false);
    _defineProperty(this, "renderItem", dimension => /*#__PURE__*/React.createElement(DimensionItem, {
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
    const fixedDimensions = this.getDimensionItemsByFilter(dimension => Object.values(getFixedDimensions()).some(fixedDim => fixedDim.id === dimension.id));
    const nonPredefinedDimensions = this.getDimensionItemsByFilter(dimension => !Object.values(getPredefinedDimensions()).some(predefDim => predefDim.id === dimension.id));
    return /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "wrapper"
    }, fixedDimensions !== null && fixedDimensions !== void 0 && fixedDimensions.length ? /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "section"
    }, /*#__PURE__*/React.createElement("h3", {
      className: `jsx-${styles.__hash}` + " " + "header"
    }, i18n.t('Main dimensions')), /*#__PURE__*/React.createElement("ul", {
      className: `jsx-${styles.__hash}` + " " + "list"
    }, fixedDimensions)) : null, nonPredefinedDimensions !== null && nonPredefinedDimensions !== void 0 && nonPredefinedDimensions.length ? /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "section"
    }, /*#__PURE__*/React.createElement("h3", {
      className: `jsx-${styles.__hash}` + " " + "header"
    }, i18n.t('Your dimensions')), /*#__PURE__*/React.createElement("ul", {
      className: `jsx-${styles.__hash}` + " " + "list"
    }, nonPredefinedDimensions)) : null), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }
}
DimensionList.propTypes = {
  dimensions: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  disabledDimension: PropTypes.func,
  lockedDimension: PropTypes.func,
  recommendedDimension: PropTypes.func,
  selectedIds: PropTypes.array,
  onDimensionClick: PropTypes.func,
  onDimensionDragStart: PropTypes.func,
  onDimensionOptionsClick: PropTypes.func
};
DimensionList.defaultProps = {
  selectedIds: [],
  disabledDimension: Function.prototype,
  lockedDimension: Function.prototype,
  recommendedDimension: Function.prototype
};
export default DimensionList;