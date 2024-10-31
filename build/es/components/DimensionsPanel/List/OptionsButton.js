import _JSXStyle from "styled-jsx/style";
import { IconMore16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const OptionsButton = _ref => {
  let {
    onClick
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: "jsx-2728765288"
  }, /*#__PURE__*/React.createElement(IconMore16, null)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2728765288"
  }, ["button.jsx-2728765288{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:20px;width:20px;padding:0;border:none;background:none;outline:none;cursor:pointer;border-top-right-radius:2px;border-bottom-left-radius:2px;}", "button.jsx-2728765288:hover{background-color:rgba(0,0,0,0.09);}"]));
};
OptionsButton.propTypes = {
  onClick: PropTypes.func
};
export default OptionsButton;