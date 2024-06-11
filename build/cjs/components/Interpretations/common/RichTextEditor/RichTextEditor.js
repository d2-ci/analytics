"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RichTextEditor = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _d2UiRichText = require("@dhis2/d2-ui-rich-text");

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _UserMentionWrapper = require("../UserMention/UserMentionWrapper.js");

var _markdownHandler = require("./markdownHandler.js");

var _RichTextEditorStyle = require("./styles/RichTextEditor.style.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EmojisPopover = _ref => {
  let {
    onInsertMarkdown,
    onClose,
    reference
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ui.Popover, {
    reference: reference,
    onClickOutside: onClose
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "jsx-".concat(_RichTextEditorStyle.emojisPopoverClasses.__hash) + " " + "emojisList"
  }, /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_SMILEY_FACE),
    className: "jsx-".concat(_RichTextEditorStyle.emojisPopoverClasses.__hash)
  }, /*#__PURE__*/_react.default.createElement(_d2UiRichText.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_SMILEY_FACE])), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_SAD_FACE),
    className: "jsx-".concat(_RichTextEditorStyle.emojisPopoverClasses.__hash)
  }, /*#__PURE__*/_react.default.createElement(_d2UiRichText.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_SAD_FACE])), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_THUMBS_UP),
    className: "jsx-".concat(_RichTextEditorStyle.emojisPopoverClasses.__hash)
  }, /*#__PURE__*/_react.default.createElement(_d2UiRichText.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_THUMBS_UP])), /*#__PURE__*/_react.default.createElement("li", {
    onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_THUMBS_DOWN),
    className: "jsx-".concat(_RichTextEditorStyle.emojisPopoverClasses.__hash)
  }, /*#__PURE__*/_react.default.createElement(_d2UiRichText.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_THUMBS_DOWN]))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _RichTextEditorStyle.emojisPopoverClasses.__hash
  }, _RichTextEditorStyle.emojisPopoverClasses));
};

EmojisPopover.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  onInsertMarkdown: _propTypes.default.func.isRequired,
  reference: _propTypes.default.object
};

const IconButtonWithTooltip = _ref2 => {
  let {
    tooltipContent,
    disabled,
    icon,
    onClick
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    content: tooltipContent,
    placement: "bottom",
    closeDelay: 200
  }, _ref3 => {
    let {
      ref,
      onMouseOver,
      onMouseOut
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement("span", {
      ref: ref,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash) + " " + "tooltip"
    }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
      secondary: true,
      small: true,
      disabled: disabled,
      icon: icon,
      onClick: onClick
    }));
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _RichTextEditorStyle.tooltipAnchorClasses.__hash
  }, _RichTextEditorStyle.tooltipAnchorClasses));
};

IconButtonWithTooltip.propTypes = {
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.node,
  tooltipContent: _propTypes.default.string,
  onClick: _propTypes.default.func
};

