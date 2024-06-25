function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { IconLock16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import DynamicDimensionIcon from '../../../assets/DynamicDimensionIcon.js';
import { DIMENSION_PROP_NO_ITEMS, getPredefinedDimensionProp } from '../../../modules/predefinedDimensions.js';
import OptionsButton from './OptionsButton.js';
import RecommendedIcon from './RecommendedIcon.js';
import { styles } from './styles/DimensionItem.style.js';

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
        style: styles.fixedDimensionIcon
      }) : /*#__PURE__*/React.createElement(DynamicDimensionIcon, {
        style: styles.dynamicDimensionIcon
      });
    });

    _defineProperty(this, "getDimensionType", () => {
      const {
        id,
        name,
        isDeactivated
      } = this.props;
      return /*#__PURE__*/React.createElement("span", {
        "data-dimensionid": id,
        style: { ...styles.text,
          ...(isDeactivated ? styles.textDeactivated : {})
        }
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
      style,
      dataTest,
      ...rest
    } = this.props;
    const Icon = this.getDimensionIcon();
    const Label = this.getDimensionType();
    const itemStyle = isSelected && !isDeactivated ? { ...styles.item,
      ...styles.selected
    } : styles.item;
    const optionsRef = /*#__PURE__*/createRef();

    const onLabelClick = () => {
      if (!isDeactivated && !getPredefinedDimensionProp(id, DIMENSION_PROP_NO_ITEMS)) {
        onClick(id);
      }
    };

    return /*#__PURE__*/React.createElement("li", _extends({
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseExit,
      ref: innerRef,
      style: Object.assign({}, itemStyle, style, !isDeactivated && styles.clickable),
      "data-test": dataTest,
      onClick: onLabelClick
    }, rest), /*#__PURE__*/React.createElement("div", {
      className: "label",
      tabIndex: 0,
      style: styles.label,
      "data-test": "".concat(dataTest, "-button-").concat(id)
    }, /*#__PURE__*/React.createElement("div", {
      style: styles.iconWrapper
    }, Icon), /*#__PURE__*/React.createElement("div", {
      style: styles.labelWrapper
    }, Label, /*#__PURE__*/React.createElement(RecommendedIcon, {
      isRecommended: isRecommended,
      dataTest: "".concat(dataTest, "-recommended-icon")
    })), isLocked && /*#__PURE__*/React.createElement("div", {
      style: styles.iconWrapper
    }, /*#__PURE__*/React.createElement(IconLock16, null))), onOptionsClick ? /*#__PURE__*/React.createElement("div", {
      style: styles.optionsWrapper,
      ref: optionsRef,
      "data-test": "".concat(dataTest, "-menu-").concat(id)
    }, this.state.mouseOver && !isDeactivated && !isLocked ? /*#__PURE__*/React.createElement(OptionsButton, {
      style: styles.optionsButton,
      onClick: this.onOptionsClick(id, optionsRef)
    }) : null) : null);
  }

}

DimensionItem.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  // XXX
  name: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  innerRef: PropTypes.func,
  isDeactivated: PropTypes.bool,
  isLocked: PropTypes.bool,
  isRecommended: PropTypes.bool,
  style: PropTypes.object,
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