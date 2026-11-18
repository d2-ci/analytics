"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFontStyleWithDefault = exports.getTextAlignOptions = exports.getFontSizeOptions = exports.deleteFontStyleOption = exports.defaultFontStyle = exports.TEXT_ALIGN_RIGHT = exports.TEXT_ALIGN_LEFT = exports.TEXT_ALIGN_CENTER = exports.FONT_STYLE_VISUALIZATION_TITLE = exports.FONT_STYLE_VISUALIZATION_SUBTITLE = exports.FONT_STYLE_VERTICAL_AXIS_TITLE = exports.FONT_STYLE_REGRESSION_LINE_LABEL = exports.FONT_STYLE_OPTION_UNDERLINE = exports.FONT_STYLE_OPTION_TEXT_COLOR = exports.FONT_STYLE_OPTION_TEXT_ALIGN = exports.FONT_STYLE_OPTION_ITALIC = exports.FONT_STYLE_OPTION_FONT_SIZE = exports.FONT_STYLE_OPTION_FONT = exports.FONT_STYLE_OPTION_BOLD = exports.FONT_STYLE_LEGEND = exports.FONT_STYLE_HORIZONTAL_AXIS_TITLE = exports.FONT_STYLE_AXIS_LABELS = void 0;
var _ui = require("@dhis2/ui");
var _index = _interopRequireDefault(require("../locales/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/

// Font styles
const FONT_STYLE_VISUALIZATION_TITLE = exports.FONT_STYLE_VISUALIZATION_TITLE = 'visualizationTitle';
const FONT_STYLE_VISUALIZATION_SUBTITLE = exports.FONT_STYLE_VISUALIZATION_SUBTITLE = 'visualizationSubtitle';
const FONT_STYLE_HORIZONTAL_AXIS_TITLE = exports.FONT_STYLE_HORIZONTAL_AXIS_TITLE = 'horizontalAxisTitle';
const FONT_STYLE_VERTICAL_AXIS_TITLE = exports.FONT_STYLE_VERTICAL_AXIS_TITLE = 'verticalAxisTitle';
const FONT_STYLE_LEGEND = exports.FONT_STYLE_LEGEND = 'legend';
const FONT_STYLE_AXIS_LABELS = exports.FONT_STYLE_AXIS_LABELS = 'axisLabel';
const FONT_STYLE_REGRESSION_LINE_LABEL = exports.FONT_STYLE_REGRESSION_LINE_LABEL = 'regressionLineLabel';
// Options
const FONT_STYLE_OPTION_FONT = exports.FONT_STYLE_OPTION_FONT = 'font';
const FONT_STYLE_OPTION_FONT_SIZE = exports.FONT_STYLE_OPTION_FONT_SIZE = 'fontSize';
const FONT_STYLE_OPTION_BOLD = exports.FONT_STYLE_OPTION_BOLD = 'bold';
const FONT_STYLE_OPTION_ITALIC = exports.FONT_STYLE_OPTION_ITALIC = 'italic';
const FONT_STYLE_OPTION_UNDERLINE = exports.FONT_STYLE_OPTION_UNDERLINE = 'underline';
const FONT_STYLE_OPTION_TEXT_COLOR = exports.FONT_STYLE_OPTION_TEXT_COLOR = 'textColor';
const FONT_STYLE_OPTION_TEXT_ALIGN = exports.FONT_STYLE_OPTION_TEXT_ALIGN = 'textAlign';
// Text align
const TEXT_ALIGN_LEFT = exports.TEXT_ALIGN_LEFT = 'LEFT';
const TEXT_ALIGN_CENTER = exports.TEXT_ALIGN_CENTER = 'CENTER';
const TEXT_ALIGN_RIGHT = exports.TEXT_ALIGN_RIGHT = 'RIGHT';

// Tiers
const TIER1 = 'tier1';
const TIER2 = 'tier2';
const getFontSizeOptions = fontStyleKey => {
  const fontSizes = [{
    key: 'xSmall',
    label: _index.default.t('Extra Small'),
    [TIER1]: 11,
    [TIER2]: 9
  }, {
    key: 'small',
    label: _index.default.t('Small'),
    [TIER1]: 13,
    [TIER2]: 11
  }, {
    key: 'regular',
    label: _index.default.t('Regular'),
    [TIER1]: 18,
    [TIER2]: 13
  }, {
    key: 'large',
    label: _index.default.t('Large'),
    [TIER1]: 27,
    [TIER2]: 18
  }, {
    key: 'xLarge',
    label: _index.default.t('Extra Large'),
    [TIER1]: 42,
    [TIER2]: 24
  }];
  const tier = [FONT_STYLE_VISUALIZATION_TITLE, FONT_STYLE_VISUALIZATION_SUBTITLE].includes(fontStyleKey) ? TIER1 : TIER2;
  const result = {};
  fontSizes.forEach(size => {
    result[size.key] = {
      label: size.label,
      value: size[tier]
    };
  });
  return result;
};
exports.getFontSizeOptions = getFontSizeOptions;
const getTextAlignOptions = (fontStyleKey, isVertical) => {
  switch (fontStyleKey) {
    case FONT_STYLE_HORIZONTAL_AXIS_TITLE:
    case FONT_STYLE_VERTICAL_AXIS_TITLE:
      return axisTitleAlignOptions();
    case FONT_STYLE_VISUALIZATION_TITLE:
    case FONT_STYLE_VISUALIZATION_SUBTITLE:
    case FONT_STYLE_LEGEND:
      return defaultAlignOptions();
    case FONT_STYLE_REGRESSION_LINE_LABEL:
    default:
      return isVertical ? verticalAlignOptions() : defaultAlignOptions();
  }
};
exports.getTextAlignOptions = getTextAlignOptions;
const defaultAlignOptions = () => [{
  label: _index.default.t('Left'),
  value: TEXT_ALIGN_LEFT
}, {
  label: _index.default.t('Center'),
  value: TEXT_ALIGN_CENTER
}, {
  label: _index.default.t('Right'),
  value: TEXT_ALIGN_RIGHT
}];
const axisTitleAlignOptions = () => [{
  label: _index.default.t('Start'),
  value: TEXT_ALIGN_LEFT
}, {
  label: _index.default.t('Middle'),
  value: TEXT_ALIGN_CENTER
}, {
  label: _index.default.t('End'),
  value: TEXT_ALIGN_RIGHT
}];
const verticalAlignOptions = () => [{
  label: _index.default.t('Top'),
  value: TEXT_ALIGN_LEFT
}, {
  label: _index.default.t('Middle'),
  value: TEXT_ALIGN_CENTER
}, {
  label: _index.default.t('Bottom'),
  value: TEXT_ALIGN_RIGHT
}];
const defaultFont = 'Roboto';
const defaultFontStyle = exports.defaultFontStyle = {
  [FONT_STYLE_VISUALIZATION_TITLE]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_VISUALIZATION_TITLE).regular.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey900,
    [FONT_STYLE_OPTION_TEXT_ALIGN]: TEXT_ALIGN_CENTER
  },
  [FONT_STYLE_VISUALIZATION_SUBTITLE]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_VISUALIZATION_SUBTITLE).small.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey700,
    [FONT_STYLE_OPTION_TEXT_ALIGN]: TEXT_ALIGN_CENTER
  },
  [FONT_STYLE_HORIZONTAL_AXIS_TITLE]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_HORIZONTAL_AXIS_TITLE).regular.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey900,
    [FONT_STYLE_OPTION_TEXT_ALIGN]: TEXT_ALIGN_CENTER
  },
  [FONT_STYLE_VERTICAL_AXIS_TITLE]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_VERTICAL_AXIS_TITLE).regular.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey900,
    [FONT_STYLE_OPTION_TEXT_ALIGN]: TEXT_ALIGN_CENTER
  },
  [FONT_STYLE_LEGEND]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_LEGEND).regular.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey900,
    [FONT_STYLE_OPTION_TEXT_ALIGN]: TEXT_ALIGN_CENTER
  },
  [FONT_STYLE_AXIS_LABELS]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_AXIS_LABELS).small.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey800
  },
  [FONT_STYLE_REGRESSION_LINE_LABEL]: {
    [FONT_STYLE_OPTION_FONT]: defaultFont,
    [FONT_STYLE_OPTION_FONT_SIZE]: getFontSizeOptions(FONT_STYLE_REGRESSION_LINE_LABEL).regular.value,
    [FONT_STYLE_OPTION_BOLD]: false,
    [FONT_STYLE_OPTION_ITALIC]: false,
    [FONT_STYLE_OPTION_UNDERLINE]: false,
    [FONT_STYLE_OPTION_TEXT_COLOR]: _ui.colors.grey900,
    [FONT_STYLE_OPTION_TEXT_ALIGN]: TEXT_ALIGN_LEFT
  }
};
const mergeFontStyleWithDefault = (fontStyle, fontStyleKey) => ({
  ...defaultFontStyle[fontStyleKey],
  ...fontStyle
});

//FIXME: Is this function unused? Remove?
exports.mergeFontStyleWithDefault = mergeFontStyleWithDefault;
const deleteFontStyleOption = (inputFontStyle, fontStyleKey, option) => {
  const style = {
    ...inputFontStyle,
    [fontStyleKey]: {
      ...inputFontStyle[fontStyleKey]
    }
  };
  style[fontStyleKey] && delete style[fontStyleKey][option];
  !Object.keys(style[fontStyleKey]).length && delete style[fontStyleKey];
  return Object.keys(style).length ? style : null;
};
exports.deleteFontStyleOption = deleteFontStyleOption;