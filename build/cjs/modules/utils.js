"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDidUpdateEffect = exports.useDebounce = exports.isNumeric = void 0;
var _react = require("react");
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
exports.useDebounce = useDebounce;
const useDidUpdateEffect = (fn, inputs) => {
  const didMountRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};

/**
 * Check if a value is numeric
 *
 * @param param Value to be checked
 * @returns {boolean} Returns true when the `param` is a numeric value
 */
exports.useDidUpdateEffect = useDidUpdateEffect;
const isNumeric = param => typeof param !== 'symbol' && !isNaN(parseFloat(param)) && isFinite(param);
exports.isNumeric = isNumeric;