import _JSXStyle from "styled-jsx/style";
import { Tooltip, colors, spacers } from '@dhis2/ui';
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
    dataTest
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
      className: _JSXStyle.dynamic([["3807261824", [spacers.dp4, colors.grey700, colors.teal600, colors.grey900, colors.teal800, colors.teal500, colors.teal700]]]) + " " + "wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: event => {
        event.stopPropagation();
        onClick();
      },
      disabled: disabled,
      "data-test": dataTest,
      className: _JSXStyle.dynamic([["3807261824", [spacers.dp4, colors.grey700, colors.teal600, colors.grey900, colors.teal800, colors.teal500, colors.teal700]]]) + " " + (cx('button', {
        selected
      }) || "")
    }, count && count, /*#__PURE__*/React.createElement(Icon, null)), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: "3807261824",
      dynamic: [spacers.dp4, colors.grey700, colors.teal600, colors.grey900, colors.teal800, colors.teal500, colors.teal700]
    }, [".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", ".button.__jsx-style-dynamic-selector{all:unset;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:".concat(spacers.dp4, ";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;line-height:14px;color:").concat(colors.grey700, ";}"), ".button.selected.__jsx-style-dynamic-selector{color:".concat(colors.teal600, ";font-weight:500;}"), ".button.__jsx-style-dynamic-selector:hover{color:".concat(colors.grey900, ";}"), ".button.selected.__jsx-style-dynamic-selector:hover{color:".concat(colors.teal800, ";}"), ".button.selected.__jsx-style-dynamic-selector svg{color:".concat(colors.teal500, ";}"), ".button.selected.__jsx-style-dynamic-selector:hover svg{color:".concat(colors.teal700, ";}")]));
  });
};

MessageIconButton.propTypes = {
  iconComponent: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  tooltipContent: PropTypes.string.isRequired,
  count: PropTypes.number,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func
};
export { MessageIconButton };