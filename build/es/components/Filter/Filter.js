import _JSXStyle from "styled-jsx/style";
import { InputField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/Filter.style.js';

const Filter = _ref => {
  let {
    text,
    onChange,
    onClear,
    placeholder,
    type,
    dataTest
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "container"
  }, /*#__PURE__*/React.createElement(InputField, {
    placeholder: placeholder,
    onChange: ref => ref.value.length ? onChange(ref.value) : onClear(),
    value: text,
    dense: true,
    type: type,
    dataTest: dataTest
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

Filter.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  text: PropTypes.string
};
Filter.defaultProps = {
  type: 'text'
};
export default Filter;