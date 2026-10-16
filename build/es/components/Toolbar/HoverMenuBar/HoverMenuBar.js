import _JSXStyle from "styled-jsx/style";
import PropTypes from 'prop-types';
import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
const throwErrorIfNotInitialized = () => {
  throw new Error('`HoverMenubarContext` has not been initialised');
};
const HoverMenubarContext = /*#__PURE__*/createContext({
  closeMenu: throwErrorIfNotInitialized,
  onDropDownButtonClick: throwErrorIfNotInitialized,
  onDropDownButtonMouseOver: throwErrorIfNotInitialized,
  setLastHoveredSubMenuEl: throwErrorIfNotInitialized,
  openedDropdownEl: null
});
const useHoverMenubarContext = () => useContext(HoverMenubarContext);
const HoverMenuBar = ({
  children,
  dataTest = 'dhis2-analytics-hovermenubar'
}) => {
  const [openedDropdownEl, setOpenedDropdownEl] = useState(null);
  const lastHoveredSubMenuElRef = useRef(null);
  const [isInHoverMode, setIsInHoverMode] = useState(false);
  const closeMenu = useCallback(() => {
    setIsInHoverMode(false);
    setOpenedDropdownEl(null);
  }, []);
  const setLastHoveredSubMenuEl = useCallback(element => {
    lastHoveredSubMenuElRef.current = element;
  }, []);
  const onDocumentClick = useCallback(event => {
    const isClickOnOpenedSubMenuAnchor = lastHoveredSubMenuElRef.current && (lastHoveredSubMenuElRef.current === event.target || lastHoveredSubMenuElRef.current.contains(event.target));
    if (!isClickOnOpenedSubMenuAnchor) {
      closeMenu();
    }
  }, [closeMenu]);
  const onDropDownButtonClick = useCallback(event => {
    if (!isInHoverMode) {
      /* Stop event propagation to avoid it from bubling up to the
       * document, which would actually cause the menu to close again
       * immediately */
      event.stopPropagation();
      setIsInHoverMode(true);
      setOpenedDropdownEl(event.currentTarget);
      document.addEventListener('click', onDocumentClick, {
        once: true
      });
    } else {
      document.removeEventListener('click', onDocumentClick);
      closeMenu();
    }
  }, [closeMenu, isInHoverMode, onDocumentClick]);
  const onDropDownButtonMouseOver = useCallback(event => {
    if (isInHoverMode) {
      setOpenedDropdownEl(event.currentTarget);
    }
  }, [isInHoverMode]);
  const closeMenuWithEsc = useCallback(event => {
    if (event.keyCode === 27) {
      /* Blurring the active element is needed here to prevent
       * the menu button which was clicked to open the hovermenu
       * from getting the blue outline style. This looks a bit off
       * in all cases, but especially when the menu item which was
       * clicked to open the hover menu isn't the currently opened
       * dropdown menu. This doesn't have to be the case since
       * dropdown menues open on hover once the first one has been
       * clicked. */
      document.activeElement.blur();
      closeMenu();
    }
  }, [closeMenu]);
  return /*#__PURE__*/React.createElement(HoverMenubarContext.Provider, {
    value: {
      onDropDownButtonClick,
      onDropDownButtonMouseOver,
      openedDropdownEl,
      setLastHoveredSubMenuEl
    }
  }, /*#__PURE__*/React.createElement("div", {
    onKeyDown: closeMenuWithEsc,
    "data-test": dataTest,
    className: "jsx-3020154784"
  }, children, /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "3020154784"
  }, [".jsx-3020154784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"])));
};
HoverMenuBar.propTypes = {
  children: PropTypes.node.isRequired,
  dataTest: PropTypes.string
};
export { HoverMenuBar, useHoverMenubarContext };