import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { Parser as RichTextParser } from '@dhis2/d2-ui-rich-text';
import { Button, Popover, Tooltip, Field, IconAt24, IconFaceAdd24, IconLink24, IconTextBold24, IconTextItalic24, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { forwardRef, useRef, useEffect, useState } from 'react';
import { UserMentionWrapper } from '../UserMention/UserMentionWrapper.js';
import { convertCtrlKey, insertMarkdown, emojis, EMOJI_SMILEY_FACE, EMOJI_SAD_FACE, EMOJI_THUMBS_UP, EMOJI_THUMBS_DOWN, BOLD, ITALIC, LINK, MENTION } from './markdownHandler.js';
import { mainClasses, toolbarClasses, tooltipAnchorClasses, emojisPopoverClasses } from './styles/RichTextEditor.style.js';

const EmojisPopover = _ref => {
  let {
    onInsertMarkdown,
    onClose,
    reference
  } = _ref;
  return /*#__PURE__*/React.createElement(Popover, {
    reference: reference,
    onClickOutside: onClose
  }, /*#__PURE__*/React.createElement("ul", {
    className: "jsx-".concat(emojisPopoverClasses.__hash) + " " + "emojisList"
  }, /*#__PURE__*/React.createElement("li", {
    onClick: () => onInsertMarkdown(EMOJI_SMILEY_FACE),
    className: "jsx-".concat(emojisPopoverClasses.__hash)
  }, /*#__PURE__*/React.createElement(RichTextParser, null, emojis[EMOJI_SMILEY_FACE])), /*#__PURE__*/React.createElement("li", {
    onClick: () => onInsertMarkdown(EMOJI_SAD_FACE),
    className: "jsx-".concat(emojisPopoverClasses.__hash)
  }, /*#__PURE__*/React.createElement(RichTextParser, null, emojis[EMOJI_SAD_FACE])), /*#__PURE__*/React.createElement("li", {
    onClick: () => onInsertMarkdown(EMOJI_THUMBS_UP),
    className: "jsx-".concat(emojisPopoverClasses.__hash)
  }, /*#__PURE__*/React.createElement(RichTextParser, null, emojis[EMOJI_THUMBS_UP])), /*#__PURE__*/React.createElement("li", {
    onClick: () => onInsertMarkdown(EMOJI_THUMBS_DOWN),
    className: "jsx-".concat(emojisPopoverClasses.__hash)
  }, /*#__PURE__*/React.createElement(RichTextParser, null, emojis[EMOJI_THUMBS_DOWN]))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: emojisPopoverClasses.__hash
  }, emojisPopoverClasses));
};

EmojisPopover.propTypes = {
  onClose: PropTypes.func.isRequired,
  onInsertMarkdown: PropTypes.func.isRequired,
  reference: PropTypes.object
};

const IconButtonWithTooltip = _ref2 => {
  let {
    tooltipContent,
    disabled,
    icon,
    onClick
  } = _ref2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tooltip, {
    content: tooltipContent,
    placement: "bottom",
    closeDelay: 200
  }, _ref3 => {
    let {
      ref,
      onMouseOver,
      onMouseOut
    } = _ref3;
    return /*#__PURE__*/React.createElement("span", {
      ref: ref,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      className: "jsx-".concat(tooltipAnchorClasses.__hash) + " " + "tooltip"
    }, /*#__PURE__*/React.createElement(Button, {
      secondary: true,
      small: true,
      disabled: disabled,
      icon: icon,
      onClick: onClick
    }));
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: tooltipAnchorClasses.__hash
  }, tooltipAnchorClasses));
};

IconButtonWithTooltip.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  tooltipContent: PropTypes.string,
  onClick: PropTypes.func
};

