"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTUAL_NUMBER_HEIGHT_FACTOR = void 0;
// multiply value text size with this factor
// to get very close to the actual number height
// as numbers don't go below the baseline like e.g. "j" and "g"
const ACTUAL_NUMBER_HEIGHT_FACTOR = 2 / 3;
exports.ACTUAL_NUMBER_HEIGHT_FACTOR = ACTUAL_NUMBER_HEIGHT_FACTOR;