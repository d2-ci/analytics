"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadCustomSVG;
var _visTypes = require("../../../../../../modules/visTypes.js");
var _index = _interopRequireDefault(require("./singleValue/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function loadCustomSVG(visType) {
  switch (visType) {
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      _index.default.call(this);
      break;
    default:
      break;
  }
}