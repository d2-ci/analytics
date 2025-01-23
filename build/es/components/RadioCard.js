import _JSXStyle from "styled-jsx/style";
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles/RadioCard.style.js';
export const RadioCard = _ref => {
  let {
    id,
    name,
    checked,
    onChange,
    icon,
    title,
    subtitle
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: `jsx-${styles.__hash}` + " " + (cx('radio-card', {
      checked
    }) || "")
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: id,
    name: name,
    checked: checked,
    onChange: onChange,
    className: `jsx-${styles.__hash}`
  }), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content"
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "text"
  }, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "title"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "subtitle"
  }, subtitle)))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
RadioCard.propTypes = {
  checked: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func
};