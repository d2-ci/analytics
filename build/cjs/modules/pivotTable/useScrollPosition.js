"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollPosition = void 0;
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _react = require("react");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const useScrollPosition = function (containerRef) {
  let debounceWait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  const [scrollPosition, setScrollPosition] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const onScroll = (0, _react.useCallback)((0, _debounce.default)(() => {
    const scroll = {
      x: containerRef.current.scrollLeft,
      y: containerRef.current.scrollTop
    };
    setScrollPosition(scroll);
  }, debounceWait));
  (0, _react.useEffect)(() => {
    const currentRef = containerRef.current;
    if (!currentRef) {
      return;
    }
    currentRef.addEventListener('scroll', onScroll);
    return () => {
      currentRef.removeEventListener('scroll', onScroll);
    };
  }, [containerRef, onScroll]);
  return scrollPosition;
};
exports.useScrollPosition = useScrollPosition;