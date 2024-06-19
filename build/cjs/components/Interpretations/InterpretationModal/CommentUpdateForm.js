"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentUpdateForm = void 0;

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

const CommentUpdateForm = _ref => {
  let {
    interpretationId,
    commentId,
    currentUser,
    text,
    close,
    onComplete
  } = _ref;
  const [commentText, setCommentText] = (0, _react.useState)(text || '');
  const updateMutationRef = (0, _react.useRef)({
    resource: "interpretations/".concat(interpretationId, "/comments/").concat(commentId),
    type: 'update',
    partial: false,
    data: _ref2 => {
      let {
        commentText
      } = _ref2;
      return commentText;
    }
  });
  const [update, {
    loading,
    error
  }] = (0, _appRuntime.useDataMutation)(updateMutationRef.current, {
    onComplete: () => {
      onComplete();
      close();
    }
  });
  const errorText = error ? error.message || _d2I18n.default.t('Could not update comment') : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["2690082310", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.colors.grey100]]]) + " " + "message"
  }, /*#__PURE__*/_react.default.createElement(_index.MessageEditorContainer, {
    currentUser: currentUser
  }, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    inputPlaceholder: _d2I18n.default.t('Enter comment text'),
    onChange: setCommentText,
    value: commentText,
    disabled: loading,
    errorText: errorText
  }), /*#__PURE__*/_react.default.createElement(_index.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    loading: loading,
    primary: true,
    small: true,
    onClick: () => update({
      commentText
    })
  }, _d2I18n.default.t('Update')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    disabled: loading,
    secondary: true,
    small: true,
    onClick: close
  }, _d2I18n.default.t('Cancel')))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "2690082310",
    dynamic: [_ui.spacers.dp8, _ui.spacers.dp8, _ui.colors.grey100]
  }, [".message.__jsx-style-dynamic-selector{padding:0 ".concat(_ui.spacers.dp8, " ").concat(_ui.spacers.dp8, ";background-color:").concat(_ui.colors.grey100, ";border-radius:5px;}")]));
};

exports.CommentUpdateForm = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  close: _propTypes.default.func.isRequired,
  commentId: _propTypes.default.string.isRequired,
  currentUser: _propTypes.default.object.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  onComplete: _propTypes.default.func.isRequired,
  text: _propTypes.default.string
};