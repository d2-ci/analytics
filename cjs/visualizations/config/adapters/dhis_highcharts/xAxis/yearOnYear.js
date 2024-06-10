"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _fontStyle = require("../../../../../modules/fontStyle.js");
var _axes = require("../../../../util/axes.js");
var _getAxisTitle = _interopRequireDefault(require("../getAxisTitle.js"));
var _index = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _default(store, layout, extraOptions) {
  var _axis$title, _axis$title2;
  let categories;
  const AXIS_TYPE = 'DOMAIN';
  const AXIS_INDEX = 0;
  const axis = (0, _axes.getAxis)(layout.axes, AXIS_TYPE, AXIS_INDEX);
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
  return (0, _objectClean.default)({
    categories,
    title: (0, _getAxisTitle.default)((_axis$title = axis.title) === null || _axis$title === void 0 ? void 0 : _axis$title.text, (0, _fontStyle.mergeFontStyleWithDefault)((_axis$title2 = axis.title) === null || _axis$title2 === void 0 ? void 0 : _axis$title2.fontStyle, _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE), _fontStyle.FONT_STYLE_HORIZONTAL_AXIS_TITLE, layout.type),
    labels: (0, _index.getLabels)(axis)
  });
}