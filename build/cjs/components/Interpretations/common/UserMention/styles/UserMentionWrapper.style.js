"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userMentionWrapperClasses = exports.resolvedHeaderStyle = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _ui = require("@dhis2/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Note that the clone and clone > pre styles have been chosen
 * to emulate the styles of the textarea. If we decide to make
 * changes there, they should be refelcted here too.
 */
const userMentionWrapperClasses = [".wrapper.jsx-1289989717{position:relative;}", ".clone.jsx-1289989717{position:absolute;visibility:hidden;inset:0;box-sizing:border-box;padding:".concat(_ui.spacers.dp8, " ").concat(_ui.spacers.dp12, ";border:1px solid ").concat(_ui.colors.grey500, ";font-size:14px;line-height:").concat(_ui.spacers.dp16, ";z-index:1;pointer-events:none;}"), ".clone.jsx-1289989717>pre.jsx-1289989717{display:inline;word-wrap:break-word;overflow-wrap:break-word;font:inherit;margin:0;}", ".container.jsx-1289989717{background-color:".concat(_ui.colors.white, ";max-height:180px;overflow:auto;}")];
exports.userMentionWrapperClasses = userMentionWrapperClasses;
userMentionWrapperClasses.__hash = "1289989717";
const resolvedHeaderStyle = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4275958396"
  }, [".jsx-4275958396{position:-webkit-sticky;position:sticky;top:0;}"]),
  className: "jsx-4275958396"
};
exports.resolvedHeaderStyle = resolvedHeaderStyle;