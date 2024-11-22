"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userMentionWrapperClasses = exports.resolvedHeaderStyle = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _react = _interopRequireDefault(require("react"));
var _ui = require("@dhis2/ui");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
 * Note that the clone and clone > pre styles have been chosen
 * to emulate the styles of the textarea. If we decide to make
 * changes there, they should be refelcted here too.
 */
const userMentionWrapperClasses = exports.userMentionWrapperClasses = [".wrapper.jsx-2386066169{width:100%;height:100%;position:relative;}", `.clone.jsx-2386066169{position:absolute;visibility:hidden;inset:0;box-sizing:border-box;padding:${_ui.spacers.dp8} 15px;border:1px solid ${_ui.colors.grey500};font-size:14px;line-height:${_ui.spacers.dp16};z-index:1;pointer-events:none;}`, ".clone.jsx-2386066169>p.jsx-2386066169{display:inline;word-wrap:break-word;overflow-wrap:break-word;font:inherit;margin:0;white-space:break-spaces;}", `.container.jsx-2386066169{background-color:${_ui.colors.white};max-height:180px;overflow:auto;}`];
userMentionWrapperClasses.__hash = "2386066169";
const resolvedHeaderStyle = exports.resolvedHeaderStyle = {
  styles: /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4275958396"
  }, [".jsx-4275958396{position:-webkit-sticky;position:sticky;top:0;}"]),
  className: "jsx-4275958396"
};