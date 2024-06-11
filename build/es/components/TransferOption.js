import _JSXStyle from "styled-jsx/style";
import { Tooltip, IconEdit16 } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/TransferOption.style.js';
export const TransferOption = _ref => {
  let {
    disabled,
    label,
    highlighted,
    selected,
    onClick,
    onDoubleClick,
    value,
    icon,
    active,
    tooltipText,
    dataTest,
    onEditClick
  } = _ref;
  const renderContent = () => /*#__PURE__*/React.createElement("div", {
    "data-test": `${dataTest}-content`,
    onClick: event => {
      if (disabled) {
        return;
      }
      onClick({
        label,
        value
      }, event);
    },
    onDoubleClick: event => {
      if (disabled) {
        return;
      }
      onDoubleClick({
        label,
        value
      }, event);
    },
    className: `jsx-${styles.__hash}` + " " + (cx('chip', {
      highlighted,
      disabled,
      selected,
      inactive: active !== undefined && !active
    }) || "")
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label), onEditClick && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onEditClick();
    },
    "data-test": `${dataTest}-edit-button`,
    className: `jsx-${styles.__hash}` + " " + "edit"
  }, /*#__PURE__*/React.createElement(IconEdit16, null)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
  return /*#__PURE__*/React.createElement("div", {
    "data-value": value,
    "data-test": dataTest,
    className: "wrapper"
  }, tooltipText ? /*#__PURE__*/React.createElement(Tooltip, {
    key: `${value}`,
    content: tooltipText,
    placement: 'top',
    openDelay: 750,
    closeDelay: 150
  }, renderContent()) : renderContent());
};
TransferOption.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  icon: PropTypes.node,
  selected: PropTypes.bool,
  tooltipText: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onEditClick: PropTypes.func
};