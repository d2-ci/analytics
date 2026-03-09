"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useKeyDown = (key, callback, longPress = false) => {
  const timerRef = (0, _react.useRef)(null);
  const keys = (0, _react.useMemo)(() => Array.isArray(key) ? key : [key], [key]);
  const handleKeyDown = (0, _react.useCallback)(event => {
    if (keys.includes(event.key)) {
      if (longPress) {
        timerRef.current = setTimeout(() => callback(event), 250);
      } else {
        callback(event);
      }
    }
  }, [keys, callback, longPress]);
  const handleKeyUp = (0, _react.useCallback)(event => {
    if (keys.includes(event.key) && longPress) {
      clearTimeout(timerRef.current);
    }
  }, [keys, longPress]);
  (0, _react.useEffect)(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);
};
var _default = exports.default = useKeyDown;