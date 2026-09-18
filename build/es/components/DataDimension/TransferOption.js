import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { IconEdit16, IconInfo16, IconList16, Tooltip } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM, DIMENSION_TYPE_PROGRAM_ATTRIBUTE, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT } from '../../modules/dataTypes.js';
import styles from './styles/TransferOption.style.js';
export const TransferOption = ({
  disabled,
  label,
  highlighted,
  selected,
  onClick,
  onDoubleClick,
  value,
  icon,
  active,
  dataItemType,
  dimensionType,
  dataTest,
  optionSetId,
  itemsRef,
  showingInfo,
  onEditClick,
  onInfoClick
}) => {
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
  }, label), dataItemType === DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM &&
  // XXX check needed?!
  onEditClick && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onEditClick();
    },
    "data-test": `${dataTest}-edit-calculation-button`,
    className: `jsx-${styles.__hash}` + " " + "edit"
  }, /*#__PURE__*/React.createElement(IconEdit16, null)), [DIMENSION_TYPE_PROGRAM_ATTRIBUTE, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT].includes(dataItemType) && optionSetId && /*#__PURE__*/React.createElement(Tooltip, {
    "aria-label": "disabled",
    content: i18n.t('Click to choose from available options'),
    openDelay: 500,
    closeDelay: 0
  }, ({
    ref,
    onMouseOver,
    onMouseOut
  }) => /*#__PURE__*/React.createElement("span", {
    ref: ref,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onClick: e => {
      e.stopPropagation();
      onMouseOut();
      onEditClick();
    },
    "data-test": `${dataTest}-option-set-button`,
    className: `jsx-${styles.__hash}` + " " + "option-set-button"
  }, /*#__PURE__*/React.createElement(IconList16, null)))), /*#__PURE__*/React.createElement("div", {
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
  dataItemType: PropTypes.string,
  dataTest: PropTypes.string,
  dimensionType: PropTypes.string,
  disabled: PropTypes.bool,
  highlighted: PropTypes.bool,
  icon: PropTypes.node,
  itemsRef: PropTypes.object,
  optionSetId: PropTypes.string,
  selected: PropTypes.bool,
  showingInfo: PropTypes.bool,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onInfoClick: PropTypes.func
};