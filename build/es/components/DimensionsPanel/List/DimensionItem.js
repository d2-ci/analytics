import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { CssVariables } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import DynamicDimensionIcon from '../../../assets/DynamicDimensionIcon.js';
import { DIMENSION_PROP_NO_ITEMS, getPredefinedDimensionProp } from '../../../modules/predefinedDimensions.js';
import OptionsButton from './OptionsButton.js';
import RecommendedIcon from './RecommendedIcon.js';
import styles from './styles/DimensionItem.style.js';
class DimensionItem extends Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      mouseOver: false
    });
    _defineProperty(this, "onOptionsClick", (id, ref) => event => this.props.onOptionsClick(event, id, ref));
    _defineProperty(this, "onMouseOver", () => {
      this.setState({
        mouseOver: true
      });
    });
    _defineProperty(this, "onMouseExit", () => {
      this.setState({
        mouseOver: false
      });
    });
    _defineProperty(this, "getDimensionIcon", () => {
      const Icon = getPredefinedDimensionProp(this.props.id, 'icon');
      return Icon ? /*#__PURE__*/React.createElement(Icon, {
        className: "fixedDimensionIcon"
      }) : /*#__PURE__*/React.createElement(DynamicDimensionIcon, {
        className: "dynamic-dimension-icon"
      });
    });
    _defineProperty(this, "getDimensionType", () => {
      const {
        id,
        name
      } = this.props;
      return /*#__PURE__*/React.createElement("span", {
        "data-dimensionid": id
      }, name);
    });
  }
  render() {
    const {
      id,
      isDeactivated,
      isSelected,
      isRecommended,
      isLocked,
      onClick,
      onOptionsClick,
      innerRef,
      dataTest,
      className,
      ...rest
    } = this.props;
    const Icon = this.getDimensionIcon();
    const Label = this.getDimensionType();
    const optionsRef = /*#__PURE__*/createRef();
    const LockIcon = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "lockWrapper"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "7",
      height: "9",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1A1.5 1.5 0 0 0 2 2.5V3h3v-.5A1.5 1.5 0 0 0 3.5 1ZM1 2.5V3H0v6h7V3H6v-.5a2.5 2.5 0 0 0-5 0ZM1 8V4h5v4H1Zm3-1V5H3v2h1Z",
      fill: "none",
      className: `jsx-${styles.__hash}`
    }))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
    const onLabelClick = () => {
      if (!isDeactivated && !getPredefinedDimensionProp(id, DIMENSION_PROP_NO_ITEMS)) {
        onClick(id);
      }
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CssVariables, {
      colors: true
    }), /*#__PURE__*/React.createElement("li", _extends({
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseExit,
      ref: innerRef,
      "data-test": dataTest,
      onClick: onLabelClick
    }, rest, {
      className: `jsx-${styles.__hash}` + " " + (rest && rest.className != null && rest.className || cx('item', {
        deactivated: isDeactivated,
        selected: isSelected && !isDeactivated
      }, className) || "")
    }), /*#__PURE__*/React.createElement("div", {
      tabIndex: 0,
      "data-test": `${dataTest}-button-${id}`,
      className: `jsx-${styles.__hash}` + " " + "label"
    }, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "iconWrapper"
    }, Icon), /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "labelWrapper"
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "labelText"
    }, Label), /*#__PURE__*/React.createElement(RecommendedIcon, {
      isRecommended: isRecommended,
      dataTest: `${dataTest}-recommended-icon`
    }))), onOptionsClick && !isDeactivated && !isLocked ? /*#__PURE__*/React.createElement("div", {
      ref: optionsRef,
      "data-test": `${dataTest}-menu-${id}`,
      className: `jsx-${styles.__hash}` + " " + "optionsWrapper"
    }, this.state.mouseOver ? /*#__PURE__*/React.createElement(OptionsButton, {
      onClick: this.onOptionsClick(id, optionsRef)
    }) : null) : null, isLocked && LockIcon), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }
}
DimensionItem.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  // XXX
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  innerRef: PropTypes.func,
  isDeactivated: PropTypes.bool,
  isLocked: PropTypes.bool,
  isRecommended: PropTypes.bool,
  onClick: PropTypes.func,
  onOptionsClick: PropTypes.func
};
DimensionItem.defaultProps = {
  isDeactivated: false,
  isRecommended: false,
  isSelected: false,
  isLocked: false,
  onClick: Function.prototype,
  innerRef: Function.prototype,
  style: {}
};
export default DimensionItem;