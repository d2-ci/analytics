import _JSXStyle from "styled-jsx/style";
import { IconEdit16, IconInfo16 } from '@dhis2/ui';
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
    dimensionType,
    dataTest,
    itemsRef,
    showingInfo,
    onEditClick,
    onInfoClick
  } = _ref;
  const renderContent = () => /*#__PURE__*/React.createElement("div", {
    "data-test": `${dataTest}-content`,
    onClick: event => {
      console.log('transfer option click');
      if (disabled) {
        return;
      }
      onClick({
        label,
        value
      }, event);
    },
    onDoubleClick: event => {
      console.log('transfer option double click');
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
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label), onEditClick && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onEditClick();
    },
    "data-test": `${dataTest}-edit-button`,
    className: `jsx-${styles.__hash}` + " " + "edit"
  }, /*#__PURE__*/React.createElement(IconEdit16, null))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + (cx('group', 'nowrap', 'typeGroup') || "")
  }, /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "type"
  }, dimensionType), /*#__PURE__*/React.createElement("span", {
    ref: node => {
      node ? itemsRef.current.set(value, node) : itemsRef.current.delete(value);
    }
    // avoid moving items when toggling the info popover
    // sometimes a double click event is fired
    ,
    onDoubleClick: e => e.stopPropagation(),
    onClick: e => {
      e.stopPropagation();
      onInfoClick();
    },
    "data-test": `${dataTest}-info-button`,
    className: `jsx-${styles.__hash}` + " " + (cx('info', {
      active: showingInfo
    }) || "")
  }, /*#__PURE__*/React.createElement(IconInfo16, null))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
  return /*#__PURE__*/React.createElement("div", {
    "data-value": value,
    "data-test": dataTest,
    className: "wrapper"
  }, renderContent());
};
TransferOption.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  active: PropTypes.bool,
  dataTest: PropTypes.string,
  dimensionType: PropTypes.string,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  icon: PropTypes.node,
  itemsRef: PropTypes.object,
  selected: PropTypes.bool,
  showingInfo: PropTypes.bool,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onInfoClick: PropTypes.func
};