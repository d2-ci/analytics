"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParentSize = void 0;
var _react = require("react");
const initialState = {
  width: 0,
  height: 0
};
const useParentSize = ({
  elementRef,
  renderCounter,
  availableWidth
}) => {
  const [size, setSize] = (0, _react.useState)({
    width: availableWidth || initialState.width || 0,
    height: initialState.height || 0
  });
  (0, _react.useEffect)(() => {
    const el = elementRef.current && elementRef.current.parentElement;
    if (!el) {
      return;
    }
    const onResize = () => {
      console.log('jj effect for renderCounter', renderCounter);
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };
    onResize(el);
    if (renderCounter) {
      setSize(initialState);
    }
    const observer = new window.ResizeObserver(onResize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementRef, renderCounter]);
  (0, _react.useEffect)(() => {
    console.log('jj effect for availableWidth', availableWidth);
    setSize(prevSize => ({
      ...prevSize,
      width: availableWidth || prevSize.width
    }));
  }, [availableWidth]);
  return size;
};
exports.useParentSize = useParentSize;