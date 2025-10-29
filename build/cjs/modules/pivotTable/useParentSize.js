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
  initialSize = initialState,
  availableWidth
}) => {
  const [size, setSize] = (0, _react.useState)({
    width: availableWidth || initialSize.width || 0,
    height: initialSize.height || 0
  });
  (0, _react.useEffect)(() => {
    const el = elementRef.current && elementRef.current.parentElement;
    if (!el) {
      return;
    }
    const onResize = () => {
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };
    const observer = new window.ResizeObserver(() => {
      if (renderCounter) {
        setSize(initialState);
      }
      return onResize();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementRef, renderCounter]);
  (0, _react.useEffect)(() => {
    setSize(prevSize => ({
      ...prevSize,
      width: availableWidth || prevSize.width
    }));
  }, [availableWidth]);
  return size;
};
exports.useParentSize = useParentSize;