const Toolbar = _ref4 => {
  let {
    disabled,
    onInsertMarkdown,
    onTogglePreview,
    previewButtonDisabled,
    previewMode
  } = _ref4;
  const emojisButtonRef = (0, _react.useRef)();
  const [emojisPopoverIsOpen, setEmojisPopoverIsOpen] = (0, _react.useState)(false);
  const iconColor = disabled ? _ui.colors.grey600 : _ui.colors.grey700;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash, " jsx-").concat(_RichTextEditorStyle.toolbarClasses.__hash) + " " + "toolbar"
  }, !previewMode ? /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash, " jsx-").concat(_RichTextEditorStyle.toolbarClasses.__hash) + " " + "actionsWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash, " jsx-").concat(_RichTextEditorStyle.toolbarClasses.__hash) + " " + "mainActions"
  }, /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Bold text'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconTextBold24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.BOLD)
  }), /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Italic text'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconTextItalic24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.ITALIC)
  }), /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Link to a URL'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconLink24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.LINK)
  }), /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Mention a user'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconAt24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.MENTION)
  }), /*#__PURE__*/_react.default.createElement("span", {
    ref: emojisButtonRef,
    className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash, " jsx-").concat(_RichTextEditorStyle.toolbarClasses.__hash) + " " + "tooltip"
  }, /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Add emoji'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconFaceAdd24, {
      color: iconColor
    }),
    onClick: () => setEmojisPopoverIsOpen(true)
  })), emojisPopoverIsOpen && /*#__PURE__*/_react.default.createElement(EmojisPopover, {
    onClose: () => setEmojisPopoverIsOpen(false),
    onInsertMarkdown: markup => {
      onInsertMarkdown(markup);
      setEmojisPopoverIsOpen(false);
    },
    reference: emojisButtonRef
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash, " jsx-").concat(_RichTextEditorStyle.toolbarClasses.__hash) + " " + "sideActions"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    disabled: previewButtonDisabled || disabled,
    onClick: onTogglePreview
  }, _d2I18n.default.t('Preview')))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.tooltipAnchorClasses.__hash, " jsx-").concat(_RichTextEditorStyle.toolbarClasses.__hash) + " " + "previewWrapper"
  }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
    secondary: true,
    small: true,
    onClick: onTogglePreview,
    disabled: disabled
  }, _d2I18n.default.t('Back to write mode'))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _RichTextEditorStyle.tooltipAnchorClasses.__hash
  }, _RichTextEditorStyle.tooltipAnchorClasses), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _RichTextEditorStyle.toolbarClasses.__hash
  }, _RichTextEditorStyle.toolbarClasses));
};

Toolbar.propTypes = {
  previewButtonDisabled: _propTypes.default.bool.isRequired,
  previewMode: _propTypes.default.bool.isRequired,
  onInsertMarkdown: _propTypes.default.func.isRequired,
  onTogglePreview: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool
};
const RichTextEditor = /*#__PURE__*/(0, _react.forwardRef)((_ref5, externalRef) => {
  let {
    value,
    disabled,
    inputPlaceholder,
    onChange,
    errorText
  } = _ref5;
  const [previewMode, setPreviewMode] = (0, _react.useState)(false);
  const internalRef = (0, _react.useRef)();
  const textareaRef = externalRef || internalRef;
  (0, _react.useEffect)(() => {
    var _textareaRef$current;

    return (_textareaRef$current = textareaRef.current) === null || _textareaRef$current === void 0 ? void 0 : _textareaRef$current.focus();
  }, [textareaRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.mainClasses.__hash) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(Toolbar, {
    onInsertMarkdown: markdown => {
      (0, _markdownHandler.insertMarkdown)(markdown, textareaRef.current, (text, caretPos) => {
        onChange(text);
        textareaRef.current.focus();
        textareaRef.current.selectionEnd = caretPos;
      });

      if (markdown === _markdownHandler.MENTION) {
        textareaRef.current.dispatchEvent(new KeyboardEvent('keydown', {
          key: '@',
          bubbles: true
        }));
      }
    },
    onTogglePreview: () => setPreviewMode(!previewMode),
    previewMode: previewMode,
    previewButtonDisabled: !value,
    disabled: disabled
  }), previewMode ? /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_RichTextEditorStyle.mainClasses.__hash) + " " + "preview"
  }, /*#__PURE__*/_react.default.createElement(_d2UiRichText.Parser, null, value)) : /*#__PURE__*/_react.default.createElement(_ui.Field, {
    error: !!errorText,
    validationText: errorText
  }, /*#__PURE__*/_react.default.createElement(_UserMentionWrapper.UserMentionWrapper, {
    onUserSelect: onChange,
    inputReference: textareaRef
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    ref: textareaRef,
    placeholder: inputPlaceholder,
    disabled: disabled,
    value: value,
    onChange: event => onChange(event.target.value),
    onKeyDown: event => (0, _markdownHandler.convertCtrlKey)(event, onChange),
    className: "jsx-".concat(_RichTextEditorStyle.mainClasses.__hash) + " " + "textarea"
  }))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _RichTextEditorStyle.mainClasses.__hash
  }, _RichTextEditorStyle.mainClasses));
});
exports.RichTextEditor = RichTextEditor;
RichTextEditor.displayName = 'RichTextEditor';
RichTextEditor.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  errorText: _propTypes.default.string,
  inputPlaceholder: _propTypes.default.string
};