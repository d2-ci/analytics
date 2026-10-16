"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertMarkdown = exports.emojis = exports.convertCtrlKey = exports.MENTION = exports.LINK = exports.ITALIC = exports.EMOJI_THUMBS_UP = exports.EMOJI_THUMBS_DOWN = exports.EMOJI_SMILEY_FACE = exports.EMOJI_SAD_FACE = exports.BOLD = void 0;
const BOLD = exports.BOLD = 'bold';
const ITALIC = exports.ITALIC = 'italic';
const LINK = exports.LINK = 'link';
const MENTION = exports.MENTION = 'mention';
const EMOJI_SMILEY_FACE = exports.EMOJI_SMILEY_FACE = 'smileyFace';
const EMOJI_SAD_FACE = exports.EMOJI_SAD_FACE = 'sadFace';
const EMOJI_THUMBS_UP = exports.EMOJI_THUMBS_UP = 'thumbsUp';
const EMOJI_THUMBS_DOWN = exports.EMOJI_THUMBS_DOWN = 'thumsDown';
const emojis = exports.emojis = {
  [EMOJI_SMILEY_FACE]: ':-)',
  [EMOJI_SAD_FACE]: ':-(',
  [EMOJI_THUMBS_UP]: ':+1',
  [EMOJI_THUMBS_DOWN]: ':-1'
};
const markdownMap = {
  [ITALIC]: {
    prefix: '_',
    postfix: '_'
  },
  [BOLD]: {
    prefix: '*',
    postfix: '*'
  },
  [LINK]: {
    prefix: '[',
    postfix: '](https://link-url)'
  },
  [MENTION]: {
    prefix: '@'
  },
  [EMOJI_SMILEY_FACE]: {
    prefix: emojis[EMOJI_SMILEY_FACE]
  },
  [EMOJI_SAD_FACE]: {
    prefix: emojis[EMOJI_SAD_FACE]
  },
  [EMOJI_THUMBS_UP]: {
    prefix: emojis[EMOJI_THUMBS_UP]
  },
  [EMOJI_THUMBS_DOWN]: {
    prefix: emojis[EMOJI_THUMBS_DOWN]
  }
};
const trim = str => {
  const leftSpaces = /^\s+/;
  const rightSpaces = /\s+$/;
  return str.replace(leftSpaces, '').replace(rightSpaces, '');
};
const insertMarkdown = (markdown, target, cb) => {
  const {
    selectionStart: start,
    selectionEnd: end,
    value
  } = target;
  const marker = markdownMap[markdown] || null;
  if (!marker || !cb || start < 0) {
    return;
  }
  let newValue;
  let caretPos = end + 1;
  const padMarkers = text => {
    // is caret between two markers (i.e., "**" or "__")? Then do not add padding
    if (start === end && value.length && start > 0) {
      if (value[start - 1] === markdownMap[BOLD].prefix && value[start] === markdownMap[BOLD].prefix || value[start - 1] === markdownMap[ITALIC].prefix && value[start] === markdownMap[ITALIC].prefix) {
        return text;
      }
    }
    if (value.length && start > 0 && value[start - 1] !== ' ') {
      text = ` ${text}`;
      ++caretPos;
    }
    if (value.length && end !== value.length && value[end] !== ' ') {
      text = `${text} `;
    }
    return text;
  };
  if (start === end) {
    //no text
    const valueArr = value.split('');
    let markdownString = marker.prefix;
    if (marker.postfix) {
      markdownString += marker.postfix;
    }
    valueArr.splice(start, 0, padMarkers(markdownString));
    newValue = valueArr.join('');

    // for smileys, put the caret after a space
    if (Object.keys(emojis).includes(markdown)) {
      newValue += ' ';
      caretPos = caretPos + newValue.length - 1;
    }
  } else {
    const text = value.slice(start, end);
    const trimmedText = trim(text); // TODO really needed?

    // adjust caretPos based on trimmed text selection
    caretPos = caretPos - (text.length - trimmedText.length) + 1;
    let markdownString = `${marker.prefix}${trimmedText}`;
    if (marker.postfix) {
      markdownString += marker.postfix;
    }
    newValue = [value.slice(0, start), padMarkers(markdownString), value.slice(end)].join('');
  }
  cb(newValue, caretPos);
};
exports.insertMarkdown = insertMarkdown;
const convertCtrlKey = (event, cb) => {
  const {
    key,
    ctrlKey,
    metaKey
  } = event;
  if (key === 'b' && (ctrlKey || metaKey)) {
    event.preventDefault();
    insertMarkdown(BOLD, event.target, cb);
  } else if (key === 'i' && (ctrlKey || metaKey)) {
    event.preventDefault();
    insertMarkdown(ITALIC, event.target, cb);
  }
};
exports.convertCtrlKey = convertCtrlKey;