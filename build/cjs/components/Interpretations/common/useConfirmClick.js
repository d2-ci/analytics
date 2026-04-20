"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfirmClick = void 0;
var _react = require("react");
const CONFIRM_TIMEOUT_MS = 3000;
const useConfirmClick = action => {
  const [isConfirming, setIsConfirming] = (0, _react.useState)(false);
  const timeoutRef = (0, _react.useRef)(null);
  const clearResetTimer = (0, _react.useCallback)(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  (0, _react.useEffect)(() => clearResetTimer, [clearResetTimer]);
  const onClick = (0, _react.useCallback)(() => {
    if (isConfirming) {
      clearResetTimer();
      setIsConfirming(false);
      action();
    } else {
      setIsConfirming(true);
      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        setIsConfirming(false);
      }, CONFIRM_TIMEOUT_MS);
    }
  }, [isConfirming, action, clearResetTimer]);
  return {
    isConfirming,
    onClick
  };
};
exports.useConfirmClick = useConfirmClick;