import _JSXStyle from "styled-jsx/style";
import { Tooltip, colors, spacers, theme } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
const MessageIconButton = _ref => {
  let {
    tooltipContent,
    disabled,
    onClick,
    selected,
    count,
    iconComponent: Icon,
    dataTest,
    viewOnly
  } = _ref;
  return /*#__PURE__*/React.createElement(Tooltip, {
    closeDelay: 200,
    content: tooltipContent
  }, _ref2 => {
    let {
      ref,
      onMouseOver,
      onMouseOut
    } = _ref2;
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      className: _JSXStyle.dynamic([["163818318", [spacers.dp4, colors.grey700, colors.teal600, colors.grey900, colors.teal800, colors.teal500, colors.teal700, theme.disabled, theme.disabled]]]) + " " + "wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: event => {
        event.stopPropagation();
        onClick();
      },
      disabled: disabled,
      "data-test": dataTest,
      className: _JSXStyle.dynamic([["163818318", [spacers.dp4, colors.grey700, colors.teal600, colors.grey900, colors.teal800, colors.teal500, colors.teal700, theme.disabled, theme.disabled]]]) + " " + (cx('button', {
        selected,
        viewOnly
      }) || "")
    }, count && count, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "163818318",
      dynamic: [spacers.dp4, colors.grey700, colors.teal600, colors.grey900, colors.teal800, colors.teal500, colors.teal700, theme.disabled, theme.disabled]
    }, [".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", `.button.__jsx-style-dynamic-selector{all:unset;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:${spacers.dp4};-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;line-height:14px;color:${colors.grey700};}`, ".viewOnly.__jsx-style-dynamic-selector{cursor:default;}", `.button.selected.__jsx-style-dynamic-selector{color:${colors.teal600};font-weight:500;}`, `.button.__jsx-style-dynamic-selector:hover{color:${colors.grey900};}`, `.button.selected.__jsx-style-dynamic-selector:hover{color:${colors.teal800};}`, `.button.selected.__jsx-style-dynamic-selector svg{color:${colors.teal500};}`, `.button.selected.__jsx-style-dynamic-selector:hover svg{color:${colors.teal700};}`, `.button.__jsx-style-dynamic-selector:disabled{color:${theme.disabled};cursor:not-allowed;}`, `.button.__jsx-style-dynamic-selector:disabled svg{color:${theme.disabled};}`]));
  });
};
MessageIconButton.propTypes = {
  iconComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  tooltipContent: PropTypes.string.isRequired,
  count: PropTypes.number,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  viewOnly: PropTypes.bool,
  onClick: PropTypes.func
};
export { MessageIconButton };