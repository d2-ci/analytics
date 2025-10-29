"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentDeleteButton = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = require("../common/index.js");
var _hooks = require("../InterpretationsProvider/hooks.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CommentDeleteButton = ({
  id
}) => {
  const [remove, {
    loading,
    error
  }] = (0, _hooks.useDeleteCommentFromActiveInterpretation)({
    id
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["945681082", [_ui.colors.red500]]]) + " " + "delete-button-container"
  }, /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('Delete'),
    iconComponent: _ui.IconDelete16,
    onClick: remove,
    disabled: loading
  }), error && /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["945681082", [_ui.colors.red500]]]) + " " + "delete-error"
  }, _d2I18n.default.t('Could not delete comment')), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "945681082",
    dynamic: [_ui.colors.red500]
  }, [".delete-button-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;}", `.delete-error.__jsx-style-dynamic-selector{color:${_ui.colors.red500};font-size:12px;line-height:12px;}`]));
};
exports.CommentDeleteButton = CommentDeleteButton;
CommentDeleteButton.propTypes = {
  id: _propTypes.default.string.isRequired
};