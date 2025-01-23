import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { getIcon } from '../../../../modules/dimensionListItem.js';
import styles from '../../styles/TransferOption.style.js';
export const TransferOption = _ref => {
  let {
    disabled,
    label,
    highlighted,
    selected,
    onClick,
    onDoubleClick,
    value,
    active,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    "data-value": value,
    "data-test": dataTest,
    className: `jsx-${styles.__hash}` + " " + "wrapper"
  }, /*#__PURE__*/React.createElement("div", {
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
    className: `jsx-${styles.__hash}` + " " + (cx('item', {
      highlighted,
      disabled,
      selected,
      inactive: active !== undefined && !active
    }) || "")
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "labelGroup"
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "icon"
  }, getIcon()), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
TransferOption.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func
};