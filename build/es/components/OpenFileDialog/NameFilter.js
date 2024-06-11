import i18n from '@dhis2/d2-i18n';
import { Input } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
export const NameFilter = _ref => {
  let {
    dataTest,
    value,
    onChange
  } = _ref;
  return /*#__PURE__*/React.createElement(Input, {
    type: "search",
    placeholder: i18n.t('Filter by name'),
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return onChange(value);
    },
    value: value,
    initialFocus: true,
    dense: true,
    dataTest: dataTest
  });
};
NameFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  value: PropTypes.string
};
export default NameFilter;