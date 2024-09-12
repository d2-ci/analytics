"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomSVGOptions = getCustomSVGOptions;
exports.renderCustomSVG = renderCustomSVG;
var _visTypes = require("../../../../../modules/visTypes.js");
var _index = require("./singleValue/index.js");
function renderCustomSVG() {
  const renderer = this.renderer;
  const options = this.userOptions.customSVGOptions;
  switch (options.visualizationType) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      console.log('now render SV viz', this);
      break;
    default:
      break;
  }
}
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
        ...(0, _index.getSingleValueCustomSVGOptions)({
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