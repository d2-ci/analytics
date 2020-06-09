"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useParentSize = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));

var initialState = {
  width: 0,
  height: 0
};

var useParentSize = function useParentSize(elementRef, renderCounter) {
  var initialSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : initialState;

  var _useState = (0, _react.useState)({
    width: initialSize.width || 0,
    height: initialSize.height || 0
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  (0, _react.useEffect)(function () {
    var el = elementRef.current && elementRef.current.parentElement;
    if (!el) return;

    var onResize = function onResize() {
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };

    onResize(el);

    if (renderCounter) {
      setSize(initialState);
    }

    var observer = new _resizeObserverPolyfill.default(onResize);
    observer.observe(el);
    return function () {
      return observer.disconnect();
    };
  }, [elementRef, renderCounter]);
  return size;
};

exports.useParentSize = useParentSize;