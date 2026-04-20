import _JSXStyle from "styled-jsx/style";
import { Tooltip, colors, theme } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
const MessageIconButton = ({
  tooltipContent,
  disabled,
  onClick,
  selected,
  confirming,
  label,
  iconComponent: Icon,
  dataTest,
  viewOnly
}) => /*#__PURE__*/React.createElement(Tooltip, {
  closeDelay: 200,
  content: tooltipContent
}, ({
  ref,
  onMouseOver,
  onMouseOut
}) => /*#__PURE__*/React.createElement("span", {
  ref: ref,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  className: _JSXStyle.dynamic([["1341860244", [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]]]) + " " + "wrapper"
}, /*#__PURE__*/React.createElement("button", {
  onClick: event => {
    event.stopPropagation();
    onClick();
  },
  disabled: disabled,
  "data-test": dataTest,
  className: _JSXStyle.dynamic([["1341860244", [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]]]) + " " + (cx('button', {
    selected,
    viewOnly,
    confirming
  }) || "")
}, /*#__PURE__*/React.createElement(Icon, null), label !== undefined && label !== null && /*#__PURE__*/React.createElement("span", {
  className: _JSXStyle.dynamic([["1341860244", [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]]]) + " " + "label"
}, label)), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "1341860244",
  dynamic: [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]
}, [".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", `.button.__jsx-style-dynamic-selector{all:unset;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:3px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;line-height:1;color:${colors.grey700};border:1px solid transparent;border-radius:5px;padding:3px 5px;}`, ".viewOnly.__jsx-style-dynamic-selector{cursor:default;}", `.button.selected.__jsx-style-dynamic-selector{color:${colors.teal600};font-weight:400;background-color:${colors.teal050};}`, `.button.__jsx-style-dynamic-selector:hover{color:${colors.grey900};background-color:${colors.grey200};}`, `.button.selected.__jsx-style-dynamic-selector:hover{color:${colors.teal800};}`, `.button.selected.__jsx-style-dynamic-selector svg{color:${colors.teal500};}`, `.button.selected.__jsx-style-dynamic-selector:hover svg{color:${colors.teal700};}`, `.button.confirming.__jsx-style-dynamic-selector{color:${colors.red700};background-color:${colors.red100};}`, `.button.confirming.__jsx-style-dynamic-selector svg{color:${colors.red700};}`, `.button.confirming.__jsx-style-dynamic-selector:hover{color:${colors.red800};background-color:${colors.red200};}`, `.button.confirming.__jsx-style-dynamic-selector:hover svg{color:${colors.red800};}`, `.button.__jsx-style-dynamic-selector:disabled{color:${theme.disabled};cursor:not-allowed;}`, `.button.__jsx-style-dynamic-selector:disabled svg{color:${theme.disabled};}`, `.button.__jsx-style-dynamic-selector:focus-visible{outline:2px solid ${theme.focus};outline-offset:-2px;}`])));
MessageIconButton.propTypes = {
  iconComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  tooltipContent: PropTypes.string.isRequired,
  confirming: PropTypes.bool,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  viewOnly: PropTypes.bool,
  onClick: PropTypes.func
};
export { MessageIconButton };