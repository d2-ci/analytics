import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React from 'react';
import { getCommonFields, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const optionQuery = {
  option: {
    resource: 'options',
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: _ref2 => {
      let {
        displayNameProp
      } = _ref2;
      return {
        fields: getCommonFields(displayNameProp)
      };
    }
  }
};
export const OptionInfo = _ref3 => {
  let {
    type,
    id,
    displayNameProp
  } = _ref3;
  const {
    loading,
    error,
    data
  } = useDataQuery(optionQuery, {
    variables: {
      id: id.split('.').reverse()[0],
      displayNameProp
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.option,
    loading: loading,
    error: error
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
OptionInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string
};