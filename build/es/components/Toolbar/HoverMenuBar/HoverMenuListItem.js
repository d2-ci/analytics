import _JSXStyle from "styled-jsx/style";
import { IconChevronRight24, Popper, Portal } from '@dhis2/ui';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { HoverMenuList, useHoverMenuListContext } from './HoverMenuList.js';
import styles from './HoverMenuListItem.styles.js';
const HoverMenuListItem = _ref => {
  let {
    onClick,
    children,
    icon,
    className,
    destructive,
    disabled,
    dataTest,
    label
  } = _ref;
  const ref = useRef();
  const {
    onSubmenuAnchorMouseEnter,
    onMenuItemMouseEnter,
    openedSubMenuEl,
    dense
  } = useHoverMenuListContext();
  const isSubMenuOpen = openedSubMenuEl === ref.current;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    ref: ref,
    "data-test": dataTest,
    onClick: !disabled && !children && onClick ? onClick : undefined,
    onMouseEnter: disabled ? undefined : children ? onSubmenuAnchorMouseEnter : onMenuItemMouseEnter,
    className: `jsx-${styles.__hash}` + " " + (cx(className, {
      destructive,
      disabled,
      dense,
      active: isSubMenuOpen,
      'with-chevron': children
    }) || "")
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "icon"
  }, icon), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "label"
  }, label), !!children && /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "chevron"
  }, /*#__PURE__*/React.createElement(IconChevronRight24, null)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles)), children && isSubMenuOpen && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Popper, {
    placement: "right-start",
    reference: ref
  }, /*#__PURE__*/React.createElement(HoverMenuList, {
    dense: dense
  }, children))));
};
HoverMenuListItem.defaultProps = {
  dataTest: 'dhis2-uicore-hovermenulistitem'
};
HoverMenuListItem.propTypes = {
  // Nested menu items become submenus
  children: PropTypes.node,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  destructive: PropTypes.bool,
  disabled: PropTypes.bool,
  /** An icon for the left side of the menu item */
  icon: PropTypes.node,
  /** Text in the menu item */
  label: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func
};
export { HoverMenuListItem };