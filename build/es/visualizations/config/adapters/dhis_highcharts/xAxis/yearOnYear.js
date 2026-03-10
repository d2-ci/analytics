import objectClean from 'd2-utilizr/lib/objectClean';
import { FONT_STYLE_HORIZONTAL_AXIS_TITLE, mergeFontStyleWithDefault } from '../../../../../modules/fontStyle.js';
import { getAxis } from '../../../../util/axes.js';
import getAxisTitle from '../getAxisTitle.js';
import { getLabels } from './index.js';
export default function (store, layout, extraOptions) {
  var _axis$title, _axis$title2;
  let categories;
  const AXIS_TYPE = 'DOMAIN';
  const AXIS_INDEX = 0;
  const axis = getAxis(layout.axes, AXIS_TYPE, AXIS_INDEX);
  if (extraOptions.xAxisLabels) {
    categories = extraOptions.xAxisLabels;
  } else {
    // look for the response with the longer list of periods.
    // in some cases (ie. weeks per year) responses might have a different number of periods in metadata
    const res = store.data.reduce((out, r) => {
      if (out) {
        if (r.metaData.dimensions.pe.length > out.metaData.dimensions.pe.length) {
          out = r;
        }
      } else {
        out = r;
      }
      return out;
    }, {});
    const metaData = res.metaData;
    categories = metaData.dimensions.pe.reduce((categories, periodId) => {
      // TODO use shortName or pass extra option to the request for getting short names in name prop
      categories.push(metaData.items[periodId].name);
      return categories;
    }, []);
  }
  return objectClean({
    categories,
    title: getAxisTitle((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text, mergeFontStyleWithDefault((_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.fontStyle, FONT_STYLE_HORIZONTAL_AXIS_TITLE), FONT_STYLE_HORIZONTAL_AXIS_TITLE, layout.type),
    labels: getLabels(axis)
  });
}