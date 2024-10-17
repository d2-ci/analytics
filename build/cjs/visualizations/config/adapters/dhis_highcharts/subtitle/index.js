"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _isString = _interopRequireDefault(require("d2-utilizr/lib/isString"));
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _visTypes = require("../../../../../modules/visTypes.js");
var _getFilterText = _interopRequireDefault(require("../../../../util/getFilterText.js"));
var _getTextAlignOption = require("../getTextAlignOption.js");
var _yearOverYear = _interopRequireDefault(require("../title/yearOverYear.js"));
var _singleValue = _interopRequireWildcard(require("./singleValue.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DASHBOARD_SUBTITLE = {
  style: {
    // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '12px',
    color: '#555',
    textShadow: '0 0 #999'
  }
};
function getDefault(layout, dashboard, filterTitle) {
  return dashboard || (0, _isString.default)(layout.title) ? filterTitle : undefined;
}
function _default(series, layout, metaData, extraOptions) {
  if (layout.hideSubtitle) {
    return null;
  }
  const {
    dashboard,
    legendSets
  } = extraOptions;
  const legendOptions = layout.legend;
  const fontStyle = (0, _fontStyle.mergeFontStyleWithDefault)(layout.fontStyle && layout.fontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE], _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE);
  const subtitle = Object.assign({
    text: undefined
  }, dashboard ? DASHBOARD_SUBTITLE : {
    align: (0, _getTextAlignOption.getTextAlignOption)(fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_ALIGN], _fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE, (0, _visTypes.isVerticalType)(layout.type)),
    style: {
      // DHIS2-578: dynamically truncate subtitle when it's taking more than 1 line
      color: undefined,
      fontSize: `${fontStyle[_fontStyle.FONT_STYLE_OPTION_FONT_SIZE]}px`,
      fontWeight: fontStyle[_fontStyle.FONT_STYLE_OPTION_BOLD] ? _fontStyle.FONT_STYLE_OPTION_BOLD : 'normal',
      fontStyle: fontStyle[_fontStyle.FONT_STYLE_OPTION_ITALIC] ? _fontStyle.FONT_STYLE_OPTION_ITALIC : 'normal',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  });

  // DHIS2-578: allow for optional custom subtitle
  const customSubtitle = layout.subtitle && layout.displaySubtitle || layout.subtitle;
  if ((0, _isString.default)(customSubtitle) && customSubtitle.length) {
    subtitle.text = customSubtitle;
  } else {
    const filterTitle = (0, _getFilterText.default)(layout.filters, metaData);
    switch (layout.type) {
      case _visTypes.VIS_TYPE_SINGLE_VALUE:
        subtitle.text = (0, _singleValue.default)(layout, metaData);
        break;
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
        subtitle.text = (0, _yearOverYear.default)(layout, metaData, Boolean(!dashboard));
        break;
      case _visTypes.VIS_TYPE_SCATTER:
        subtitle.text = filterTitle;
        break;
      default:
        subtitle.text = getDefault(layout, dashboard, filterTitle);
    }
  }
  switch (layout.type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      {
        var _defaultFontStyle$FON, _layout$fontStyle, _layout$fontStyle$FON;
        const defaultColor = _fontStyle.defaultFontStyle === null || _fontStyle.defaultFontStyle === void 0 ? void 0 : (_defaultFontStyle$FON = _fontStyle.defaultFontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE]) === null || _defaultFontStyle$FON === void 0 ? void 0 : _defaultFontStyle$FON[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR];
        const customColor = layout === null || layout === void 0 ? void 0 : (_layout$fontStyle = layout.fontStyle) === null || _layout$fontStyle === void 0 ? void 0 : (_layout$fontStyle$FON = _layout$fontStyle[_fontStyle.FONT_STYLE_VISUALIZATION_SUBTITLE]) === null || _layout$fontStyle$FON === void 0 ? void 0 : _layout$fontStyle$FON[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR];
        subtitle.style.color = (0, _singleValue.getSingleValueSubtitleColor)(customColor, defaultColor, series[0], legendOptions, legendSets);
        if (dashboard) {
          // Single value subtitle text should be multiline
          /* TODO: The default color of the subtitle now is #4a5768 but the
           * original implementation used #666, which is a lighter grey.
           * If we want to keep this color, changes are needed here. */
          Object.assign(subtitle.style, {
            wordWrap: 'normal',
            whiteSpace: 'normal',
            overflow: 'visible',
            textOverflow: 'initial'
          });
        }
      }
      break;
    default:
      subtitle.style.color = fontStyle[_fontStyle.FONT_STYLE_OPTION_TEXT_COLOR];
      break;
  }
  return subtitle;
}