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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const mutation = {
  resource: 'interpretations',
  id: _ref => {
    let {
      interpretationId,
      commentId
    } = _ref;
    return `${interpretationId}/comments/${commentId}`;
  },
  type: 'delete'
};
const CommentDeleteButton = _ref2 => {
  let {
    commentId,
    interpretationId,
    onComplete
  } = _ref2;
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