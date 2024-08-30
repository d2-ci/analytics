"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalContentWidth = void 0;

var _react = require("react");

var _utils = require("../../../modules/utils.js");

const MODAL_SIDE_PADDING = 2 * 24;
const MODAL_SIDE_MARGINS = 2 * 128;

const computeModalContentWidth = windowWidth => {
  return windowWidth - MODAL_SIDE_MARGINS - MODAL_SIDE_PADDING;
};

const useModalContentWidth = () => {
  const [windowWidth, setWindowWidth] = (0, _react.useState)(window.innerWidth);
  const debouncedWindowWidth = (0, _utils.useDebounce)(windowWidth, 150);
  const [modalContentWidth, setModalContentWidth] = (0, _react.useState)(computeModalContentWidth(windowWidth));
  (0, _react.useEffect)(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  (0, _react.useEffect)(() => {
    setModalContentWidth(computeModalContentWidth(debouncedWindowWidth));
  }, [debouncedWindowWidth]);
  return modalContentWidth;
};

exports.useModalContentWidth = useModalContentWidth;