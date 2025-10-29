"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParentSize = void 0;
var _react = require("react");
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };
    onResize(el);
    if (renderCounter) {
      setSize(initialState);
    }
    const observer = new _resizeObserverPolyfill.default(onResize);
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