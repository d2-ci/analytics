import { FONT_STYLE_HORIZONTAL_AXIS_TITLE, mergeFontStyleWithDefault } from '../../../../../modules/fontStyle.js';
import { getAxis } from '../../../../util/axes.js';
import getAxisTitle from '../getAxisTitle.js';
import getCategories from '../getCategories.js';
import { getLabels } from './index.js';
const AXIS_TYPE = 'DOMAIN';
const AXIS_INDEX = 0;
export default function (store, layout) {
  var _axis$title, _axis$title2;
  const axis1Categories = getCategories(store.data[0].metaData, layout.rows[1].dimension);
  const axis2Categories = getCategories(store.data[0].metaData, layout.rows[0].dimension);
  const axis = getAxis(layout.axes, AXIS_TYPE, AXIS_INDEX);

  // bottom x axis
  const xAxis = [{
    title: getAxisTitle((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text, mergeFontStyleWithDefault((_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.fontStyle, FONT_STYLE_HORIZONTAL_AXIS_TITLE), FONT_STYLE_HORIZONTAL_AXIS_TITLE, layout.type),
    categories: Array.from({
      length: axis2Categories.length || 1
    }, () => axis1Categories),
    labels: getLabels(axis)
  }];

  // top x axis
  xAxis.push({
    categories: axis2Categories,
    labels: xAxis[0].labels,
    gridLineWidth: 1,
    opposite: 'true'
  });
  return xAxis;
}