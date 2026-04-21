"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Editor = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _UserMentionWrapper = require("../../UserMention/UserMentionWrapper.js");
var _Parser = require("../Parser/Parser.js");
var _markdownHandler = require("./markdownHandler.js");
var _EditorStyle = require("./styles/Editor.style.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EmojisPopover = ({
  onInsertMarkdown,
  onClose,
  reference
}) => /*#__PURE__*/_react.default.createElement(_ui.Popover, {
  reference: reference,
  onClickOutside: onClose
}, /*#__PURE__*/_react.default.createElement("ul", {
  className: `jsx-${_EditorStyle.emojisPopoverClasses.__hash}` + " " + "emojisList"
}, /*#__PURE__*/_react.default.createElement("li", {
  onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_SMILEY_FACE),
  className: `jsx-${_EditorStyle.emojisPopoverClasses.__hash}`
}, /*#__PURE__*/_react.default.createElement(_Parser.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_SMILEY_FACE])), /*#__PURE__*/_react.default.createElement("li", {
  onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_SAD_FACE),
  className: `jsx-${_EditorStyle.emojisPopoverClasses.__hash}`
}, /*#__PURE__*/_react.default.createElement(_Parser.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_SAD_FACE])), /*#__PURE__*/_react.default.createElement("li", {
  onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_THUMBS_UP),
  className: `jsx-${_EditorStyle.emojisPopoverClasses.__hash}`
}, /*#__PURE__*/_react.default.createElement(_Parser.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_THUMBS_UP])), /*#__PURE__*/_react.default.createElement("li", {
  onClick: () => onInsertMarkdown(_markdownHandler.EMOJI_THUMBS_DOWN),
  className: `jsx-${_EditorStyle.emojisPopoverClasses.__hash}`
}, /*#__PURE__*/_react.default.createElement(_Parser.Parser, null, _markdownHandler.emojis[_markdownHandler.EMOJI_THUMBS_DOWN]))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _EditorStyle.emojisPopoverClasses.__hash
}, _EditorStyle.emojisPopoverClasses));
EmojisPopover.propTypes = {
  onClose: _propTypes.default.func.isRequired,
  onInsertMarkdown: _propTypes.default.func.isRequired,
  reference: _propTypes.default.object
};
const IconButtonWithTooltip = ({
  tooltipContent,
  disabled,
  icon,
  onClick
}) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
  content: tooltipContent,
  placement: "top",
  openDelay: 500,
  closeDelay: 100
}, ({
  ref,
  onMouseOver,
  onMouseOut
}) => /*#__PURE__*/_react.default.createElement("span", {
  ref: ref,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "tooltip"
}, /*#__PURE__*/_react.default.createElement("button", {
  disabled: disabled,
  onClick: onClick,
  "aria-label": tooltipContent,
  type: "button",
  className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "toolbarButton"
}, icon))), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _EditorStyle.tooltipAnchorClasses.__hash
}, _EditorStyle.tooltipAnchorClasses), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _EditorStyle.toolbarButtonClasses.__hash
}, _EditorStyle.toolbarButtonClasses));
IconButtonWithTooltip.propTypes = {
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.node,
  tooltipContent: _propTypes.default.string,
  onClick: _propTypes.default.func
};
const Toolbar = ({
  disabled,
  onInsertMarkdown,
  onTogglePreview,
  previewButtonDisabled,
  previewMode
}) => {
  const emojisButtonRef = (0, _react.useRef)();
  const [emojisPopoverIsOpen, setEmojisPopoverIsOpen] = (0, _react.useState)(false);
  const iconColor = disabled ? _ui.colors.grey600 : _ui.colors.grey700;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "toolbar"
  }, !previewMode ? /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "actionsWrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "mainActions"
  }, /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Bold text'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconTextBold16, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.BOLD)
  }), /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Italic text'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconTextItalic16, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.ITALIC)
  }), /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Link to a URL'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconLink16, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.LINK)
  }), /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Mention a user'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconAt16, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(_markdownHandler.MENTION)
  }), /*#__PURE__*/_react.default.createElement("span", {
    ref: emojisButtonRef,
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "tooltip"
  }, /*#__PURE__*/_react.default.createElement(IconButtonWithTooltip, {
    tooltipContent: _d2I18n.default.t('Add emoji'),
    disabled: disabled,
    icon: /*#__PURE__*/_react.default.createElement(_ui.IconFaceAdd16, {
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
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "sideActions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: previewButtonDisabled || disabled,
    onClick: onTogglePreview,
    type: "button",
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "toolbarButton"
  }, _d2I18n.default.t('Preview')))) : /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "previewWrapper"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onTogglePreview,
    disabled: disabled,
    type: "button",
    className: `jsx-${_EditorStyle.tooltipAnchorClasses.__hash} jsx-${_EditorStyle.toolbarClasses.__hash} jsx-${_EditorStyle.toolbarButtonClasses.__hash}` + " " + "toolbarButton"
  }, _d2I18n.default.t('Back to write mode'))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _EditorStyle.tooltipAnchorClasses.__hash
  }, _EditorStyle.tooltipAnchorClasses), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _EditorStyle.toolbarClasses.__hash
  }, _EditorStyle.toolbarClasses), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _EditorStyle.toolbarButtonClasses.__hash
  }, _EditorStyle.toolbarButtonClasses));
};
Toolbar.propTypes = {
  previewButtonDisabled: _propTypes.default.bool.isRequired,
  previewMode: _propTypes.default.bool.isRequired,
  onInsertMarkdown: _propTypes.default.func.isRequired,
  onTogglePreview: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool
};
const Editor = exports.Editor = /*#__PURE__*/(0, _react.forwardRef)(({
  value,
  disabled,
  inputPlaceholder,
  onChange,
  errorText,
  helpText,
  initialFocus = true,
  resizable = true
}, externalRef) => {
  const [previewMode, setPreviewMode] = (0, _react.useState)(false);
  const internalRef = (0, _react.useRef)();
  const textareaRef = externalRef || internalRef;
  const caretPosRef = (0, _react.useRef)(undefined);
  const insertMarkdownCallback = (text, caretPos) => {
    caretPosRef.current = caretPos;
    onChange(text);
    textareaRef.current.focus();
  };
  (0, _react.useEffect)(() => {
    if (initialFocus) {
      var _textareaRef$current;
      (_textareaRef$current = textareaRef.current) === null || _textareaRef$current === void 0 || _textareaRef$current.focus();
    }
  }, [initialFocus, textareaRef]);
  (0, _react.useEffect)(() => {
    if (caretPosRef.current) {
      var _textareaRef$current2;
      (_textareaRef$current2 = textareaRef.current) === null || _textareaRef$current2 === void 0 || _textareaRef$current2.setSelectionRange(caretPosRef.current, caretPosRef.current);
      caretPosRef.current = undefined;
    }
  }, [value, textareaRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    "data-test": "@dhis2-analytics-richtexteditor",
    className: `jsx-${_EditorStyle.mainClasses.__hash}` + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(Toolbar, {
    onInsertMarkdown: markdown => {
      (0, _markdownHandler.insertMarkdown)(markdown, textareaRef.current, insertMarkdownCallback);
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
    className: `jsx-${_EditorStyle.mainClasses.__hash}` + " " + "preview"
  }, /*#__PURE__*/_react.default.createElement(_Parser.Parser, null, value)) : /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_EditorStyle.mainClasses.__hash}` + " " + "edit"
  }, /*#__PURE__*/_react.default.createElement(_UserMentionWrapper.UserMentionWrapper, {
    onUserSelect: onChange,
    inputReference: textareaRef
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    ref: textareaRef,
    placeholder: inputPlaceholder,
    disabled: disabled,
    value: value,
    rows: 5,
    onChange: event => onChange(event.target.value),
    onKeyDown: event => (0, _markdownHandler.convertCtrlKey)(event, insertMarkdownCallback),
    className: `jsx-${_EditorStyle.mainClasses.__hash}` + " " + ((0, _classnames.default)('textarea', {
      resizable
    }) || "")
  })), errorText && /*#__PURE__*/_react.default.createElement(_ui.Help, {
    error: !!errorText
  }, errorText), helpText && /*#__PURE__*/_react.default.createElement(_ui.Help, null, helpText)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _EditorStyle.mainClasses.__hash
  }, _EditorStyle.mainClasses));
});
Editor.displayName = 'Editor';
Editor.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool,
  errorText: _propTypes.default.string,
  helpText: _propTypes.default.string,
  initialFocus: _propTypes.default.bool,
  inputPlaceholder: _propTypes.default.string,
  resizable: _propTypes.default.bool
};