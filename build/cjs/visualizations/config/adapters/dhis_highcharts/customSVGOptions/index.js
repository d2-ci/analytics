"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCustomSVGOptions;
var _visTypes = require("../../../../../modules/visTypes.js");
var _index = _interopRequireDefault(require("./singleValue/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function getCustomSVGOptions(_ref) {
  let {
    extraConfig,
    layout,
    extraOptions,
    metaData,
    series
  } = _ref;
  const baseOptions = {
    visualizationType: layout.type
  };
  switch (layout.type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        ...baseOptions,
        ...(0, _index.default)({
          extraConfig,
          layout,
          extraOptions,
          metaData,
          series
        })
      };
    default:
      break;
  }
}