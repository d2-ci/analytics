import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { MenuDivider, Tooltip } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/CustomSelectOption.style.js';
const CustomSelectOptionItem = _ref => {
  let {
    value,
    label,
    icon,
    insertDivider,
    onClick,
    active,
    disabled
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: e => onClick({}, e),
    "data-value": value,
    "data-label": label,
    className: `jsx-${styles.__hash}` + " " + (cx({
      active,
      disabled
    }) || "")
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + (cx({
      label: icon
    }) || "")
  }, label), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles)), insertDivider && /*#__PURE__*/React.createElement(MenuDivider, {
    dense: true
  }));
};
export const CustomSelectOption = props => props.disabled ? /*#__PURE__*/React.createElement(Tooltip, {
  content: i18n.t('Not supported by this app yet')
}, /*#__PURE__*/React.createElement(CustomSelectOptionItem, props)) : /*#__PURE__*/React.createElement(CustomSelectOptionItem, props);
CustomSelectOption.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func
};
CustomSelectOptionItem.propTypes = CustomSelectOption.propTypes;
export default CustomSelectOption;