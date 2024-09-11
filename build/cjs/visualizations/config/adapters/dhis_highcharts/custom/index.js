"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomSVGOptions = getCustomSVGOptions;
exports.renderCustomSVG = renderCustomSVG;
var _visTypes = require("../../../../../modules/visTypes.js");
function renderCustomSVG() {
  const renderer = this.renderer;
  const options = this.userOptions.customSVGOptions;
  switch (options.visualizationType) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      console.log('now render SV viz', renderer, options);
      break;
    default:
      break;
  }
}
function getCustomSVGOptions(_ref) {
  let {
    layout
  } = _ref;
  const baseOptions = {
    visualizationType: layout.type
  };
  switch (layout.type) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      return {
        ...baseOptions,
        test: 1
      };
    default:
      return null;
  }
}