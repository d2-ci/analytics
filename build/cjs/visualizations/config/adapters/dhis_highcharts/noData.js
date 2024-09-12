"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var _visTypes = require("../../../../modules/visTypes.js");
function _default(visualizationType) {
  return {
    style: {
      fontSize: '13px',
      fontWeight: 'normal',
      /* Hide no data label for single value visualizations because
       * the data is always missing. */
      opacity: visualizationType === _visTypes.VIS_TYPE_SINGLE_VALUE ? 0 : 1
    }
  };
}