"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollPosition = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var useScrollPosition = function useScrollPosition(containerRef) {
  var debounceWait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var _useState = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      scrollPosition = _useState2[0],
      setScrollPosition = _useState2[1];

  var onScroll = (0, _react.useCallback)((0, _debounce.default)(function () {
    var scroll = {
      x: containerRef.current.scrollLeft,
      y: containerRef.current.scrollTop
    };
    setScrollPosition(scroll);
  }, debounceWait));
  (0, _react.useEffect)(function () {
    var currentRef = containerRef.current;

    if (!currentRef) {
      return;
    }

    currentRef.addEventListener('scroll', onScroll);
    return function () {
      currentRef.removeEventListener('scroll', onScroll);
    };
  }, [containerRef, onScroll]);
  return scrollPosition;
};

exports.useScrollPosition = useScrollPosition;