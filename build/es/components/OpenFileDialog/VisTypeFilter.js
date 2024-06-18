import i18n from '@dhis2/d2-i18n';
import { SingleSelect, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import { getDisplayNameByVisType, visTypeIcons } from '../../modules/visTypes.js';
import { VisTypeIcon } from '../VisTypeIcon.js';
import { CustomSelectOption } from './CustomSelectOption.js';
export const VisTypeFilter = _ref => {
  let {
    visTypes,
    selected,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement(SingleSelect, {
    selected: selected,
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onChange(selected);
    },
    prefix: i18n.t('Type'),
    dense: true,
    maxHeight: "400px"
  }, visTypes === null || visTypes === void 0 ? void 0 : visTypes.map(_ref3 => {
    let {
      type,
      disabled,
      insertDivider
    } = _ref3;
    return /*#__PURE__*/React.createElement(CustomSelectOption, {
      key: type,
      disabled: disabled,
      label: getDisplayNameByVisType(type),
      insertDivider: insertDivider,
      value: type,
      icon: visTypeIcons[type] ? /*#__PURE__*/React.createElement(VisTypeIcon, {
        type: type,
        useSmall: true,
        color: colors.grey600
      }) : undefined
    });
  }));
};
VisTypeFilter.propTypes = {
  selected: PropTypes.string,
  visTypes: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    insertDivider: PropTypes.bool,
    type: PropTypes.string
  })),
  onChange: PropTypes.func
};
export default VisTypeFilter;