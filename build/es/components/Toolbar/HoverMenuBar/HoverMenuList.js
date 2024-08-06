import _JSXStyle from "styled-jsx/style";
import { colors, elevations, spacers } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { useHoverMenubarContext } from './HoverMenuBar.js';
const throwErrorIfNotInitialized = () => {
  throw new Error('`HoverMenuListContext` has not been initialised');
};
const HoverMenuListContext = /*#__PURE__*/createContext({
  onSubmenuAnchorMouseEnter: throwErrorIfNotInitialized,
  onMenuItemMouseEnter: throwErrorIfNotInitialized,
  openedSubMenuEl: null,
  dense: false
});
const useHoverMenuListContext = () => useContext(HoverMenuListContext);
const HoverMenuList = _ref => {
  let {
    children,
    className,
    dataTest,
    dense,
    maxHeight,
    maxWidth
  } = _ref;
  const {
    setLastHoveredSubMenuEl
  } = useHoverMenubarContext();
  const [openedSubMenuEl, setOpenedSubMenuEl] = useState(null);
  const onSubmenuAnchorMouseEnter = useCallback(event => {
    if (openedSubMenuEl !== event.currentTarget) {
      setOpenedSubMenuEl(event.currentTarget);
      setLastHoveredSubMenuEl(event.currentTarget);
    }
  }, [openedSubMenuEl, setLastHoveredSubMenuEl]);
  const onMenuItemMouseEnter = useCallback(() => {
    setOpenedSubMenuEl(null);
    setLastHoveredSubMenuEl(null);
  }, [setLastHoveredSubMenuEl]);
  return /*#__PURE__*/React.createElement(HoverMenuListContext.Provider, {
    value: {
      onSubmenuAnchorMouseEnter,
      onMenuItemMouseEnter,
      openedSubMenuEl,
      dense
    }
  }, /*#__PURE__*/React.createElement("ul", {
    "data-test": dataTest,
    className: _JSXStyle.dynamic([["3026610659", [colors.white, colors.grey200, elevations.e300, dense ? '128' : '180', maxWidth, maxHeight, spacers.dp4]]]) + " " + (className || "")
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3026610659",
    dynamic: [colors.white, colors.grey200, elevations.e300, dense ? '128' : '180', maxWidth, maxHeight, spacers.dp4]
  }, [`ul.__jsx-style-dynamic-selector{position:relative;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:${colors.white};border:1px solid ${colors.grey200};border-radius:3px;box-shadow:${elevations.e300};display:inline-block;min-width:${dense ? '128' : '180'}px;max-width:${maxWidth};max-height:${maxHeight};padding:${spacers.dp4} 0;overflow:auto;list-style:none;}`])));
};
HoverMenuList.defaultProps = {
  dataTest: 'dhis2-analytics-hovermenulist',
  maxWidth: '380px',
  maxHeight: 'auto',
  dense: true
};
HoverMenuList.propTypes = {
  /** Typically `MenuItem`, `MenuDivider`, and `MenuSectionHeader` */
  children: PropTypes.node,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  /** Gives all HoverMenuListItem children a dense style */
  dense: PropTypes.bool,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string
};
export { HoverMenuList, useHoverMenuListContext };