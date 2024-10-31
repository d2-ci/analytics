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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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