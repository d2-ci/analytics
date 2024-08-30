import { useDataQuery } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { SingleSelect, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const query = {
  locales: {
    resource: 'locales/db'
  }
};
export const LocalesSelect = _ref => {
  let {
    onChange,
    selected
  } = _ref;
  const {
    data,
    fetching
  } = useDataQuery(query);
  return /*#__PURE__*/React.createElement(SingleSelect, {
    prefix: selected ? i18n.t('Translating to') : i18n.t('Choose a locale'),
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onChange(selected);
    },
    loading: fetching,
    selected: data && selected ? selected : '',
    dense: true
  }, data && data.locales // XXX remove duplicates ?! fr_SN - French (Senegal)
  .reduce((locales, _ref3) => {
    let {
      locale,
      name
    } = _ref3;

    if (!locales.find(entry => entry.locale === locale)) {
      locales.push({
        locale,
        name
      });
    }

    return locales;
  }, []).map(_ref4 => {
    let {
      locale,
      name
    } = _ref4;
    return /*#__PURE__*/React.createElement(SingleSelectOption, {
      key: locale,
      value: locale,
      label: name
    });
  }));
};
LocalesSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string
};