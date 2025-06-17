import _JSXStyle from "styled-jsx/style";
import { Popper, Portal } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import menuButtonStyles from '../MenuButton.styles.js';
import { useHoverMenubarContext } from './HoverMenuBar.js';
export const HoverMenuDropdown = ({
  children,
  className,
  label,
  dataTest,
  disabled
}) => {
  const buttonRef = useRef();
  const {
    onDropDownButtonClick,
    onDropDownButtonMouseOver,
    openedDropdownEl
  } = useHoverMenubarContext();
  const isOpen = openedDropdownEl === buttonRef.current;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    ref: buttonRef,
    onClick: onDropDownButtonClick,
    disabled: disabled,
    onMouseOver: disabled ? undefined : onDropDownButtonMouseOver,
    "data-test": dataTest,
    className: `jsx-${menuButtonStyles.__hash}` + " " + (cx(className, {
      isOpen
    }) || "")
  }, label, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: menuButtonStyles.__hash
  }, menuButtonStyles)), isOpen && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Popper, {
    placement: "bottom-start",
    reference: buttonRef
  }, children)));
};
HoverMenuDropdown.defaultProps = {
  dataTest: 'dhis2-analytics-hovermenudropdown'
};
HoverMenuDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.node.isRequired,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool
};