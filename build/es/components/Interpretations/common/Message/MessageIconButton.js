import _JSXStyle from "styled-jsx/style";
import { Tooltip, colors, theme } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { CONFIRM_TIMEOUT_MS } from '../useConfirmClick.js';
const ProgressIcon = ({
  duration = CONFIRM_TIMEOUT_MS,
  size = 16,
  strokeWidth = 3
}) => {
  const r = (size - strokeWidth) / 2;
  const center = size / 2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    className: _JSXStyle.dynamic([["2708631270", [duration]]])
  }, /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: r,
    fill: "none",
    stroke: colors.red100,
    strokeWidth: strokeWidth,
    className: _JSXStyle.dynamic([["2708631270", [duration]]])
  }), /*#__PURE__*/React.createElement("circle", {
    cx: center,
    cy: center,
    r: r,
    fill: "none",
    stroke: colors.red800,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    pathLength: "100",
    strokeDasharray: "100",
    transform: `rotate(-90 ${center} ${center})`,
    className: _JSXStyle.dynamic([["2708631270", [duration]]]) + " " + "progress"
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2708631270",
    dynamic: [duration]
  }, [`.progress.__jsx-style-dynamic-selector{-webkit-animation:fill-ring-__jsx-style-dynamic-selector ${duration}ms ease-in-out forwards;animation:fill-ring-__jsx-style-dynamic-selector ${duration}ms ease-in-out forwards;}`, "@-webkit-keyframes fill-ring-__jsx-style-dynamic-selector{from{stroke-dashoffset:100;}to{stroke-dashoffset:0;}}", "@keyframes fill-ring-__jsx-style-dynamic-selector{from{stroke-dashoffset:100;}to{stroke-dashoffset:0;}}"]));
};
ProgressIcon.propTypes = {
  duration: PropTypes.number,
  size: PropTypes.number,
  strokeWidth: PropTypes.number
};
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
}) => /*#__PURE__*/React.createElement("button", {
  onClick: event => {
    event.stopPropagation();
    onClick();
  },
  disabled: disabled,
  "data-test": dataTest,
  className: _JSXStyle.dynamic([["1861678089", [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]]]) + " " + (cx('button', {
    selected,
    viewOnly,
    confirming
  }) || "")
}, /*#__PURE__*/React.createElement(Tooltip, {
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
  className: _JSXStyle.dynamic([["1861678089", [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]]]) + " " + "wrapper"
}, confirming ? /*#__PURE__*/React.createElement(ProgressIcon, null) : /*#__PURE__*/React.createElement(Icon, null))), label !== undefined && label !== null && /*#__PURE__*/React.createElement("span", {
  className: _JSXStyle.dynamic([["1861678089", [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]]]) + " " + "label"
}, label), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: "1861678089",
  dynamic: [colors.grey700, colors.teal600, colors.teal050, colors.grey900, colors.grey200, colors.teal800, colors.teal500, colors.teal700, colors.red700, colors.red100, colors.red700, colors.red800, colors.red200, colors.red800, theme.disabled, theme.disabled, theme.focus]
}, [".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", `.button.__jsx-style-dynamic-selector{all:unset;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:3px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;line-height:1;color:${colors.grey700};border:1px solid transparent;border-radius:5px;padding:3px 5px;}`, ".viewOnly.__jsx-style-dynamic-selector{cursor:default;}", `.button.selected.__jsx-style-dynamic-selector{color:${colors.teal600};font-weight:400;background-color:${colors.teal050};}`, `.button.__jsx-style-dynamic-selector:hover{color:${colors.grey900};background-color:${colors.grey200};}`, `.button.selected.__jsx-style-dynamic-selector:hover{color:${colors.teal800};}`, `.button.selected.__jsx-style-dynamic-selector svg{color:${colors.teal500};}`, `.button.selected.__jsx-style-dynamic-selector:hover svg{color:${colors.teal700};}`, `.button.confirming.__jsx-style-dynamic-selector{color:${colors.red700};background-color:${colors.red100};}`, `.button.confirming.__jsx-style-dynamic-selector svg{color:${colors.red700};}`, `.button.confirming.__jsx-style-dynamic-selector:hover{color:${colors.red800};background-color:${colors.red200};}`, `.button.confirming.__jsx-style-dynamic-selector:hover svg{color:${colors.red800};}`, `.button.__jsx-style-dynamic-selector:disabled{color:${theme.disabled};cursor:not-allowed;}`, `.button.__jsx-style-dynamic-selector:disabled svg{color:${theme.disabled};}`, `.button.__jsx-style-dynamic-selector:focus-visible{outline:2px solid ${theme.focus};outline-offset:-2px;}`]));
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