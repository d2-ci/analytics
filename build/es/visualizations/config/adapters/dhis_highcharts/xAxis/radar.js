import isString from 'd2-utilizr/lib/isString';
import { FONT_STYLE_HORIZONTAL_AXIS_TITLE, TEXT_ALIGN_CENTER } from '../../../../../modules/fontStyle.js';
import { isVerticalType, VIS_TYPE_RADAR } from '../../../../../modules/visTypes.js';
import { getTextAlignOption } from '../getTextAlignOption.js';
import { getDefault } from './index.js';
export default ((store, layout) => {
  var _config$title;

  const config = getDefault(store, layout);

  if (isString((_config$title = config.title) === null || _config$title === void 0 ? void 0 : _config$title.text) && config.title.align === getTextAlignOption(TEXT_ALIGN_CENTER, FONT_STYLE_HORIZONTAL_AXIS_TITLE, isVerticalType(VIS_TYPE_RADAR))) {
    config.title.textAlign = 'right';
  }

  return config;
});