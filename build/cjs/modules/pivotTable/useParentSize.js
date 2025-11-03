"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParentSize = void 0;
var _react = require("react");
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const initialSize = {
  width: 0,
  height: 0
};
const useParentSize = ({
  elementRef,
  renderCounter,
  availableWidth
}) => {
  const [size, setSize] = (0, _react.useState)({
    width: initialSize.width || 0,
    height: initialSize.height || 0
  });
  (0, _react.useEffect)(() => {
    const el = elementRef.current && elementRef.current.parentElement;
    if (!el) {
      return;
    }
    const onResize = () => {
      console.log('jj onResize use clientWidth', el.clientWidth);
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };
    onResize(el);
    if (renderCounter) {
      console.log('jj renderCounter, reset w to 0');
      setSize(initialSize);
    }
    const observer = new _resizeObserverPolyfill.default(onResize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementRef, renderCounter]);
  (0, _react.useEffect)(() => {
    console.log('jj availWidth setSize ', availableWidth);
    setSize(prevSize => ({
      ...prevSize,
      width: availableWidth || prevSize.width
    }));
  }, [availableWidth]);
  return size;
};
exports.useParentSize = useParentSize;