import _JSXStyle from "styled-jsx/style";
import { IconMore16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
const OptionsButton = ({
  onClick
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
  onClick: onClick,
  className: "jsx-2074438274"
}, /*#__PURE__*/React.createElement(IconMore16, null)), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "2074438274"
}, ["button.jsx-2074438274{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;width:20px;padding:0;border:none;background:none;outline:none;cursor:pointer;border-top-right-radius:2px;border-bottom-left-radius:2px;}", "button.jsx-2074438274:hover{background-color:rgba(33,41,52,0.08);}", "button.jsx-2074438274:active{background-color:rgba(33,41,52,0.13);}"]));
OptionsButton.propTypes = {
  onClick: PropTypes.func
};
export default OptionsButton;