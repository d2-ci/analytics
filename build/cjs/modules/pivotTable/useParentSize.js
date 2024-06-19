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
const useParentSize = function (elementRef, renderCounter) {
  let initialSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : initialState;
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
  return size;
};
exports.useParentSize = useParentSize;