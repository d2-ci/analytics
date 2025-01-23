import _JSXStyle from "styled-jsx/style";
import { IconEdit16, IconInfo16 } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import i18n from '../../locales/index.js';
import { DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM } from '../../modules/dataTypes.js';
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
    dataItemType,
    dimensionType,
    dataTest,
    optionSet,
    optionSetId,
    itemsRef,
    showingInfo,
    onEditClick,
    onInfoClick
  } = _ref;
  const renderContent = () => {
    var _optionSet$options;
    return /*#__PURE__*/React.createElement("div", {
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
    }, label), dataItemType === DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && onEditClick && /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "tag"
    }, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        onEditClick();
      },
      "data-test": `${dataTest}-edit-calculation-button`,
      className: `jsx-${styles.__hash}` + " " + "edit"
    }, /*#__PURE__*/React.createElement(IconEdit16, null), i18n.t('Edit'))), optionSetId && /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "tag"
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "type"
    }, i18n.t('Option set'), selected && (optionSet !== null && optionSet !== void 0 && (_optionSet$options = optionSet.options) !== null && _optionSet$options !== void 0 && _optionSet$options.length ? `: ${optionSet.options.length}` : i18n.t(': ALL', {
      nsSeparator: '^^'
    }))), selected && onEditClick && /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        onEditClick();
      },
      "data-test": `${dataTest}-edit-option-set-button`,
      className: `jsx-${styles.__hash}` + " " + "edit option-set"
    }, /*#__PURE__*/React.createElement(IconEdit16, null), i18n.t('Edit')))), /*#__PURE__*/React.createElement("div", {
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
  };
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
  optionSet: PropTypes.object,
  optionSetId: PropTypes.string,
  selected: PropTypes.bool,
  showingInfo: PropTypes.bool,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onEditClick: PropTypes.func,
  onInfoClick: PropTypes.func
};