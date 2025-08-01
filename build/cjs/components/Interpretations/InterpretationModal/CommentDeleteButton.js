"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentDeleteButton = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../common/index.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mutation = {
  resource: 'interpretations',
  id: ({
    interpretationId,
    commentId
  }) => `${interpretationId}/comments/${commentId}`,
  type: 'delete'
};
const CommentDeleteButton = ({
  commentId,
  interpretationId,
  onComplete
}) => {
  const [deleteError, setDeleteError] = (0, _react.useState)(null);
  const [remove, {
    loading
  }] = (0, _appRuntime.useDataMutation)(mutation, {
    onComplete: () => {
      setDeleteError(null);
      onComplete();
    },
    onError: () => setDeleteError(_d2I18n.default.t('Delete failed')),
    variables: {
      commentId,
      interpretationId
    }
  });
  const onDelete = () => {
    setDeleteError(null);
    remove();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["945681082", [_ui.colors.red500]]]) + " " + "delete-button-container"
  }, /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('Delete'),
    iconComponent: _ui.IconDelete16,
    onClick: onDelete,
    disabled: loading
  }), deleteError && /*#__PURE__*/_react.default.createElement("span", {
    className: _style.default.dynamic([["945681082", [_ui.colors.red500]]]) + " " + "delete-error"
  }, deleteError), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "945681082",
    dynamic: [_ui.colors.red500]
  }, [".delete-button-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;}", `.delete-error.__jsx-style-dynamic-selector{color:${_ui.colors.red500};font-size:12px;line-height:12px;}`]));
};
exports.CommentDeleteButton = CommentDeleteButton;
CommentDeleteButton.propTypes = {
  commentId: _propTypes.default.string.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  onComplete: _propTypes.default.func.isRequired
};