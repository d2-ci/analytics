"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentAddForm = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = require("../../RichText/index.js");
var _index2 = require("../common/index.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CommentAddForm = _ref => {
  let {
    interpretationId,
    currentUser,
    onSave,
    focusRef
  } = _ref;
  const [showRichTextEditor, setShowRichTextEditor] = (0, _react.useState)(false);
  const [commentText, setCommentText] = (0, _react.useState)('');
  const saveMutationRef = (0, _react.useRef)({
    resource: `interpretations/${interpretationId}/comments`,
    type: 'create',
    data: _ref2 => {
      let {
        commentText
      } = _ref2;
      return commentText;
    }
  });
  const [save, {
    loading
  }] = (0, _appRuntime.useDataMutation)(saveMutationRef.current, {
    onComplete: () => {
      setShowRichTextEditor(false);
      setCommentText('');
      onSave();
    }
  });
  const inputPlaceholder = _d2I18n.default.t('Write a reply');
  return /*#__PURE__*/_react.default.createElement(_index2.MessageEditorContainer, {
    currentUser: currentUser
  }, showRichTextEditor ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.RichTextEditor, {
    inputPlaceholder: inputPlaceholder,
    onChange: setCommentText,
    value: commentText,
    ref: focusRef,
    disabled: loading
  }), /*#__PURE__*/_react.default.createElement(_index2.MessageButtonStrip, null, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    primary: true,
    small: true,
    onClick: () => save({
      commentText
    }),
    loading: loading
  }, _d2I18n.default.t('Post reply')), /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    disabled: loading,
    onClick: () => {
      setCommentText('');
      setShowRichTextEditor(false);
    }
  }, _d2I18n.default.t('Cancel')))) : /*#__PURE__*/_react.default.createElement(_index2.MessageInput, {
    onFocus: () => setShowRichTextEditor(true),
    placeholder: inputPlaceholder,
    ref: focusRef
  }));
};
exports.CommentAddForm = CommentAddForm;
CommentAddForm.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  focusRef: _propTypes.default.object.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  onSave: _propTypes.default.func
};