const Toolbar = _ref4 => {
  let {
    disabled,
    onInsertMarkdown,
    onTogglePreview,
    previewButtonDisabled,
    previewMode
  } = _ref4;
  const emojisButtonRef = useRef();
  const [emojisPopoverIsOpen, setEmojisPopoverIsOpen] = useState(false);
  const iconColor = disabled ? colors.grey600 : colors.grey700;
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(tooltipAnchorClasses.__hash, " jsx-").concat(toolbarClasses.__hash) + " " + "toolbar"
  }, !previewMode ? /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(tooltipAnchorClasses.__hash, " jsx-").concat(toolbarClasses.__hash) + " " + "actionsWrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(tooltipAnchorClasses.__hash, " jsx-").concat(toolbarClasses.__hash) + " " + "mainActions"
  }, /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: i18n.t('Bold text'),
    disabled: disabled,
    icon: /*#__PURE__*/React.createElement(IconTextBold24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(BOLD)
  }), /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: i18n.t('Italic text'),
    disabled: disabled,
    icon: /*#__PURE__*/React.createElement(IconTextItalic24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(ITALIC)
  }), /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: i18n.t('Link to a URL'),
    disabled: disabled,
    icon: /*#__PURE__*/React.createElement(IconLink24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(LINK)
  }), /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: i18n.t('Mention a user'),
    disabled: disabled,
    icon: /*#__PURE__*/React.createElement(IconAt24, {
      color: iconColor
    }),
    onClick: () => onInsertMarkdown(MENTION)
  }), /*#__PURE__*/React.createElement("span", {
    ref: emojisButtonRef,
    className: "jsx-".concat(tooltipAnchorClasses.__hash, " jsx-").concat(toolbarClasses.__hash) + " " + "tooltip"
  }, /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: i18n.t('Add emoji'),
    disabled: disabled,
    icon: /*#__PURE__*/React.createElement(IconFaceAdd24, {
      color: iconColor
    }),
    onClick: () => setEmojisPopoverIsOpen(true)
  })), emojisPopoverIsOpen && /*#__PURE__*/React.createElement(EmojisPopover, {
    onClose: () => setEmojisPopoverIsOpen(false),
    onInsertMarkdown: markup => {
      onInsertMarkdown(markup);
      setEmojisPopoverIsOpen(false);
    },
    reference: emojisButtonRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(tooltipAnchorClasses.__hash, " jsx-").concat(toolbarClasses.__hash) + " " + "sideActions"
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    disabled: previewButtonDisabled || disabled,
    onClick: onTogglePreview
  }, i18n.t('Preview')))) : /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(tooltipAnchorClasses.__hash, " jsx-").concat(toolbarClasses.__hash) + " " + "previewWrapper"
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    small: true,
    onClick: onTogglePreview,
    disabled: disabled
  }, i18n.t('Back to write mode'))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: tooltipAnchorClasses.__hash
  }, tooltipAnchorClasses), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: toolbarClasses.__hash
  }, toolbarClasses));
};

Toolbar.propTypes = {
  previewButtonDisabled: PropTypes.bool.isRequired,
  previewMode: PropTypes.bool.isRequired,
  onInsertMarkdown: PropTypes.func.isRequired,
  onTogglePreview: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
export const RichTextEditor = /*#__PURE__*/forwardRef((_ref5, externalRef) => {
  let {
    value,
    disabled,
    inputPlaceholder,
    onChange,
    errorText
  } = _ref5;
  const [previewMode, setPreviewMode] = useState(false);
  const internalRef = useRef();
  const textareaRef = externalRef || internalRef;
  useEffect(() => {
    var _textareaRef$current;

    return (_textareaRef$current = textareaRef.current) === null || _textareaRef$current === void 0 ? void 0 : _textareaRef$current.focus();
  }, [textareaRef]);
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(mainClasses.__hash) + " " + "container"
  }, /*#__PURE__*/React.createElement(Toolbar, {
    onInsertMarkdown: markdown => {
      insertMarkdown(markdown, textareaRef.current, (text, caretPos) => {
        onChange(text);
        textareaRef.current.focus();
        textareaRef.current.selectionEnd = caretPos;
      });

      if (markdown === MENTION) {
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
  }), previewMode ? /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(mainClasses.__hash) + " " + "preview"
  }, /*#__PURE__*/React.createElement(RichTextParser, null, value)) : /*#__PURE__*/React.createElement(Field, {
    error: !!errorText,
    validationText: errorText
  }, /*#__PURE__*/React.createElement(UserMentionWrapper, {
    onUserSelect: onChange,
    inputReference: textareaRef
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: textareaRef,
    placeholder: inputPlaceholder,
    disabled: disabled,
    value: value,
    onChange: event => onChange(event.target.value),
    onKeyDown: event => convertCtrlKey(event, onChange),
    className: "jsx-".concat(mainClasses.__hash) + " " + "textarea"
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: mainClasses.__hash
  }, mainClasses));
});
RichTextEditor.displayName = 'RichTextEditor';
RichTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  inputPlaceholder: PropTypes.string
};